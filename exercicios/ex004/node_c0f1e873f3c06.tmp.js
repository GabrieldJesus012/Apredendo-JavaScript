<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
        var nome= window.prompt('Qual é seu nome?')
        document.write(`Ola, ${nome}! seu nome tem ${nome.length} letras.`)
        document.writeln(`Seu nome em maiusculo é ${nome.toUpperCase()}`)
        document.writeln(`Seu nome em minusculo é ${nome.toLowerCase()}`)
    </script>
</body>
</html>