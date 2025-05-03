<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type"); 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    function sanitizeInput($data) {
        return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }

    $inputData = json_decode(file_get_contents('php://input'), true);
    
    if (is_null($inputData)) {
        echo json_encode(["success" => false, "message" => "Dados inválidos."]);
        exit;
    }

    // Recebendo e sanitizando os dados do formulário
    $nome         = sanitizeInput($inputData['nome'] ?? '');
    $whatsapp     = sanitizeInput($inputData['whatsapp'] ?? '');
    $email        = filter_var($inputData['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $idade        = sanitizeInput($inputData['idade'] ?? '');
    $localizacao  = sanitizeInput($inputData['localizacao'] ?? '');
    $redesSociais = sanitizeInput($inputData['redes_sociais'] ?? '');
    $profissao    = sanitizeInput($inputData['profissao'] ?? '');
    $empregado    = sanitizeInput($inputData['empregado'] ?? '');

    // Validações básicas
    if (empty($nome) || empty($whatsapp) || empty($email) || empty($idade) || empty($localizacao) || empty($profissao) || empty($empregado)) {
        echo json_encode(["success" => false, "message" => "Por favor, preencha todos os campos obrigatórios."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "E-mail inválido."]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        require_once './emailCredentials.php';
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpEmail;
        $mail->Password   = $smtpPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = $smtpPortNumber;

        $mail->CharSet = 'UTF-8';

        $mail->setFrom($smtpEmail, $nome);
        $mail->addAddress($emailReceiver);
        $mail->addReplyTo($email, $nome);
        $mail->addCC($emailReceiverInCopy);

        $mail->isHTML(false);
        $mail->Subject = "Novo cadastro de $nome";
        $mail->Body = 
            "Nome: $nome\n".
            "Email: $email\n".
            "WhatsApp: $whatsapp\n".
            "Idade: $idade\n".
            "Localização: $localizacao\n".
            "Redes Sociais: $redesSociais\n".
            "Profissão: $profissao\n".
            "Empregado: $empregado\n";

        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "Inscrição enviada com sucesso!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Erro ao enviar a inscrição."]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método inválido."]);
}
?>
