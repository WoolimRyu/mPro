var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');

//var watchaValue = 'CuWvclqwBeNM';
var watchaValue;

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res) {
	console.log(req.body.user_id, req.body.user_pw);
});

router.post('/token', function(req, res) {
	//console.log(req.body.token);
	watchaValue = String(req.body.token);

	watcha(); save2();
});

router.get('/my_product', function(req, res) {
	console.log(ds);

	res.render('my_product', {products: pros, movies: mov, dvds: ds});

});

router.get('/hot_product', function(req, res) {
	res.render('hot_product', {hots: hots});
});

router.get('/wish_list', function(req, res) {
	res.render('wish_list');
});


var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
});

var movieSchema = new mongoose.Schema({
	id : Number 
	, poster: String
	, date: Date
	, title: String
	, genre: String 
	, rating: Number
	, english : String
});

var productSchema = new mongoose.Schema({
	id : Number,
	author_t : String,
	sale_price : String,
	pub_date : String,
	link : String,
	pub_nm : String,
	title : String,
	web_link : String,
	book_img : String
});

var dvdSchema = new mongoose.Schema({
	id : Number,
	name : String,
	year : Number
});

var hotSchema = new mongoose.Schema({
	id : Number 
	, poster: String
	, rating: Number
	, sale: Number
	, title: String
	, genre: String
	, pro_img: String
});

var Movie = mongoose.model('Movie', movieSchema);
var Product = mongoose.model('Product', productSchema);
var Hot = mongoose.model('Hot', hotSchema);
var Dvd = mongoose.model('Dvd', dvdSchema);

var save2 = function () {
	var hot1 = new Hot({
		id:'1'
		, title: 'avengers'
		, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/large/6d0b903aaf380251c69f.jpg?1442782226'
		, rating: '5'
		, genre:'액션'
		, sale: 200
		, pro_img: 'http://ecx.images-amazon.com/images/I/81LcKpuoC3L._SY550_.jpg'
	});
	hot1.save(function(err, thor) {
		if (err) return console.error(err);
	});

	var hot2 = new Hot({
		id:'2'
		, title: 'ironman'
		, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/large/534c1fa76306abaac701.jpg?1442781576'
		, rating: '4'
		, genre:'액션'
		, sale: 120
		, pro_img: 'http://ecx.images-amazon.com/images/I/51fzbyAgK5L.jpg'
	});
	hot2.save(function(err, thor) {
		if (err) return console.error(err);
	});

	var hot3 = new Hot({
		id:'3'
		, title: 'thor'
		, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/large/bb0191699458972bc0dd.jpg?1442781923'
		, rating: '3'
		, genre:'액션'
		, sale: 110
		, pro_img:'data:image/jpeg;base64,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'
	});
hot3.save(function(err, thor) {
	if (err) return console.error(err);
});

var hot4 = new Hot({
	id:'4'
	, title: 'antman'
	, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/large/fac5bd74cdd6abdd1a50.jpg?1442783796'
	, rating: '2'
	, genre:'액션'
	, sale: 100
	, pro_img:'http://ecx.images-amazon.com/images/I/81sbg4JMbaL._SX385_.jpg'
});
hot4.save(function(err, thor) {
	if (err) return console.error(err);
});

var hot5 = new Hot({
	id:'5'
	, title: 'spiderman'
	, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/large/d85f52d2037e62433358.jpg?1442781112'
	, rating: '1'
	, genre:'액션'
	, sale: 80
	, pro_img:'http://ecx.images-amazon.com/images/I/91VTYTU3lpL._SY550_.jpg'
});
hot5.save(function(err, thor) {
	if (err) return console.error(err);
});

};

var save1 = function () {
	var thor1 = new Movie({
		id:'1'
		, title: '앤트맨'
		, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/fac5bd74cdd6abdd1a50.jpg?1442697458'
		, rating: '4.5'
		, genre:'액션'
		, date: '2015-09-07T15:32:41+09:00'
	});

	var thor2 = new Movie({
		id:'2'
		, title: '어벤져스'
		, poster: 'https://d12hfz37g51hrt.cloudfront.net/p/fac5bd74cdd6abdd1a50.jpg?1442697458'
		, rating: '4.5'
		, genre:'액션'
		, date: '2015-09-07T15:32:41+09:00'
	});

	thor1.save();
	thor2.save();
};


var play1 = function() {
	console.log('play1 들어옴.');

	Movie.find(function(err, movies) {
		movies.forEach(function(movie) {
			var book_value;
			var book_url;
			var book_result;
			var id;
			var author_t;
			var sale_price;
			var pub_date;
			var link;
			var pub_nm;
			var title;
			var book_img;

			book_value = movie.title;
			book_url = 'https://apis.daum.net/search/book?apikey=7780d95a1b6b1c3e948478449e0e221c&q='+ unescape(encodeURIComponent(String(book_value))) + 
			'&output=json';

			request(book_url, function (error, response, body)
			{
				if (!error && response.statusCode == 200)
				{
					book_result = JSON.parse(body);

					console.log(movie.title);
					//console.log(book_result);

					if (book_result.channel.result !== "0") {
						id = movie.id;
						author_t = book_result.channel.item[0].author_t;
						sale_price = book_result.channel.item[0].sale_price;
						pub_date = book_result.channel.item[0].pub_date;
						link = book_result.channel.item[0].link;
						pub_nm = book_result.channel.item[0].pub_nm;
						title = book_result.channel.item[0].title;

						if (book_result.channel.item[0].cover_l_url === ""){
							book_img = 'http://www.thefutureorganization.com/wp-content/uploads/2014/03/book-image-crop.jpg';
						} else {
							book_img = book_result.channel.item[0].cover_l_url;
						}

						var pro = new Product ({
							id : id,
							author_t : author_t,
							sale_price : sale_price,
							pub_date : pub_date,
							link : link,
							pub_nm : pub_nm,
							title : title,
							book_img : book_img
						});
						pro.save(function (err) {
							console.log('play 1 세이브!');
							//console.log(pro);

							if (movie === movies[movies.length-1]){
								console.log('플레이1 이프문 들어옴.');
								console.log(movies[movies.length-1]);
								//console.log(movie)
								play2();
							}
						});
					} else {
						var pro = new Product ({
							id : movie.id,
							author_t : 'None',
							sale_price : '0',
							pub_date : '0',
							link : 'None',
							pub_nm : 'None',
							title : 'None',
							book_img : 'http://www.thefutureorganization.com/wp-content/uploads/2014/03/book-image-crop.jpg'
						});
						pro.save(function (err) {
							if (movie === movies[movies.length-1]) {
								play2();
							}
						});
					}
				}		
			})		
});
});
};

