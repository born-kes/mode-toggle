
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    };

    const handlerChange = (el) => {

        if(el.target.checked) {
            trans();
            localStorage.setItem("theme", 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            trans();
            localStorage.setItem("theme", 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };

document.getElementById('toggleMode').addEventListener('change',handlerChange);


    let theme = localStorage.getItem("theme");
    if(theme === 'dark'){
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('toggleMode').checked = true;
    } else if(theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
    } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('toggleMode').checked = true; 

    }
console.log(theme, window.matchMedia('(prefers-color-scheme: dark)').matches)