import Footer from "../../components/Footer";
import Header from "../../components/Header";



function BlogPage() {
    return (
        <div>
            {/* <Header /> */}
            <div className="App h-[calc(100vh-70px)] flex text-white text-4xl bg-yellow-500 dark:bg-[#111827]" >
                <div className="m-auto">
                    This is blog page
                </div>

            </div>
            <Footer />
        </div>
    )
};


export default BlogPage;