<?php
// Configuração da conexão com o banco de dados
$hostname = '127.0.0.1'; // Endereço do servidor MySQL
$username = 'root'; // Nome de usuário do MySQL
$password = 'root'; // Senha do MySQL
$database = 'socorro_sa'; // Nome do banco de dados MySQL

// Tentar estabelecer a conexão
$conn = new mysqli($hostname, $username, $password, $database);

// Verificar se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("Erro na conexão com o MySQL: " . $conn->connect_error);
} else {
    echo "Conexão ao MySQL estabelecida com sucesso.";
}

// Agora você pode executar consultas SQL, inserções, atualizações, etc.

// Lembre-se de fechar a conexão quando terminar de usá-la
$conn->close();
?>