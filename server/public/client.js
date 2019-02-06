console.log('client.js is loaded');


$(document).ready(onReady);


function onReady(){
    console.log('jQuery is ready');
    $('#quoteBody').append(
        
        `<tr>
            <td>'The secret impresses noone.  The trick you use it for is everything'</td>
            <td>Patrick</td> 
            <td><button class="deleteButton">Delete</button></td>
            </tr>`
        )
}