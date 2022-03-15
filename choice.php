<?php 

if($_POST['type'] == 'Size') {
	header('Location: add-page.php?type=size');

} else if ($_POST['type'] == 'Furniture'){
	header('Location: add-page.php?type=furniture');

} else if ($_POST['type'] == 'Book'){
	header('Location: add-page.php?type=book');

} else if ($_POST['type'] == 'Switcher'){
	header('Location: add-page.php?type=Switcher');
}

?>