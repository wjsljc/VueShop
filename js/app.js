var data = {
	shop : [
		{"sid" : "0","sname" : "农夫山泉","price" : 2,"allNum" : "100","buyNum" : "1","status" : 0,"hot" : 284,"group": "水","edit" : "0"},
		{"sid" : "1","sname" : "怡宝","price" : 2,"allNum" : "97","buyNum" : "1","status" : 0,"hot" : 245,"group": "水","edit" : "0"},
		{"sid" : "2","sname" : "康师傅","price" : 1.5,"allNum" : "302","buyNum" : "1","status" : 0,"hot" : 192,"group": "水","edit" : "0"},
		{"sid" : "3","sname" : "百岁山","price" : 2,"allNum" : "30","buyNum" : "1","status" : 0,"hot" : 95,"group": "水","edit" : "0"},
		{"sid" : "4","sname" : "冰露","price" : 2,"allNum" : 50,"buyNum" : 1,"status" : 0,"hot" : 78,"group": "水","edit" : "0"},
		{"sid" : "5","sname" : "农二哥","price" : 100,"allNum" : 10,"buyNum" : 1,"status" : 0,"hot" : 24,"group": "水","edit" : "0"},
		{"sid" : "6","sname" : "康师傅方便面","price" : 4.5,"allNum" : 85,"buyNum" : 1,"status" : 0,"hot" : 679,"group": "方便面","edit" : "0"},
		{"sid" : "7","sname" : "今麦郎弹面","price" : 5,"allNum" : 36,"buyNum" : 1,"status" : 0,"hot" : 325,"group": "方便面","edit" : "0"},
		{"sid" : "8","sname" : "统一方便面","price" : 4,"allNum" : 74,"buyNum" : 1,"status" : 0,"hot" : 578,"group": "方便面","edit" : "0"},
		{"sid" : "9","sname" : "苹果","price" : 5399,"allNum" : 100,"buyNum" : 1,"status" : 0,"hot" : 9751,"group": "手机","edit" : "0"},
		{"sid" : "10","sname" : "三星","price" : 4988,"allNum" : 250,"buyNum" : 1,"status" : 0,"hot" : 10240,"group": "手机","edit" : "0"},
		{"sid" : "11","sname" : "华为","price" : 3699,"allNum" : 300,"buyNum" : 1,"status" : 0,"hot" : 6478,"group": "手机","edit" : "0"},
		{"sid" : "12","sname" : "小米","price" : 2455,"allNum" : 198,"buyNum" : 1,"status" : 0,"hot" : 5988,"group": "手机","edit" : "0"},
		{"sid" : "13","sname" : "vivo","price" : 1998,"allNum" : 420,"buyNum" : 1,"status" : 0,"hot" : 5788,"group": "手机","edit" : "0"}
	],
	shopType : 'all',
	showShopType : [
		{"type" : "按类型显示","value" : "all"},
		{"type" : "水","value" : "水"},
		{"type" : "方便面","value" : "方便面"},
		{"type" : "手机","value" : "手机"},
	],
	searchType : "all",
	showSearchType : [
		{"type" : "按条件搜索","value" : "all"},
		{"type" : "按名称","value" : "sname"},
		{"type" : "按编号","value" : "sid"}
	],
	searchTypeArr : [],
	sortType : "price",
	showSortType : [
		{"type" : "按价格排序","value" : "price"},
		{"type" : "按库存排序","value" : "allNum"},
	],
	sortTypeArr : ["price"],
	sortTypeNum : 1,
	//判断css的选中状态开关
	isActive : true,
	//正常和编辑状态的按钮开关,
	showPanel : "showPanel",
	editPanel : "editPanel",
};
var vm = new Vue({
	el : "#container",
	data : data,
	methods : {
		getResult : function(){
			this.aaa = "lazy";
		},
		//是否显示
		isShow : function(item){
			if(this.shopType === "all"){
				return true;
			}else if(item.group === this.shopType){
				return true;
			}else{
				return false;
			}
		},
		//选择显示类型点击事件
		changeShopType : function(item){
			this.shopType = item;
		},
		
		//搜索类型选择
		changeSearchType : function(item){
			if(item === "all"){
				this.searchTypeArr = [];
			}else{
				console.log(item);
				this.searchTypeArr = [];
				this.searchTypeArr.push(item);
			}
			
		},
		//按照条件排序
		changeSortType : function(item){
			this.sortTypeArr = [item];
		},
		//升序或者降序
		sortWay : function(num){
			if(num === 1){
				this.sortTypeNum = 1;
				this.isActive = !this.isActive;
			}else{
				this.sortTypeNum = -1;
				this.isActive = !this.isActive;
			}
		},
		//删除商品
		deleteShop : function(item){
			this.shop.$remove(item);
		},
		//修改商品
		edit : function(item,index,event){
			//切换显示编辑界面
			item.edit++;
			if(item.edit % 2 == 0){
				event.target.innerHTML = "修改";
				for(var i = 0,len = this.shop.length;i < len;i++){
					for(key in this.shop[i]){
						if(this.shop[i].sid === item.sid ){
							this.shop[i].sname = this.newName;
							this.shop[i].price = this.newPrice;
							this.shop[i].group = this.newGroup;
							this.shop[i].allNum = this.newAllNum;
							break;
						}
					}
				}
			}else{
				event.target.innerHTML = "保存";
				//保存编辑内容
//				this.shop.forEach(function(val,key){
//					if(item.sid === val.sid){
//						
//					}
//				});
				//获取原来的数据
				this.newName = item.sname;
				this.newPrice = item.price;
				this.newGroup = item.group;
				this.newAllNum = item.allNum;
			}
		},
		//编辑状态显示判断函数
		isEdit : function(item,status){
			if(item.edit % 2 == 0){
				//显示状态
				if(status  === "showPanel"){
					return true;
				}else{
					return false;
				}
			}else{
				//编辑状态
				if(status  === "showPanel"){
					return false;
				}else{
					return true;
				}
			}
			
		}
	}
});
