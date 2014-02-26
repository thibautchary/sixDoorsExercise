<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="PrintFeedEntries.js"></script>
        <script src="PrintFeedItems.js"></script>
        <link rel="stylesheet" type="text/css" href="styleSheet1.css"/>
        <link rel="stylesheet" href="font-awesome-4.0.3/css/font-awesome.min.css"/>
        <title></title>
    </head>
    <body>
        
        <?php
        if(isset($_GET['collectionId'])){
            $collectionId=$_GET['collectionId'];
            echo '<div id="feed_items">';
            echo '</div>';
            echo "<script type='text/javascript'>printFeedItems($collectionId)</script>";
        }
        else{
            echo '<div id="feed_entries">';
            echo '</div>';
        }
        ?>
        
    </body>
</html>