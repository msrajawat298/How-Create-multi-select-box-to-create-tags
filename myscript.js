<?php
if(isset($_POST['save'])){
    echo '<br>'.basename(__FILE__).' '.__LINE__.'<pre> $_POST :: '; print_r($_POST); echo '</pre>'; exit;
}
?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css" />
</head>
<body>
<form method="POST" action="">
    <select name="blog_users[]" class="form-control select2" multiple="multiple" style="width: 100%;"></select>
    <input type="submit" name="save" value="submit"/>
</form>


    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.full.min.js"></script>
    <script>
        $('.select2').select2({
            data: [],
            tags: true,
            maximumSelectionLength: 10,
            tokenSeparators: [',', ' '],
            placeholder: "Select or type keywords"
        });
    </script>
</body>
</html>
