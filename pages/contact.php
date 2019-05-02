<?php
//If the form is submitted
if(isset($_POST['submit'])) {

	//Check to make sure that the name field is not empty
	if(trim($_POST['contactname']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['contactname']);
	}

	//Check to make sure that the subject field is not empty
	if(trim($_POST['subject']) == '') {
		$hasError = true;
	} else {
		$subject = trim($_POST['subject']);
	}

	//Check to make sure sure that a valid email address is submitted
	if(trim($_POST['email']) == '')  {
		$hasError = true;
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}

	//Check to make sure comments were entered
	if(trim($_POST['message']) == '') {
		$hasError = true;
	} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}

	//If there is no error, send the email
	if(!isset($hasError)) {
		$emailTo = 'carolinesavery@gmail.com'; //Put your own email address here
		$body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments";
		$headers = 'From: CarolineSavery.com Contact Form < '.$emailTo.' > ' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Contact Caroline</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
 <script src="../js/lib/jquery-2.2.0.min.js"></script>
    <script src="../js/lib/jquery.validate.min.js"></script>
</head>

<body>
	<div id="inner-contents">
		<h2 class="section-title centered">Contact Caroline</h2><a href="#/"><button class="closeButton"><span class="glyphicon glyphicon-remove"></span></button></a>
<div id="contact-wrapper">
	<?php if(isset($hasError)) { //If errors are found ?>
	<p class="error">Please check if you've filled all the fields with valid information. Thank you.</p>
<?php } ?>

<?php if(isset($emailSent) && $emailSent == true) { //If email is sent ?>
	<p><strong>Email Successfully Sent!</strong></p>
	<p>Thanks for the message <strong><?php echo $name;?></strong>! Your email was successfully sent and I will be in touch with you soon.</p>
	<p><a href="http://carolinesavery.com">Click here to go back to the Home page</a></p>
<?php } ?>
	<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" id="contactform">
	<div class="centered">
	    <label for="name"><strong>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
		<input type="text" size="50" name="contactname" id="contactname" value="" class="required" />
	</div>

	<div class="centered">
		<label for="email"><strong>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></label>
		<input type="text" size="50" name="email" id="email" value="" class="required email" />
	</div>

	<div class="centered">
		<label for="subject"><strong>Subject:&nbsp;&nbsp;</strong></label>
		<input type="text" size="50" name="subject" id="subject" value="" class="required" />
	</div>

	<div class="centered">
		<label for="message"><strong>Message:</strong></label>
		<textarea rows="5" cols="50" name="message" id="message" class="required"></textarea>
	</div>
	<div class="centered">
    <input type="submit" value="Send Message" name="submit" id="submit" />
</div>
</form>
</div>
</div>

<script type="text/javascript">
$(document).ready(function(){
	$("#contactform").validate();
});
</script>

</body>
</html>