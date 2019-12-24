var app = app || {}

app.LibraryView = Backbone.View.extend({
	el:'#books',

	events:{
	 "click #add":"addBook"	
	},

	addBook:function(e){
	 e.preventDefault()
	 var formData = {}

	 $("#addBook div").children('input').each(function(i,ele){
		if($(ele).val()!=='')
		{
		 formData[ele.id] = $(ele).val()		
		}	
	 })

	 this.collection.add(new app.Book(formData))
	},

	initialize:function(initialbooks){
	 this.collection = new app.Library(initialbooks);
	 this.listenTo(this.collection,'add',this.renderBook);
	 this.render()
	},

	render:function(){
	 this.collection.each(function(item){
	    this.renderBook(item);
	 },this);
	},

	renderBook:function(item){
 	 var bookView = new app.BookView({
	 	model:item
	 });
	 this.$el.append(bookView.render().el)
	}
})
