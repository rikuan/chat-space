$(function(){
    function buildHTML(message){
        if ( message.image ) {
          let html =
            `<div class="MessageBox">
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
         `<div class="MessageBox">
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
        e.preventDefault()
        let formData = new FormData(this);
        let url = $(this).attr('action')    
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
            $('.messageZone').append(html);
            $('.chat_bar').animate({ scrollTop: $('.chat_bar')[0].scrollHeight});      
            $('form')[0].reset();
            $('.submit_btn').prop('disabled', false);
          })
          .fail(function(){
            alert('error');
          })
        });
      });