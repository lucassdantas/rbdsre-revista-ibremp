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

    $name = sanitizeInput($inputData['name'] ?? '');
    $email = filter_var($inputData['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = sanitizeInput($inputData['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
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

        // Configura o charset para UTF-8
        $mail->CharSet = 'UTF-8'; 

        $mail->setFrom($smtpEmail, $name);
        $mail->addAddress($emailReceiver); 
        $mail->addReplyTo($email, $name);
        $mail->addCC($emailReceiverInCopy); 

        // Define a codificação do e-mail para UTF-8
        $mail->isHTML(false); 
        $mail->Subject = "Novo contato de $name";
        $mail->Body    = "Nome: $name\n".
                         "Email: $email\n".
                         "Mensagem: $message\n";

        // Envia o e-mail
        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "Mensagem enviada com sucesso!"]);
        } else {
            echo json_encode(["success" => false, "message" => "Erro ao enviar mensagem."]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método inválido."]);
}
?>
