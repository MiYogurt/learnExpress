var boot = require('../app').boot;
var shutdown = require('../app').shutdown;
var request = require('superagent');
var expect = require('chai').expect;

describe('套件', function () {
	before(function () {
		console.info("服务器启动")
		boot()
	});

	beforeEach(function () {
		console.info("====")
	});

	it('这是一个空的测试', function () {
	});

	describe('index', function () {
		beforeEach(function () {
			console.info("****")
		});
		it('should respond to GET', function (done) {
			request.get('http://localhost:3000')
				.end(function (err, res) {
					expect(res.status).to.equal(200);
					done()
				});
		});
		it('only', function () {

		});
	});



	afterEach(function () {
		console.info("====");
	});
	after(function () {
		shutdown();
		console.info("服务器停止");
	});
});

  describe('空套件', function() {
    describe('--空套件', function() {
      //下面是一个挂起的测试
      it('--空用例');
    });
  });