var play2 = function () {
	console.log('play2 들어옴.');

	Movie.find(function(err, movies) {
		movies.forEach(function(movie) {
			var web_value;
			var web_url;
			var web_result;
			var web_link;

			web_value = movie.title + '판매 사이트';
			web_url = 'https://apis.daum.net/search/web?apikey=7780d95a1b6b1c3e948478449e0e221c&q=' + unescape(encodeURIComponent(String(web_value))) + '&output=json';

			request(web_url, function (error, response, body)
			{
				if (!error && response.statusCode == 200) 
				{
					web_result = JSON.parse(body);
					web_link = web_result.channel.item[0].link;

					Product.findOne({id:movie.id}, function(err, pro){
						pro.web_link = web_link;
						pro.save();

						console.log('play2 저장!!')
						//console.log(pro);

						if (movie === movies[movies.length-1]){
							console.log('마지막');
							play3();
						}
					});
				}
			})
		});
	});
};


var play3 = function () {

	console.log('play3 들어옴.');

	Movie.find(function(err, movies) {
		movies.forEach(function(movie) {
			var dvd_value = movie.title;
			var dvd_url = 'https://api.tmsandbox.co.nz/v1/dvd/find.json?search=' + unescape(encodeURIComponent(String(dvd_value)));
			var dvd_result;

			var dvd_id;
			var dvd_name;
			var dvd_year;

			var a = movie.id;

			request(dvd_url, function (error, response, body)
			{
				if (!error && response.statusCode == 200) 
				{
					dvd_result = JSON.parse(body);

					dvd_id = a;

				if(dvd_result.List[0] !== undefined) 
				{

				//console.log('dvd result list = ');
				//console.log(dvd_result.List[0].Name);

				dvd_name = dvd_result.List[0].Name;
				dvd_year = dvd_result.List[0].MovieYear;

				var pro = new Dvd ({
					id : dvd_id,
					name : dvd_name,
					year : dvd_year
				});

				pro.save(function (err) {
					if (movie == movies[movies.length-1]){
						console.log('플레이포를 부르겠습니다.');
						play4();
					}
				});
				} else {

					dvd_id = a;

					var pro = new Dvd ({
						id : dvd_id,
						name : 'None',
						year : '0'
					});
					pro.save(function (err) {
						if (movie == movies[movies.length-1]){
							console.log('플레이포를 부르겠습니다.');
							play4();
						}
					});
				}
		}
	})
		});
	});

}


var watcha = function () {
	var watchaURL = 'https://watcha.net/users/' + String(watchaValue) + '/movies.json?filter%5Bsorting%5D=time&page=1';
	
	var watcha_result;
	request(watchaURL, function (error, response, body)
	{
		if (!error && response.statusCode == 200) 
		{
			console.log(body);
			watcha_result = JSON.parse(body);

			var flag = 0;
			for(var i=0; i<watcha_result.cards.length; i++) {
				var w_movie = new Movie({
					id: i
					, title: watcha_result.cards[i].items[0].item.title
					, poster: watcha_result.cards[i].items[0].item.poster.original
					, rating: watcha_result.cards[i].items[0].item.owner_action.rating
					, genre: watcha_result.cards[i].items[0].item.main_genre
					, date: watcha_result.cards[i].items[0].item.owner_action.updated_at
					, english: watcha_result.cards[i].items[0].item.title_url
				});
				w_movie.save(function(err) {
					flag = flag + 1;
					if(flag == 10) play1();
				});
			}

			// console.log(watcha_result.cards.length);

			// console.log(watcha_result.cards[0].items[0].item.title);
			// console.log(watcha_result.cards[0].items[0].item.poster.original);
			// console.log(watcha_result.cards[0].items[0].item.year);
			// console.log(watcha_result.cards[0].items[0].item.main_genre);

			// console.log(watcha_result.cards[0].items[0].item.owner_action.rating);
			// console.log(watcha_result.cards[0].items[0].item.owner_action.updated_at);
		}
	})
};

//watcha(); save2();

//save1();
//save2();

//play1();

var hots = new Object;
var pros = new Object;
var mov = new Object;
var ds = new Object;

var play4 = function () {
	Hot.find(function(err, products) {
		hots = products;
		// products.forEach(function(pro) {
		// 	console.log('this is pro');
		//console.log(products);
		// });
	});

	Product.find().sort({id: 1}).exec(function(err, products) {
		pros = products;
		//console.log(pros);
	});

	Movie.find().sort({id: 1}).exec(function(err, movies) {
		mov = movies;
		//console.log(mov);
	});

	Dvd.find(function(err, dvds) {
		ds = dvds;
		//console.log(dvds);
	});

};

play4();


mongoose.connect('mongodb://localhost:27017/mylist_demo');

module.exports = router;