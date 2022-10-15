
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    };

    const handlerChange = (el) => {

        if(el.target.checked) {
            trans();
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            trans();
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };

document.getElementById('toggleMode').addEventListener('change',handlerChange);