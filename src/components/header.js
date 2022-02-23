import { reRender } from "../utils";


const Header = {
	render() {
		return /*html*/`
    <div class="relative bg-white overflow-hidden ">
    <div class="max-w-7xl mx-auto">
	    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
		    <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
			    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
			    <polygon  points=" 50,0 100,0 50,100 0,100" />
		    </svg>

		    <div>
			    <div class="relative pt-6 px-4 sm:px-6 lg:px-8 flex ">
				    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start"
					    aria-label="Global">
					    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
						    <div class="flex items-center justify-between w-full md:w-auto">
							    <a href="#">
								    <span class="sr-only">Workflow</span>
								    <img class="h-8 w-auto sm:h-10"
									    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
							    </a>
							    <div class="-mr-2 flex items-center md:hidden">
								    <button type="button"
									    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									    aria-expanded="false">
									    <span class="sr-only">Open main menu</span>
									    <!-- Heroicon name: outline/menu -->
									    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
										    fill="none" viewBox="0 0 24 24" stroke="currentColor"
										    aria-hidden="true">
										    <path stroke-linecap="round" stroke-linejoin="round"
											    stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
									    </svg>
								    </button>
							    </div>
						    </div>
					    </div>
					    <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
						    <a href="/#/products"
							    class="font-medium text-gray-500 hover:text-gray-900">Product</a>

						    <a href="/#/about"
							    class="font-medium text-gray-500 hover:text-gray-900">Features</a>

						    <a href="/#/news"
							    class="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

						    

						    <a href="/#/signin" class="font-medium text-indigo-600 hover:text-indigo-500">Log
							    in</a>
					    </div>
				    </nav>
				    
			    </div>
			    <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
				    <div
					    class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
					    <div class="px-5 pt-4 flex items-center justify-between">
						    <div>
							    <img class="h-8 w-auto"
								    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
								    alt="">
						    </div>
						    <div class="-mr-2">
							    <button type="button"
								    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								    <span class="sr-only">Close main menu</span>
								    <!-- Heroicon name: outline/x -->
								    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
									    fill="none" viewBox="0 0 24 24" stroke="currentColor"
									    aria-hidden="true">
									    <a href="/cart"><path stroke-linecap="round" stroke-linejoin="round"
									    stroke-width="2" d="M6 18L18 6M6 6l12 12" /></a>
								    </svg>
							    </button>
						    </div>
					    </div>
					    <div class="px-2 pt-2 pb-3 space-y-1">
						    <a href="#"
							    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

						    <a href="#"
							    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

						    <a href="#"
							    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

						    <a href="#"
							    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
					    </div>
					    <a href="/#/signin"
						    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
						    Log in </a>
				    </div>
			    </div>
		    </div>

		    <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
			    <div class="sm:text-center lg:text-left">
				    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					    <span class="block xl:inline">Data to enrich your</span>
					    <span class="block text-indigo-600 xl:inline">online business</span>
				    </h1>
				    <p
					    class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
					    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
					    commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
				    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
					    <div class="rounded-md shadow">
						    <a href="#"
							    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
							    Get started </a>
					    </div>
					    <div class="mt-3 sm:mt-0 sm:ml-3">
						    <a href="#"
							    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
							    Live demo </a>
					    </div>
				    </div>
			    </div>
		    </main>
	    </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 static ">
    <div class=" absoluteml-auto flex items-center relative pt-8 px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">${localStorage.getItem('user') ?
				`
	    <a id="accountInfo" class="text-sm font-medium text-gray-700 hover:text-gray-800">Phan Manh</a>
	    <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
	    <button id="logout" class="text-sm font-medium text-gray-700 hover:text-gray-800">Logout </button>
	    `: ""}

    </div>

    <div class="hidden lg:ml-8 lg:flex">
	    <a href="/#/admin" class="text-gray-700 hover:text-gray-800 flex items-center">
			    class="w-5 h-auto block flex-shrink-0">
		    <span class="ml-3 block text-sm font-medium"> admin </span>
		    <span class="sr-only">, change currency</span>
	    </a>
    </div>

    <!-- Search -->
    <div class="flex lg:ml-6">
	    <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
		    <span class="sr-only">Search</span>
		    <!-- Heroicon name: outline/search -->
		    <a href="/cart"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
		    stroke="currentColor" aria-hidden="true">
		    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
			    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
	    </svg></a>
	    </a>
    </div>

    <!-- Cart -->
    <div class="ml-4 flow-root lg:ml-6">
	    <a href="#" class="group -m-2 p-2 flex items-center">
		    <!-- Heroicon name: outline/shopping-bag -->
		    <svg class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
			    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
			    aria-hidden="true">
			    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
		    </svg>
		    <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
		    <span class="sr-only">items in cart, view bag</span>
	    </a>
    </div>
</div>
	    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
		    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
		    alt="">
    </div>
</div>
        `;
	},
	afterRender() {
		// lấy thông tin username từ localStorage và hiển thị ra ngoài
		const username = JSON.parse(localStorage.getItem("user")).user.username;
		document.querySelector('#accountInfo').innerHTML = username;
		// Logout
		const logout = document.querySelector('#logout');
		if (logout) {
			logout.addEventListener('click', function () {
				localStorage.removeItem('user');
				reRender(Header, "#header");
			})
		}
	}
};
export default Header;
