# E-Commerce Application Clone

`Internship project at iNeuron`

### Technologies

- ReactJS
- Tailwind CSS
- react-router-dom
- Material Icons

### installation

- [npx create-react-app ./](https://react.dev/learn/start-a-new-react-project)
- [npm install -D tailwindcss
  npx tailwindcss init](https://tailwindcss.com/docs/guides/create-react-app)
- [npm i react-router-dom](https://www.npmjs.com/package/react-router-dom)

- [npm install @mui/icons-material @mui/material @emotion/styled @emotion/react](https://mui.com/material-ui/material-icons/)

## Navbar

### toggle icons

```js
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <div>
      <div
        className={`lg:static  w-full lg:w-auto min-h-[20vh]  lg:min-h-fit absolute  left-0  transition-all ease-in duration-500 z-[-1] lg:z-auto bg-[#111111] ${
          extendNavbar ? "top-20" : "top-[-135%]"
        } `}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
          <li>Home</li>
          <li>Category</li>
          <li>Products</li>
        </ul>
      </div>

      <div>
        <span onClick={() => setExtendNavbar((open) => !open)}>
          {extendNavbar ? <CloseIcon /> : <MenuIcon />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
```
