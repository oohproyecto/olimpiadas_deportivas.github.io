<?php
$servidor = "localhost";
$usuario_db = "root";
$contraseña_db = "";
$basedatos = "olimpiadas_deportivas";
$conexion = new mysqli($servidor, $usuario_db, $contraseña_db, $basedatos);
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
$usuario = $_POST['usuario'];
$rol_institucion = $_POST["rol_institucion"];
$contrasena = $_POST['contrasena'];
$sql = "SELECT * FROM usuario WHERE usuario = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
    if (password_verify($contrasena, $usuario['contrasena'])) {
        header("Location:calendario.html");
        exit();
    } else {
        echo "usuario o contraseña correctos";
    }
} else {
    echo "usuario o contraseña incorrectos";
}
$stmt->close();
$conexion->close();
?>
