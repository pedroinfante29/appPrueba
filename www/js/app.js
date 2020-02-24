
// Vue.prototype.$http = axios;
new Vue({
	el:'#controlador_clientes',

	data: {
		cargando_data: true,
		clientes: [],
	},
	mounted(){
		 this.traeClientes();
	},
	methods: {
		traeClientes: function(){
			this.cargando_data = true;
			axios.get('https://appdesarrollo.co/apiprueba/pruebaapi/listaApp')
				 // axios.get('https://jsonplaceholder.typicode.com/posts')
				.then(response =>{
					this.clientes = response.data;
				});
			this.cargando_data = false;
		},
		error(){
			alert('Error en la accion!!!!')
		}
	},
	created: function(){
		this.traeClientes();
	},
});
