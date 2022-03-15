<!DOCTYPE html>
<html lang="en">

	<head>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Product Add</title>

		<!-- Normalize -->
		<link rel="stylesheet" type="text/css" href="css/normalize.css">

		<!-- Style -->
		<link rel="stylesheet" type="text/css" href="css/style.css">

		<!-- Bootstrap -->
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

		<!-- font awesome -->
		<link rel="stylesheet" type="text/css" href="fontawesome/css/all.css">

	</head>

	<body>

		<!-- inicio header -->
		<header>
			
			<div class="container">
				
				<nav class="navbar navbar-expand-sm">
					
					<h1>Product Add</h1>

					<ul class="navbar-nav ml-auto">
						<li>
							<a href="add-page.php"><button class="btn btn-primary">Save</button></a>
						</li>
						<li>
							<a href="index.php"><button class="btn btn-primary">Cancel</button></a>
						</li>
					</ul>

				</nav>

			</div>

		</header>
		<!-- fim header -->

		<!-- inicio section -->
		<section>
 
			<div class="container">
				<form id="product_form" method="post" action="choice.php">

					<div class="row">
					
						<div class="form-inline col-6">
							<label class="col-3" for="sku">SKU :</label>
							<input class="form-control ml-5 col-3" type="text" name="sku" id="sku">
						</div>

					</div>

					<div class="row">
					
						<div class="form-inline col-6">
							<label class="col-3" for="name">Name :</label>
							<input class="form-control ml-5 col-3" type="text" name="name" id="name">
						</div>

					</div>

					<div class="row">

						<div class="form-inline col-6">
							<label class="col-3" for="price">Price ($) :</label>
							<input class="form-control ml-5 col-3" type="text" name="price" id="price">
						</div>

					</div>

					<div class="row">

						<div class="form-inline col-6" id="opcao"> 
							<label class="col-3" for="productType">Type Switcher :</label>
							<select name="type" onchange="seletor();" class="form-control ml-5 col-3" id="productType">
								<option selected value="Switcher">Type Switcher</option>
								<option id="DVD" value="Size">DVD-disc</option>
								<option id="Furniture" value="Furniture">Furniture</option>
								<option id="Book" value="Book">Book</option>
							</select>

						</div>

					</div>

					<?php 
					
					if(isset($_GET['type']) && $_GET['type'] == 'size'){ ?>

						<div class="row">
							<div class="form-inline col-6">
								<label class="col-3" for="size">Size (MB) :</label>
								<input class="form-control col-3 ml-5" type="number" name="size" id="size" placeholder="Size (MB)">
							</div>
						</div>
						<small class="ml-4" style="font-weight: bold;">Please provide size in MB format</small>
						<br><br>


					<?php }else if (isset($_GET['type']) && $_GET['type'] == 'furniture') { ?>
							<div class="row">
								<div class="form-inline col-6">
									<label class="col-3" for="size">Height :</label>
									<input class="form-control col-3 ml-5" type="number" name="height" id="height" placeholder="Height (CM)">
								</div>
							</div>

							<div class="row">
								<div class="form-inline col-6">
									<label class="col-3" for="size">Width (CM) :</label>
									<input class="form-control col-3 ml-5" type="number" name="width" id="width" placeholder="Width (CM)">
								</div>
							</div>

							<div class="row">
								<div class="form-inline col-6">
									<label class="col-3" for="size">Length (CM) :</label>
									<input class="form-control col-3 ml-5" type="number" name="length" id="length" placeholder="Length (CM)">
								</div>
							</div>
							<small class="ml-4" style="font-weight: bold;">Please provide dimensions in HxWxL format</small>
							<br><br>
					<?php } else if (isset($_GET['type']) && $_GET['type'] == 'book'){ ?>

							<div class="row">
								<div class="form-inline col-6">
									<label class="col-3" for="size">Weight (KG) :</label>
									<input class="form-control col-3 ml-5" type="number" name="weight" id="weight" placeholder="Weight (KG)">
								</div>
							</div>
							<small class="ml-4" style="font-weight: bold;">Please provide weight in KG format</small>
							<br><br>

					<?php } else if (isset($_GET['type']) && $_GET['type'] == 'switcher'){ 
							header('Location: add-page.php');
					}?> 

					<button class="btn btn-primary">Submit</button>

				</form>
			</div>

		</section>
		<!-- fim section -->

		<!-- inicio footer -->
		<footer class="fixed-bottom">
			&copy; Scandiweb Test assignment
		</footer>
		<!-- fim footer -->

		<!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="js/bootstrap.min.js"></script>
		<!--<script src="js/page.js"></script>-->

	</body>

</html>