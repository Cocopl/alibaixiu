// 向服务器端发送请求 索要热门推荐数据
$.ajax({
    type: "get",
    url: "/posts/recommend",
    success: function(res) {
        var temp = `
				{{each data}}
				<li>
						<a href="detail.html?id={{$value._id}}">
								<img src="{{$value.thumbnail}}" alt="">
								<span>{{$value.title}}</span>
						</a>
				</li>
				{{/each}}
				`;
        var html = template.render(temp, { data: res });
        $("#recommon").html(html)
    }
})