import React from 'react'
import Head from 'next/head'
import { Banner } from '@/components/common/Banner'
import './style.css'

const Regulamento = () => {
  const colStyles = 'flex flex-col lg:w-1/3 w-full border border-slate-950 rounded p-4'
  return (
    <>
      <Head><title>Regulamento - Ibremp</title></Head>
      <Banner title='Regulamento'/>
      <section className='regulament flex flex-col justify-center items-center text-gray-700 py-8 px-4 gap-8'>
        <div className="flex lg:flex-row flex-col justify-between max-w-[1280px] w-full gap-4">
          <div className={`${colStyles}`}>
            <p><span className='font-bold'>Equipe Editorial: </span></p>
            <p>Editor:<br/>
            Instituto de Registro Empresarial e Integração – IBREmp</p>
          </div>
          <div className={`${colStyles}`}>
            <p><span className='font-bold'>Coordenação </span></p>
            <p>Teresa Cristina Gonçalves Pantoja (RJ)</p>
            <p>Helisia Costa Góes (AP)</p>
            <p>José Aderson Cerezoli (RJ)</p>
          </div>
          <div className={`${colStyles}`}>
          <p><span className='font-bold'>Coordenação </span></p>
          <p>Teresa Cristina G. Pantoja (RJ)</p>
          <p>Helisia C. Góes (AP)</p>
          <p>José A. Cerezoli (RJ)</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center max-w-[1280px] w-full gap-4">
          <div className={`flex flex-col lg:w-1/2 w-full border border-slate-950 rounded p-4`}>
          <p><span className='font-bold'>Conselho Editorial: </span></p>
            <ul className='whitespace-pre-line'>
              <li>Anderson Rodrigues da Silva (SP)</li>
              <li>André Luiz Santa Cruz Ramos (DF)</li>
              <li>Armando Rovai (SP)</li>
              <li>Carlos Martins Neto (RJ)</li>
              <li>Carolina Gedeon (RJ)</li>
              <li>Cássia Mizusaki Funada (RO)</li>
              <li>Cássio Cavalli (SP)</li>
              <li>Celso Mogioni (SP)</li>
              <li>Eduardo Rodrigues Junior (RJ)</li>
              <li>João Ricardo Coelho (PB)</li>
              <li>Marcelo Vieira von Adamek (SP)</li>
              <li>Márcio Guimarães (RJ)</li>
              <li>Marcus Pereira (PR)</li>
              <li>Maurício Moreira Mendonça de Menezes (RJ)</li>
              <li>Paulo Sérgio Mazzardo (RS)</li>
              <li>Ronald Sharp Jr. (RJ)</li>
              <li>Sérgio Campinho (RJ)</li>
            </ul>
          </div>
          <div className={`flex flex-col lg:w-1/2 w-full border border-slate-950 rounded p-4`}>
          <p><span className='font-bold'>Pareceristas: </span></p>
            <ul className='whitespace-pre-line'>
              <li>Anderson Rodrigues da Silva (SP)</li>
              <li>André Luiz Santa Cruz Ramos (DF)</li>
              <li>Armando Rovai (SP)</li>
              <li>Carlos Martins Neto (RJ)</li>
              <li>Carolina Gedeon (RJ)</li>
              <li>Cássia Mizusaki Funada (RO)</li>
              <li>Cássio Cavalli (SP)</li>
              <li>Celso Mogioni (SP)</li>
              <li>Eduardo Rodrigues Junior (RJ)</li>
              <li>João Ricardo Coelho (PB)</li>
              <li>Marcelo Vieira von Adamek (SP)</li> 
              <li>Márcio Guimarães (RJ)</li>
              <li>Marcus Vinicius Tadeu Pereira (PR)</li>
              <li>Maurício Moreira M. de Menezes (RJ)</li>
              <li>Paulo Sérgio Mazzardo (RS)</li>
              <li>Ronald Sharp Jr. (RJ)</li>
              <li>Sérgio Campinho (RJ)</li> 
            </ul>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center max-w-[1280px] w-full gap-4 mt-4">
          <div className="w-full text-center ">
            <h2 className='font-bold text-4xl'>Políticas Editoriais</h2>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center max-w-[1280px] w-full gap-4">
          <div className={`flex flex-col lg:w-1/2 w-full border border-slate-950 rounded p-4`}>
            <p><span className='font-bold'>Foco e Escopo</span></p>
            <p className='whitespace-pre-wrap'>{`A Revista de Direito Societário e Registro Empresarial é um periódico científico semestral, fundada em 2019, sendo organizada e editada pelo Instituto de Registro Empresarial e Integração – IBREmp, com publicação em versão digital, objetivando fomentar discussões e promover a

publicação de artigos originais, pareceres e comentários jurisprudenciais e legislativos sobre temas atuais nas áreas de Direito Societário, Registro Empresarial e Regulação Econômica.

O IBREmp tem por finalidade promover, divulgar, apoiar e incentivar o estudo, a pesquisa e o debate acerca de temáticas relacionadas à Direito Societário e Registro Empresarial e Regulação Econômica, colaborando para o aperfeiçoamento das normas e políticas públicas nesta seara.`}</p>
          </div>
          <div className={`flex flex-col lg:w-1/2 w-full border border-slate-950 rounded p-4`}>
            <p><span className='font-bold'>Normas de Publicações </span></p>
            <p className='whitespace-pre-wrap'>{`A Revista publica apenas textos inéditos, que versem direta ou indiretamente sobre temáticas de Regulação Econômica, Direito Empresarial, Direito Societário e Registro Empresarial.

Os direitos autorais serão cedidos para o IBREmp, sendo vedado o seu encaminhamento simultâneo a outras revistas, exigindo-se do autor, já antes do início do processo de avaliação, declaração do ineditismo e compromisso de exclusividade pelo prazo de 9 meses.

Os autores interessados em publicar artigos científicos na Revista devem encaminhar seus textos exclusivamente para o e-mail: contato@rbdsre.ibremp.org.br.

Como condição para sua publicação, os artigos enviados serão submetidos à avaliação prévia do Conselho Editorial e dos Pareceristas e devem obedecer às normas descritas a seguir.4`}</p>
            <p><span className='font-bold'>Periodicidade: </span>Semestral.</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center max-w-[1280px] w-full gap-4">
          <div className={`flex flex-col w-full border border-slate-950 rounded p-4`}>
            <p><span className='font-bold'>Auto arquivamento</span></p>
            <p className='mb-4'>Após a publicação na Revista, os Autores têm permissão e serão encorajados a submeter seus documentos para publicação em páginas pessoais ou portais institucionais (sempre com a devida referência bibliográfica).</p>
            <p><span className='font-bold'>Processo de Avaliação pelos Pares</span></p>
              <ol className='list-decimal lg:px-8 px-2'>
                <li>A publicação dos artigos submete-se ao procedimento double blind peer review.</li>
                <li>Os trabalhos serão remetidos, sem identificação de autoria, a dois pareceristas “ad hoc” portadores de título de Mestre ou Doutor.</li>
                <li>Em caso de controvérsia entre os avaliadores, o artigo é submetido a um terceiro avaliador.</li>
                <li>Os pareceristas são sempre Professores Mestres ou Doutores afiliados a renomadas instituições de ensino superior, nacionais ou estrangeiras.</li>
                <li>Os critérios utilizados na avaliação são os seguintes:</li>
                <li>a) O parecerista se encontra em condições de avaliar o artigo por não haver conflito de interesses?</li>
                <li>b) O título reflete de forma clara e suficiente o conteúdo do artigo?</li>
                <li>c) O artigo cumpre as normas metodológicas da revista?</li>
                <li>d) O artigo apresenta uma análise científica acerca do tema?</li>
                <li>e) Há coerência e lógica no desenvolvimento do tema?</li>
                <li>f) As conclusões correspondem às premissas da pesquisa?</li>
                <li>g) As referências bibliográficas são suficientes, adequadas e atualizadas?</li>
                <li>h) Os conceitos empregados ao longo do texto estão, em geral, corretos?</li>
                <li>i) O conteúdo está de acordo com os critérios de não veiculação de preconceitos e/ou difamação e calúnias que possam ofender a integridade dos leitores e/ou indivíduos citados?</li>
                <li>j) Comentários gerais ou específicos que o parecerista julgar pertinentes.</li>
                <li>Após manifestação dos pareceristas, os trabalhos serão submetidos à avaliação e aprovação do Conselho Editorial.</li>
                <li>O processo de avaliação, pelos pareceristas e pelo Conselho Editorial, pode ensejar os seguintes possíveis resultados:</li>
                <li>a) Artigo sem restrições de conteúdo científico: pode ser aceito para publicação.</li>
                <li>b) Artigo com pequenas restrições: pode ser aceito mediante revisão do autor. Neste caso, o autor tem a prerrogativa de enviar, no prazo de 30 dias, uma nova versão com todas as edições e alterações realçadas em vermelho, que será submetida à avaliação dos mesmos pareceristas, para nova análise.</li>
                <li>c) Artigo com grandes restrições de conteúdo: não deve ser aceito para publicação.</li>
                <li>O processo de avaliação deve ser concluído no período de 1 a 2 meses.</li>
              </ol>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center max-w-[1280px] w-full gap-4">
          <div className={`flex flex-col w-full border border-slate-950 rounded p-4`}>
            <p><span className='font-bold'>Formatação e Estrutura Textual</span></p>
            <p><span className='font-bold my-4'>Artigos</span></p>
            <ol className='list-decimal lg:px-8 px-2 has-sublist'>
              <li>Os artigos poderão ser redigidos em português e inglês, sendo permitida a coautoria, limitada a até 3 autores.</li>
              <li>Os artigos devem ser inéditos e sua publicação não deve estar pendente em outro meio. Em casos excepcionais, a critério do Conselho Editorial, com a devida justificativa, poderão ser publicados artigos que já se tornaram públicos previamente. Nestes casos, será obrigatório que o autor informe esta condição, no momento do envio do artigo.</li>
              <li>Juntamente com o artigo, deverá ser enviada cópia eletrônica ou impressa da declaração do autor (modelo anexo) devidamente preenchida.</li>
              <li>Após publicados na Revista do IBREmp, os artigos poderão ser publicados em outros meios de comunicação, com a devida citação fazendo referência à publicação original.</li>
              <li>Os artigos destinados à publicação devem ser entregues exclusivamente por e-mail, em arquivo anexo, no formato Microsoft Word e padrão ABNT NBR 14724, encaminhados para o endereço contato@rbdsre.ibremp.org.br.</li>
              <li>Os textos devem ter no mínimo 15 e no máximo 30 páginas, incluindo folha de rosto e referências, em configuração de página A4, com margens de 2cm e fonte Times New Roman tamanho 12 ou Arial 11, com alinhamento justificado, com espaçamento entre linhas de 1,5, organizado com os seguintes elementos:</li>
              <ol className='list-decimal lg:px-8 px-2 has-sublist'>
                  <li>Folha de rosto com o Título do trabalho, nome do autor/coautor com referência em nota de rodapé com asteriscos, seguido de sua titulação, função e/ou instituição a que se vincula;</li>
                  <li>Resumo contendo entre 100 e 250 palavras;</li>
                  <li>Palavras-chave contendo entre 3 e 5 itens;</li>
                  <li>Resumo bilíngue contendo entre 100 e 250 palavras (abstract);</li>
                  <li>Palavras-chave bilíngue contendo entre 3 e 5 itens (keywords);</li>
                  <li>Corpo de texto;</li>
                  <li>Notas de rodapé numeradas;</li>
                  <li>Referências bibliográficas.</li>
              </ol>
            </ol>
            <p><span className='font-bold my-4'>Pareceres</span></p>
            <ol className='list-decimal lg:px-8 px-2 has-sublist'>
              <li>Os pareceres poderão ser redigidos em português ou inglês, permitida a coautoria.</li>
              <li>Os pareceres devem ser inéditos e sua publicação não deve estar pendente em outro meio. Em casos excepcionais, a critério do Conselho Editorial, com a devida justificativa, poderão ser publicados pareceres que já foram publicados anteriormente. Nestes casos, será obrigatório que o autor informe esta condição, no momento do envio do parecer.</li>
              <li>Juntamente com o parecer, deverá ser enviada cópia eletrônica ou impressa da declaração do autor (modelo anexo) devidamente preenchida.</li>
              <li>Após publicados na Revista do IBREmp, os pareceres poderão ser publicados em outros meios de comunicação, com a devida citação fazendo referência à publicação original.</li>
              <li>Os pareceres destinados à publicação devem ser entregues exclusivamente por e-mail, em arquivo anexo, no formato Microsoft Word e padrão ABNT NBR 14724, encaminhados para o endereço contato@rbdsre.ibremp.org.br.</li>
              <li>Os pareceres devem ter no mínimo 5 e no máximo 15 páginas, incluindo notas de rodapé e referências, em configuração de página A4, com margens de 2cm e fonte Times New Roman tamanho 12 ou Arial tamanho 11, com alinhamento justificado, com espaçamento entre linhas de 1,5, organizado com os seguintes elementos:</li>
              <ol className='list-decimal lg:px-8 px-2 has-sublist'>
                  <li value='6,1'>Nome do autor com referência em nota de rodapé com asteriscos, seguido de sua titulação, função e/ou instituição a que se vincula;</li>
                  <li value='6.2'>Resumo contendo entre 100 e 250 palavras;</li>
                  <li value='6.3'>Corpo de texto;</li>
                  <li value='6.4'>Notas de rodapé numeradas (tamanho 10);</li>
                  <li value='6.5'>Referências bibliográficas.</li>
                  <ul className='list-disc lg:px-8 px-2 '>
                    <li>Comentários Jurisprudenciais e Legislativos</li>
                    <li>Os comentários poderão ser redigidos em português ou inglês, sendo permitida a coautoria.</li>
                    <li>Os comentários devem ser inéditos e sua publicação não deve estar pendente em outro meio. Em casos excepcionais, a critério do Conselho Editorial, com a devida justificativa, poderão ser publicados comentários que já foram publicados anteriormente. Nestes casos, será obrigatório que o autor informe esta condição, no momento do envio do comentário.</li>
                    <li>Juntamente com o comentário, deverá ser enviada cópia eletrônica ou impressa da declaração do autor (modelo anexo) devidamente preenchida.</li>
                    <li>Após publicados na Revista do IBREmp, os comentários poderão ser publicados em outros meios de comunicação, com a devida citação fazendo referência à publicação original.</li>
                    <li>Os comentário destinados à publicação devem ser entregues exclusivamente por e-mail, em arquivo anexo, no formato Microsoft Word e padrão ABNT NBR 14724, encaminhados para o endereço contato@rbdsre.ibremp.org.br.</li>
                    <li>Os comentários devem ter no mínimo 3 e no máximo 8 páginas, incluindo notas de rodapé e referências, em configuração de página A4, com margens de 2cm e fonte Times New Roman tamanho 12 ou Arial tamanho 11, com alinhamento justificado, com espaçamento entre linhas de 1,5, organizado com os seguintes elementos:</li>
                  </ul>
                </ol>
                <ol className='list-decimal lg:px-8 px-2 has-sublist'>
                  <li>Nome do autor com referência em nota de rodapé com asteriscos, seguido de sua titulação, função e/ou instituição a que se vincula;</li>
                  <li>Corpo de texto;</li>
                  <li>Notas de rodapé numeradas (tamanho 10); 6.4 Referências bibliográficas.</li>
                </ol>
              </ol>
          </div>
        </div>
        <div className="flex justify-center max-w-[1280px] w-full gap-4">
          <div className={`flex flex-col w-full border border-slate-950 rounded p-4`}>
            <p><span className='font-bold my-4'>Política de Ética e Diretrizes de Boas Práticas na Publicação</span></p>
              <p className='whitespace-pre-wrap'>{`A Revista tem um compromisso com a ética e a qualidade das publicações, seguindo padrões internacionais de publicação científica. Defendemos um comportamento ético de todas as partes envolvidas na publicação: autores, editor, pareceristas, Equipe Editorial e Editora. Assim, não serão aceitos trabalhos que apresentem plágio ou qualquer outro comportamento antiético.

Deveres do Editor
Decisão de publicação: o editor possui a responsabilidade por decidir quais artigos submetidos à Revista devem ser publicados, devendo ser guiado pelas políticas do Conselho Editorial, que devem obedecer às exigências legais em vigor sobre difamação, violação de direitos autorais e plágio. Para a tomada de decisões o editor pode consultar o Conselho Editorial e os pareceristas.

Transparência e respeito: o editor deve avaliar os trabalhos submetidos para publicação sem levar em conta a raça, sexo, a orientação sexual, a crença religiosa, a origem étnica, a nacionalidade ou a filosofia política dos autores.

Confidencialidade: o editor e demais membros da Equipe Editorial não devem divulgar qualquer informação sobre os trabalhos submetidos para publicação, salvo aquelas necessárias à avaliação pelos pareceristas e pelos conselheiros editoriais.

Divulgação e conflitos de interesse: o editor não deve utilizar em pesquisas próprias, sem o consentimento expresso do autor, materiais inéditos divulgados em trabalhos submetidos para publicação, bem como deve se recusar a avaliar os trabalhos que ensejam conflitos de interesse por questões competitivas,

colaborativas ou outros relacionamentos/ligações com qualquer dos autores, empresas ou (possivelmente) instituições ligadas aos manuscritos.

Envolvimento e cooperação em investigações: o editor deve adotar as medidas necessárias no caso de apresentação de reclamações éticas a respeito dos trabalhos submetidos para publicação.

Deveres dos Pareceristas: 
Contribuição para as decisões editoriais: promover a revisão dos trabalhos submetidos a sua avaliação, visando auxiliar o editor e o Conselho Editorial na tomada de decisões sobre as publicações da Revista. Pontualidade: cumprir os prazos fixados para avaliação e emissão de parecer acerca dos trabalhos que lhe são encaminhados.

Confidencialidade: os trabalhos recebidos para análise devem ser tratados como documentos confidenciais.

Padrões de objetividade: os pareceres devem ser conduzidos de forma objetiva, com expressão clara e concisa dos argumentos que fundamentam o ponto de vista do avaliador.

Fontes: os pareceristas devem revisar as fontes indicadas pelos autores, bem como apontar trabalhos relevantes publicados sobre o tema e que não foram citados pelo autor, devendo ainda indicar qualquer semelhança substancial ou sobreposição entre o trabalho que está sendo avaliado e qualquer outro já publicado.

Divulgação e conflito de interesses: o parecerista não deve utilizar em pesquisas próprias, sem o consentimento expresso do autor, materiais inéditos divulgados em trabalhos submetidos para publicação, bem como deve se recusar a avaliar os trabalhos que ensejam conflitos de interesse por questões competitivas, colaborativas ou outros relacionamentos/ligações com qualquer dos autores, empresas ou (possivelmente) instituições ligadas aos manuscritos.

Deveres dos Autores
Normas gerais: os Autores são responsáveis pelo conteúdo publicado, comprometendo-se, assim, a participar ativamente da discussão dos resultados de sua pesquisa científica, bem como do processo de revisão e aprovação da versão final do trabalho, assumindo total responsabilidade pela condução, resultados e validade de toda investigação científica, bem como pelas opiniões

emitidas.

Veracidade do Conteúdo Textual: ao submeter o trabalho, o autor atesta que todas as afirmações contidas no manuscrito são verdadeiras ou baseadas em pesquisa com razoável exatidão. Assim, declarações fraudulentas ou intencionalmente imprecisas serão consideradas práticas que configuram comportamento antiético e inaceitável.

Originalidade e plágio: os autores devem garantir que as obras são inteiramente originais, assim, devem citar o uso de conteúdos coletados em outros trabalhos e/ou textos. O plágio, em todas as suas formas, constitui comportamento editorial antiético e inaceitável.

Publicação múltipla ou redundante: o autor se compromete a não publicar trabalhos que descrevam essencialmente a mesma pesquisa em mais de um periódico, sem informar aos editores para a obtenção do devido consentimento.

Fontes: o autor se compromete a reconhecer e fazer referência expressa ao trabalho de outros autores, citando as publicações que foram importantes na produção do artigo. As informações obtidas em particular, como em uma conversa, correspondência, ou discussão com terceiros, não devem ser utilizadas ou relatadas sem a permissão expressa da fonte. As informações obtidas por meio de serviços confidenciais não devem ser utilizadas sem a permissão expressa do autor da informação.

Autoria: a autoria do trabalho deve ser restrita àqueles que fizeram uma contribuição significativa para a concepção, projeto, execução ou interpretação do estudo relatado. Todos aqueles que fizeram contribuições significativas devem ser listados como coautores. Pessoas que participaram em certos aspectos do projeto de pesquisa devem ser listadas como colaboradores. O autor principal deve garantir que todos os coautores apropriados estejam incluídos no artigo. O autor principal também deve certificar-se que todos os coautores tomaram conhecimento e aprovaram a versão final do trabalho, bem como que concordaram com sua submissão para publicação.

Divulgação e conflitos de interesses: o autor deve informar, no momento da submissão do trabalho, qualquer situação que possa ensejar conflito de interesse, de ordem pessoal, comercial, política, acadêmica, financeira ou de outra natureza que possa influenciar os resultados ou a interpretação de seu artigo, indicando ainda todas as fontes de apoio financeiro ao trabalho.

Erros fundamentais em trabalhos publicados: se o autor identificar erro significativo ou imprecisão em seu trabalho publicado, deverá informar imediatamente ao editor da revista e cooperar para a devida correção.`}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Regulamento
