import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";


const Nav = () => (
    <nav className="p-2">
        <NavLink className="p-2" exact="true" to="/" activeclassname="active">Home</NavLink>
        <NavLink className="p-2" to="/contact" activeclassname="active">Contact</NavLink>
        <NavLink className="p-2" to="/user" activeclassname="active">User</NavLink>
        <NavLink className="p-2" to="/productlist" activeclassname="active">Product List</NavLink>
        <NavLink className="p-2" to="/productdetail/12" activeclassname="active">Product Detail</NavLink>
    </nav>
)

const HomePage = () => (
    <div>Home Page</div>
)

const ContactPage = () => (
    <div>Contact Page</div>
)

const UserPage = () => (
    <div>User Page</div>
)

const ProductListPage = () => (
    <div>Product List Page</div>
)

const ProductDetailPage = (props) => {
    console.log(props)
    return (
        <div> Product Detail Page</div >
    );
}



const AppRouter = (
    <BrowserRouter>
        <Nav />
        <Routes >
            <Route exact path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/productlist" element={<ProductListPage />} />
            <Route path="/productdetail/:id" element={<ProductDetailPage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter;