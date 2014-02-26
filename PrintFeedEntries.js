$.get("https://api-staging.sixdoors.com/v1/feed_entries",function(data){
  //scroll the feed_entries
  for (var i=0; i<data.feed_entries.length; i++){
    var id_entry=data.feed_entries[i].content.id;
    var type=data.feed_entries[i].content.type;
    if(type=="collection"){
      //going back from feed_entries to collections
      for (var j=0; j<data.collections.length; j++){
        if(data.collections[j].id==id_entry){
          $("#feed_entries").append(
            "<div class="+type+"><a id="+type+id_entry+" href='index.php?collectionId="+id_entry+"'> <img src="+data.collections[j].picture_url+" class=picture_"+type+" > <span id=text_"+type+id_entry+" class=text_"+type+" >"+data.collections[j].title+"</span> </a> </div>"
          );
        }
      }
    }
    else{
      //going back from feed_entries to seller_interviews
      for(var k=0; k<data.seller_interviews.length; k++){
        if(data.seller_interviews[k].id==id_entry){
          $("#feed_entries").append("<span class="+type+"> <img src="+data.seller_interviews[k].picture.size_592+" class=picture_"+type+" > <span class=banner>Interview</span> <span id=text_"+type+id_entry+" class=text>"+data.seller_interviews[k].interviewee+"</span> </span>");
        }
      }
    }
  }
}
);