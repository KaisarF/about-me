var counter = 1;
            setinterval(function() {
                document.getElementById("radio1" + counter).checked = true;
                counter++;
                if (counter > 4) {
                    counter = 1;
                }
            }, 5000)