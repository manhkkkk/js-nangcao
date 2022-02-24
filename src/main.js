import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import AdminNewsEdit from "./pages/admin/news/edit";
import CartPage from "./pages/cart";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductsPage from "./pages/product";
import DetailProductPage from "./pages/product/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import categoryPage from "./pages/categories/category";
import DetailCategory from "./pages/categories/detail";
import SearchPage from "./pages/search";
import AdminCategory from "./pages/admin/news/category/category";
const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
	document.querySelector("#app").innerHTML = await component.render(id);
	if (component.afterRender) await component.afterRender(id);
};
router.on('/admin/*/', () => { }, {
	before(done, match) {
		if (localStorage.getItem('user')) {
			const userId = JSON.parse(localStorage.getItem('user')).id;
			if (userId === 1) {
				// render dựa trên router
				done();
			} else {
				document.location.href = "/"
			}
		} else {
			document.location.href = "/signin"
		}

	}
});

router.on({
	"/": () => print(HomePage),
	"/about": () => print(AboutPage),
	"/products": () => print(ProductsPage),
	"/products/:id": ({ data }) => print(DetailProductPage, data.id),
	"/news/:id": ({ data }) => print(DetailPage, data.id),
	"/admin/dashboard": () => print(DashboardPage),
	"/admin/products": () => console.log("admin product"),
	"/admin/news": () => print(AdminNews),
	"/admin/news/add": () => print(AdminNewsAdd),
	"/admin/news/:id/edit": ({ data }) => print(AdminNewsEdit, data.id),
	"/admin/category": () => print(AdminCategory),
	"/signup": () => print(Signup),
	"/signin": () => print(Signin),
	"/cart": () => print(CartPage),
	"/category": () => print(categoryPage),
	"/category/:id": ({ data }) => {
		print(DetailCategory, data.id)
	},
	"/search/:keyword": ({ data }) => {
		print(SearchPage, data.keyword)
	}
});

router.resolve();
