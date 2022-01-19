import news from "../data";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
const DetailPage = {
	render(id) {
		const result = news.find((post) => post.id === id);
		return/*html*/ `
            <div class="container mx-auto">
			<header>
				${Header.render()}
			</header>
			<main>
				<div class="banner">
					${Banner.render()}
				</div>
				
				<div class="border border-sky-500 p-4 my-7 mx-96">
				
					<img class="items-center w-96 h-78 transform hover: transition duration-500 hover:-translate-y-3 overflow-hidden" src="${result.img}" />
					<h1 class="font-semibold text-orange-500 text-lg hover:text-green-500 transition duration-600 ease-in py-3">${result.title}</h1>
					<p class="text-justify not-italic text-base hover:text-green-500 transition duration-600 ease-in">${result.desc}</p>
				</div>
			</main>
			<footer>
				${Footer.render()}
			</footer>
		</div>
        `;
	},
};
export default DetailPage;