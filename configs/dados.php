<?php
require_once '../configs/dados.php'

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // 3. Captura e limpa os dados recebidos
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $senha = $_POST['senha'];

    if ($nome && $email && !empty($senha)) {
        try {
            // 4. Criptografa a senha por segurança antes de salvar
            $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

            // 5. Prepara a query SQL
            $sql = "INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)";
            $stmt = $conexao->prepare($sql);

            // 6. Vincula os parâmetros e executa
            $stmt->bindValue(':nome', $nome);
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':senha', $senhaHash);
            $stmt->execute();

            // 7. Redireciona de volta para o front-end com mensagem de sucesso
            header("Location: ../index.php?sucesso=1");
            exit;

        } catch (PDOException $e) {
            // Se der erro (ex: e-mail duplicado)
            header("Location: ../index.php?erro=1");
            exit;
        }
    } else {
        header("Location: ../index.php?erro=dados_invalidos");
        exit;
    }
} else {
    // Se alguém tentar acessar esse arquivo direto, joga de volta pro formulário
    header("Location: ../index.php");
    exit;
}