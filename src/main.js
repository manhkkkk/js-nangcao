import Navigo from "navigo";
import footerPage from "./components/footer";
import HeaderPage from "./components/header";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import loginPage from "./pages/login";
import singupPage from "./pages/singup";
import ProductPage from "./pages/product";
import fromPage from "./pages/from";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => print(HomePage.render()),
    "/about": () => print(AboutPage.render()),
    "/product": () => print(ProductPage.render()),
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/dashboard": () => print(DashboardPage.render()),
    "/admin/products": () => console.log("admin product"),
    "/admin/from": () => print(fromPage.render()),
    "/admin/login": () => print(loginPage.render()),
    "/admin/singup": () => print(singupPage.render()),
    "/admin/news": () => print(AdminNews.render()),
    "/admin/news/add": () => print(AdminNewsAdd.render()),
});

router.resolve();
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1; }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}