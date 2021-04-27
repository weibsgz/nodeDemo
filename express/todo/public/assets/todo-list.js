$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault()
    var item = $('form input')
    var todo = { item: item.val().trim() }

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload()
      },
    })

    return false
  })

  $('li').on('click', function () {
    //列子用正则去掉文字中间的空格改成中划线了 但是我写后端代码没有处理这个逻辑
    var item = $(this).text().trim().replace(/ +/g, '-')
    console.log(item)
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload()
      },
    })
  })
})
