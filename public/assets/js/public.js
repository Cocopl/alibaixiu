// 向服务器端发送请求 索要文章分类列表数据
$.ajax({
    type: "get",
    url: "/posts/random",
    success: function(res) {
        var tempT = `
				{{each data}}
				<li>
				<a href="detail.html?id={{$value._id}}">
					<p class="title">{{$value.title}}</p>
					<p class="reading">阅读({{$value.views}})</p>
					<div class="pic">
						<img src="{{$value.thumbnail}}" alt="">
					</div>
				</a>
			</li>
				{{/each}}
		`;
        var html = template.render(tempT, { data: res });
        $("#random").html(html);
    }
});

$.ajax({
    type: "get",
    url: "/comments/lasted",
    success: function(res) {
        var commTpl = `
			{{each date}}
			<li>
			<a href="javascript:;">
				<div class="avatar">
					<img src="{{$value.author.avatar}}" alt="">
				</div>
				<div class="txt">
					<p>
						<span>{{$value.author.nickName}}</span>2020-02-01说:
					</p>
					<p>{{$value.content}}</p>
					</div>
				</a>
			</li>
			{{/each}}
		`;
        var htmlC = template.render(commTpl, { date: res });
        $("#comment").html(htmlC);
    }
});

$.ajax({
    type: "get",
    url: "/categories",
    success: function(res) {
        var navTpl = `
			{{each date}}
			<li><a href="list.html?id={{$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>
			{{/each}}
		`;
        var htmlNav = template.render(navTpl, { date: res });
        $(".navBox").html(htmlNav);
    }
})