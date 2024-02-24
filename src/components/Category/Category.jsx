const Category = () => {
    const categories = ["For Your", "Popular", "Trend", "Pop", "Edm", "Rock", "More"]
    return (
        <div className="grid grid-cols-7 mt-6 gap-6">
            {categories?.map((Category, index) => <button key={index} className="btn bg-black" >{Category}</button>)}
        </div>
    );
};

export default Category;