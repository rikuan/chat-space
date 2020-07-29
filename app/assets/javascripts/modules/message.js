$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
          <div class="chatUser">
            <div class="nameLine">
              ${message.user_name}
            </div>
            <div class="timeLine">
              ${message.created_at}
            </div>
          </div>
          <div class="messegeZone">
            <p class="content">
             ${message.content}
            </p>
            <img class="image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
         <div class="chatUser">
            <div class="nameLine">
              ${message.user_name}
            </div>
            <div class="timeLine">
              ${message.created_at}
            </div>
         </div>
         <div class="messegeZone">
           <p class="content">
             ${message.content}
           </p>
         </div>
      </div>`
      return html;
    };
  }

  $('.post_zone').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat_bar').append(html);      
      $('.post_zone')[0].reset();
      $('.chat_bar').animate({ scrollTop: $('.chat_bar')[0].scrollHeight});
      $('.submit_btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.submit_btn').prop("disabled", false);
    });
  });
});