<html>
<body>

<?php
echo "<table border=\"1\">";
$size = $_POST["size"];
for($i=0;$i<=$size;$i++){
    echo("<tr>");
    for($j=0;$j<=$size;$j++){
	echo("<td>" .$i*$j. "</td>");	
    }
    echo("</tr>");
}
echo "</table>"
?>
</body>
</html>
