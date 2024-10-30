<?php
$servidor = "localhost";
$usuario_db = "root";
$contraseña_db = "";
$basedatos = "olimpiadas_deportivas";
$conexion = mysqli_connect($servidor, $usuario_db, $contraseña_db, $basedatos);
if($conexion->connect_error) {
die("Error de conexión: " . $conexion->connect_error);
}

$usuario = $_POST["usuario"];
$rol_institucion = $_POST["rol_institucion"];
$contrasena = $_POST["contrasena"];
$confirmar_contrasena = $_POST["confirmar-contrasena"];
if ($contrasena !== $confirmar_contrasena) {
    die("Las contraseñas no coinciden.");
}
$usuario = $conexion->real_escape_string($usuario);
$rol_institucion = $conexion->real_escape_string($rol_institucion);
$contrasena = $conexion->real_escape_string($contrasena);
$contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);
$sql = "INSERT INTO registro (usuario, rol_institucion, contrasena) VALUES ('$usuario',
'$rol_institucion', '$contrasena_hash')";
if ($conexion->query($sql) === TRUE) {
echo "Registro exitoso";
} else {
echo "Error al registrar: " . $conexion->error;
}
$conexion->close();
?>
