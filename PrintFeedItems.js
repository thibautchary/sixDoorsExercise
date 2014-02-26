//prints the items of a collection
function printFeedItems(collectionId){
$.get("https://api-staging.sixdoors.com/v1/collections/"+collectionId+"/feed_items",function(data){
  //scroll the feed_entries
  var tab_items_id=[];
  var tab_items_title=[];
  var counter=0;
  //$("#feed_items").append("<ul>");
  for (var i=0; i<data.feed_items.length; i++){
      tab_items_id[i]=data.feed_items[i].id;
      tab_items_title[i]=data.feed_items[i].title;
      for (var j=0; j<data.feed_items[i].meta_item_picture_ids.length; j++){
          $("#feed_items").append(
            "<div class=feed_item> <a id=feed_item"+counter+"> <img src="+data.meta_item_pictures[counter].size_600+" class=picture_item > <span class=title>"+data.feed_items[i].title+"</span> <span class=price>$"+data.feed_items[i].price_cents/100.0+"</span> <span class=likesCount><i class='fa fa-heart'></i>  "+data.feed_items[i].feed_item_likes_count+"</span></a></div>"
          );
          counter=counter+1;
      }
  }
  //$("#feed_items").append("</ul>");
}
);
}