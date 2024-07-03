<div className="addProducts flex h-[100vh] py-5 gap-4 ">
        <div className="left-s-box bg-gray-200 xl:w-[600px] l:w-[500px] md:[w-400px] 2xl:w-[650px] flex flex-col h-[90vh]">
          <div className="">
            <h1 className="text-[24px] ">ADD PRODUCTS</h1>
          </div>
          {/* Line-1 */}
          <div className=" line-1 flex justify-between px-10 mt-2">
            <div className="">
              {/* ID */}
              <div className=" ">
                <label htmlFor="id" className="">
                  Id
                </label>
              </div>
              <div className="">
                {" "}
                <input
                  type="number"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="shadow appearance-none border rounded w-[100px] h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div className="">
              {/* Gender */}
              <div className="mb-4 flex flex-col justify-center">
                <label htmlFor="gender" className=" ">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="shadow appearance-none border rounded w-[100px] h-[30px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                  value={gender} // Assuming gender is a state variable
                  onChange={(e) => setGender(e.target.value)} // Assuming setGender is a state setter function
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>
            <div className="">
              {/* Gender */}
              <div className="mb-4 flex flex-col justify-center">
                <label htmlFor="category" className=" ">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="shadow appearance-none border rounded w-[100px] h-[30px]  px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                  value={category} // Assuming gender is a state variable
                  onChange={(e) => setCategory(e.target.value)} // Assuming setGender is a state setter function
                >
                  <option value="">Select Category</option>
                  <option value="shirt">Shirt</option>
                  <option value="tshirt">Tshirt</option>
                  <option value="jean">Jean</option>
                  <option value="trouser">Trouser</option>
                  <option value="hoodie">Hoodie</option>
                  <option value="hoodie">Shoe</option>
                </select>
              </div>
            </div>
          </div>
          <div className="line-2 flex flex-col gap-4 mt-1">
            <div className="">
              {/* NAME */}
              <div className=" ">
                <label htmlFor="name" className="">
                  Name
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div className="">
              {/* Desc */}
              <div className=" ">
                <label htmlFor="description" className="">
                  DESCRIPTION
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div className="">
              {/* MAIN-IMAGE */}
              <div className=" ">
                <label htmlFor="img" className="">
                  MAIN IMAGE
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="line-3 flex mt-4">
            <div className="">
              {/* SECOND-IMAGE */}
              <div className=" ">
                <label htmlFor="img2" className="">
                  IMAGE 2
                </label>
              </div>
              <div className="px-6">
                {" "}
                <input
                  type="text"
                  value={img2}
                  onChange={(e) => setImg2(e.target.value)}
                  className="shadow appearance-none border rounded w-full  h-[30px] py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div>
              {/* IMAGE 3 */}
              <div className="">
                <label htmlFor="img3" className="">
                  IMAGE 3
                </label>
              </div>
              <div className="px-6 mb-4">
                <input
                  type="text"
                  value={img3}
                  onChange={(e) => setImg3(e.target.value)}
                  className="shadow appearance-none border rounded w-full  h-[30px] py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
            <div>
              {/* IMAGE 4 */}
              <div className="">
                <label htmlFor="img4" className="">
                  IMAGE 4
                </label>
              </div>
              <div className="px-6 mb-4">
                <input
                  type="text"
                  value={img4}
                  onChange={(e) => setImg4(e.target.value)}
                  className="shadow appearance-none border rounded w-full h-[30px] py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px]"
                />
              </div>
            </div>
          </div>
          <div className="line-4 grid grid-cols-3 gap-4 justify-center px-4 items-center">
            {/* FIT */}
            <div className="">
              <label
                htmlFor="fit"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fit
              </label>
              <select
                id="fit"
                name="fit"
                className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={fit}
                onChange={(e) => setFit(e.target.value)}
              >
                <option value="">Select Fit</option>
                <option value="regular">Regular</option>
                <option value="slim">Slim</option>
                <option value="oversized">Oversized</option>
              </select>
            </div>

            {/* FABRIC */}
            <div className="">
              <label
                htmlFor="fabric"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fabric
              </label>
              <input
                type="text"
                id="fabric"
                value={fabric}
                onChange={(e) => setFabric(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* SLEEVE */}
            <div className="">
              <label
                htmlFor="sleeve"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Sleeve
              </label>
              <select
                id="sleeve"
                name="sleeve"
                className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={sleeve}
                onChange={(e) => setSleeve(e.target.value)}
              >
                <option value="">Select Sleeve</option>
                <option value="full">Full</option>
                <option value="half">Half</option>
              </select>
            </div>

            {/* COLOR */}
            <div className="">
              <label
                htmlFor="color"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* DESIGN */}
            <div className="">
              <label
                htmlFor="design"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Design
              </label>
              <input
                type="text"
                id="design"
                value={design}
                onChange={(e) => setDesign(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>

        {/* RIGHT -------------------------------------------------------------->*/}

        <div className="right-s  flex flex-col pr-2 gap-[1.8rem] h-[100vh]">
          <div className="box-1-r h-[40vh] xsm:w-[100px] md:w-[300px] lg:w-[400px] xl:w-[500px] right-s-box">
            <div>
              <h3 className="block text-gray-700 text-sm font-bold mb-2">
                Image Previews
              </h3>
              <div className="flex flex-col gap-8 items-center mt-12">
                <div className="flex items-center justify-center">
                  {img && (
                    <img
                      src={img}
                      alt="Main"
                      className="w-36 h-36 object-cover cursor-pointer"
                      onClick={() => handleImageClick(img)}
                    />
                  )}
                </div>
                <div className="flex gap-2">
                  {img2 && (
                    <img
                      src={img2}
                      alt="Second"
                      className="w-[6.5rem] h-[6.5rem] object-cover cursor-pointer"
                      onClick={() => handleImageClick(img2)}
                    />
                  )}
                  {img3 && (
                    <img
                      src={img3}
                      alt="Third"
                      className="w-[6.5rem] h-[6.5rem] object-cover cursor-pointer"
                      onClick={() => handleImageClick(img3)}
                    />
                  )}
                  {img4 && (
                    <img
                      src={img4}
                      alt="Fourth"
                      className="w-[6.5rem] h-[6.5rem] object-cover cursor-pointer"
                      onClick={() => handleImageClick(img4)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Full Screen Image Modal */}
            {fullScreenImage && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="max-w-4xl w-full h-full overflow-auto">
                  <img
                    src={fullScreenImage}
                    alt="Full Screen"
                    className="max-w-full max-h-full"
                  />
                  <button
                    className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
                    onClick={handleCloseFullScreen}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="box-2-r  h-[20vh]  xsm:w-[100px] md:w-[300px] lg:w-[400px] xl:w-[500px] right-s-box flex items-center justify-center ">
            <div className="flex div-1">
              {/* SIZES */}
              <div className="px-2">
                <label className="block text-gray-700 text-md font-bold text-center">
                  Sizes
                </label>
                <div className="grid md:grid-cols-6 gap-2">
                  {Object.keys(sizes).map((size) => (
                    <div key={size} className="flex flex-col items-center">
                      <label className="flex flex-col items-center">
                        <span className="text-gray-700 font-medium mb-1">
                          {size}
                        </span>
                        <input
                          type="number"
                          value={sizes[size]}
                          onChange={(e) =>
                            handleSizeChange(size, parseInt(e.target.value))
                          }
                          className="shadow appearance-none border rounded w-12 h-10 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          min="0"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-5 div-2">
              <div className="flex items-center gap-[3px]">
                <input
                  type="checkbox"
                  checked={newProduct}
                  onChange={handleNewProductChange}
                  className="check-box"
                />
                <label className="">New Product</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={discount}
                  onChange={handleDiscountChange}
                  className="check-box"
                />
                <label className="">Discount</label>
              </div>
            </div>
          </div>
          <div className="box-3-r h-[20vh] xsm:w-[100px] md:w-[300px] lg:w-[400px] xl:w-[500px] right-s-box flex flex-col items-center gap-2">
            <div className="flex gap-5">
              <div className="">
                {/* OPRICE */}
                <div className="">
                  <label htmlFor="oldPrice" className="">
                    OldPrice
                  </label>
                </div>
                <div className="">
                  {" "}
                  <input
                    type="number"
                    value={oldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}
                    className="shadow appearance-none border rounded h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] right-s-box-input-2 opacity-50"
                  />
                </div>
              </div>
              <div className="">
                {/* ID */}
                <div className=" ">
                  <label htmlFor="newPrice" className="">
                    New Price
                  </label>
                </div>
                <div className="">
                  {" "}
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="shadow appearance-none border rounded h-[30px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] right-s-box-input-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-6">
              <button
                className=" bg-green-500 text-white p-4 rounded-lg"
                onClick={handleClick}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
