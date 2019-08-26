// 向服务器端发送请求 索要文章分类列表数据
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        var navTpl = `
			{{each data}}
			<li>
				<a href="list.html?categoryId={{$value._id}}">
					<i class="fa {{$value.className}}"></i>{{$value.title}}
				</a>
			</li>
			{{/each}}
		`;
        var html = template.render(navTpl, { data: response });
        $('.navTemp').html(html)
       
    }
})
