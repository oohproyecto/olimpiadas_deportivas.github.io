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
$confirmar_contrasena = $_POST["confirmar-contrasena"];
if ($contrasena !== $confirmar_contrasena) {
    die("Las contraseñas no coinciden.");
}
$sql = "SELECT * FROM usuario WHERE usuario = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    echo "El usuario ya existe.";
} else {
    $hash_contrasena = password_hash($contrasena, PASSWORD_DEFAULT);
    $sql_insert = "INSERT INTO usuario (usuario, contrasena, rol_institucion) VALUES (?, ?, ?)";
    $stmt_insert = $conexion->prepare($sql_insert);
    $stmt_insert->bind_param("sss", $usuario, $hash_contrasena, $rol_institucion);
    if ($stmt_insert->execute()) {
        header("Location: ingreso.html");
        exit(); 
    } else {
        echo "Error en el registro.";
    }

    $stmt_insert->close();
}

$stmt->close();
$conexion->close();
?>
