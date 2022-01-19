const HeaderPage = {
	render() {
		return /*html*/`
		<header class="container mx-auto">
			<div class="  bg-blue-900 mx-auto">
				<img src="https://i.imgur.com/4HqQrjg.png" alt="website logo" class="w-80 h-auto mx-auto" />
			</div>
			<nav class="flex justify-between items-center bg-orange-600 px-3 py-3">
				<ul class="flex flex-row w-full justify-center items-center">
					<li
						class="mx-5 text-white not-italic font-normal text-sm hover:text-green-500 transition duration-600 ease-in">
						<a href="">Trang Chủ</a>
					</li>
					<li
						class="mx-5 text-white not-italic font-normal text-sm hover:text-green-500 transition duration-600 ease-in">
						<a href="/about">Tuyển Sinh</a>
					</li>
					<li
						class="mx-5 text-white not-italic font-normal text-sm hover:text-green-500 transition duration-600 ease-in">
						<a href="/product">Chương Trình Đào Tạo</a>
					</li>
					<li
						class="mx-5 text-white not-italic font-normal text-sm hover:text-green-500 transition duration-600 ease-in">
						<a href="/admin/login">Đăng nhập</a>
					</li>
					<li
						class="mx-5 text-white not-italic font-normal text-sm hover:text-green-500 transition duration-600 ease-in">
						<a href="/admin/news/">Admin</a>
					</li>
				</ul>
				<div class="flex">
					<div>
						<input class="py-1 border-none px-2" type="text" placeholder="Search.." />
					</div>
					<div class="pl-5">
						<button
							class="bg-blue-900 py-1 px-3 border-solid border-white-100 text-white hover:bg-green-500 transition duration-600 ease-in"
							type="submit">
							Search
						</button>
					</div>
				</div>
			</nav>
		</header>
       	 `;
	},
};
export default HeaderPage;