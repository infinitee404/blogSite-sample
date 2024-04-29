import { useEffect, useState } from "react"

const MiniCards = (props) => {
    return(
        <>
            <div className="more-card">
                <div className="more-image-container">
                    <img src={props.imageSrc} />
                </div>
                <div className="more-description">
                    <p><span className="card-category">{props.category}</span></p>
                    <h2 className="card-title">{props.title}</h2>
                </div>  
            </div>
        </>
    )
}

const AuthorSection = () => {
    return(
        <>
            <div className="author-block">
                <img className="author-image" src="/images/author.jpg" />
                <h2 className="author-name">Author Surname</h2>
                <p className="author-title">Blog Author</p>
                <p className="author-description">In the vast expanse of the digital realm, amidst the cacophony of voices and the whirlwind of ideas, there exists a storyteller.</p>
                <div className="author-socials">
                <div className="socials">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAcFJREFUSEu11T+oT2EYwPHPLYUwyCIki0GRjKRkEJIuMYgsFDKIlAzyJxnUFQburTtYlEEU+TORQWajvyXCYjAoinCeen86vZ3znt8P92znff58n+d9/rxDJvgbmmD/ugCTsQXrsBQL8Atv8BT3cRPf2wItAdbjcnJaSvQV9uFBk1Ib4GQV6YkBru8njuBcbtMEOIXjAzivqx7ExfpBDtiI2wXnn3AYj/A26Y2ks/iNTFbhcc9HHTAdLzG7BfADi/E8k9cBIQr5kl7h64Ao1Ggh+mvYXpOvwQqsxfLMbhNuxVkdcAcbCoBjOJPkW3G9oDuOPTngPeYUjA7hQpJHMc8XdGNGluWAr5jynwCfq26amQO+YFoG+NiRVag/xOrMLnzNyAEvsDBT/IC5HTPxDvMynWdYlAOuVm26Y8AMYld9awjgSjUnu3LANkQrtn2DFLmxTSfhNea3EPoF/LmePIP4jw167x8AscpX4knPR9Oyi2V1oAHSTwan80XZBIizsd4k1kBdgLNVwY/mgZUenJ1pWmclozZAbIC9uNt0tV1P5lTsxub0NF5KTvZjuNqaNxAt+VdPZsd89SfuyqA/LwWt33YeVhnsaaE0AAAAAElFTkSuQmCC"/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeNJREFUSEvF1T+ozmEUB/DPdUlSN5KUwcLtJv/jjpiMZHCVYjESxSCDlAwGJYrproRBYpJFuotYkKRkUCYWhZL/z9Hze3s8fr/cN73dM73vOec533O+589vyIBlaMDxzRjAchzFZqymM5GfeIYpnMfLmpG2Cg5k5zl90vcVBzFZvqsBNuIhZvUZvHH/hk140ihqgJvY2Ufwt1iDCVzM724k2nZ1AbzGshaANziD51iEMRxH+AdAZP0ov3uFFV0AHzG/AribM/qAxdn2DqtwB59SzxZgSbaF30gbQPD+vQoegUZzsL3Yipic+ynLyxjOE1Q+iz70BqTsQSi/VABncSxlfgkxXaUE54dwG9sLQyQ5u62CUMaolbIft3LGsQ+lPMU6nEx7cqow/MiV/VaVFcTvMJYSc30tUXMPayvb4wS+ASdSwNOVrRe3HtPgt5TgeR8u4HBli809kivcUdg6exA+NUBUtB7zsAdbcqBo8tU0unNbmvw5+/9FUSjaxjRmPZYvKCkl7lTQt7TSv08VL2x0NUVxrHpLUjUuNrRctG1V4ObvC6zsArieguzueDhd9RXEzrRSNI4H/3ns4mDGCLcChHKg57oBLj84ccy6pPzgnEsjHYfuD5mxT+Z0G/pPv4FX8AszSlgZRYBdrAAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAqZJREFUSEu1lVmojmEQx3+HlCwXsi9FcoGylrhQtqzZku2CEoWyZI2yL9mSNWsRuZCiLInsuZEllAtlDynKckHIOv+veWvO03u+71Bnrp53Zt7nP/Of5SmjiqWsiu+nFEBNYBQwCOgEtAL+AM+Be8A54CTwo6JAiwEMAXYDLUtk+RiYClzL86sIYDWw7B/o+w3MB7al/+QBrAGW5lwual4AL4G6QNccn5nArqhPAUY4p9HnEHAQuA18C4YuwCpgWNApk57AjUwXAeoAj4Cm4YfRwAlAxR4AtAG+A3fDJYuB9eGfB4DAf0kXAaYBe4PjZmAh0N5B2iaU7AFmeFftAGYF+2DgfApwBhjqTl89k8+mu2O0dQYueoa6NJNFwCbrtkbWSW+A6m7YCcxOAV4Dzd1Bl4mS4ZbuKeAYMN5tasdefn4HNPazeO/h55vZOVKkqMW1REWdYoeVRsEKB1KGkstA35BFfYv2gwcx1vVvje4maQZfLN1a7nDaJlUdNRfY4mfpagAfgdrup4JnQYnzga4XoIDLFfkp0Nod3nsNmjnvy4GNQD9rw0sh+iuuk0p0NXSbOqljCnA08CzbPGArcN92zRLgrE+3pjwTrRPto/7AhaA/bEM5KQWYABwJThoajf4cT/eTgXQz/q875xtMr25R52gI1fuZjAGOpwDi9RVQLzjqeMui7A40sLlQndQMmYj//cDEoHtiBW9n6+ZnCqDvycCBBGCdU6Q21Vn2h0Afo28k0CL4a1/19iwL6rxlp65R92QiLsXpPl/LCX65T9G5PWoqWtdrPWr5apmpkJpUTWyeKPIF3tLl7MUeHBVdRRzn67lQtBzRgpxu0301z1jqydRgacvqAj2bHYBqwDMvvmZCT2ahoP8DUIzvStlKZVCpS4o5/QUuzoEZGu6bbQAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa1JREFUSEu11btrFVEQx/FPUJCAhSCChVaRKKKNjWihlSGFWEeIb7S0E0R7tbILIY34iMEiBCxthGhjpaAIio8/wUZERVHPwFk4LHuX3Xu9BxZ275kz35nzm5k7YcxrYsz+DQO4j1M5sPfY0xbkqIA/2IKvgyCjAsLvNdz8n4B7OF04/I7jeNoEGSaDOiD8/sZDrOIj3lWwYQClyE1Bx/6ZUQBlBj+xARsLUuyf7QLYhovYi624jpcoAZ9wDDfStcxlp50AF7CQqmNTEVnU/nIDYFe2mcSO/P6hLYOTWGm43ApQahAZVIDGSq2LHFF8xvbCOprpDW6lrn3UkkEnwCUsFZZRepfT86UmYtUHvTN4nIQ8kZ1FLYfAf2uh1UXudUWvsT87vItzDXk/SM00X4g53WfYvcDBfOAVDjQcjsx259+f4WgfQAytq8WBI3hefM/gSfF9B1HSA1e9iiLdt0VnfsNtRCXtxPmap0OIrDsDwrBeSYMOR9NVfzy9AGEcIi5i84CT6yny2XSdP9qij722aTqFKzicxvC+NIt+YS2DQ9xOa5hx3clxZTR2wD+bkU0Zzdt3lwAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEvd1b1rFVEQBfBfNKAQsYqFoBiFIEIUESstlYAhYJQQIoJFLETsFUXxD9DGQrERCdjYWAiBFDYS0gQFxRSpEhIQBbESwS9I7sA+WNbdzb4Hr8nt9s6dc+6cO3O2R5dXT5fxbT2CPvzcRLbduI9RHMRfPMYd7MX57Hs9cPISbcciJvCphuQNzpTE17Afl/CyFc8TDGAF33AB8yUgJ/C+hvwd3uIFPhQr2Ikf6M0AnuEevuQAL2fJVRwh740k3XRZBbEXtz5VyJ7DayzgOB7VVPAcU/l4XqJdOIxZ9Hc4Hw9ws4pgH1bxPXXBng4JQp4nVQTbsIwDHYJH2hEsVRHE/sWsxVoP3Q5XdOChYkKZVcQc3MXRdtBxHU+bEIxgpk3wGLLBNM1/mhDEmejjKw1J/uF01sb/pVS5aTz4EG6nR5usIQq/uZoaI/q/dJURhOGdxC2cqwH/hZjsV3WV5gnO4mFKOFYwwbL8GMZraWpD+9pVrCCseDwZ1RiGsSPJ9Btf8RnhpHHjj5sBt+Jb74/WtPLG57ou0QbqWz0ZBzSqswAAAABJRU5ErkJggg=="/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkhJREFUSEu11UvozmkUB/DPX5NLjYTNuAyWk2RCpCmyIZdIpnGZ1GwIiVlMmIVrkg1lKEUWoogkRhKixEwWTCQxQxILC0VZkHF9Tj1v8/h53/fXf+p/Nr/3fZ5zzvdcvuc8HbpYOrrYvzqAHvgeU/EthuEDHuIGzuA43rQKtB3ANOzOTtsleh9LcaGZUiuAjSnSDZ0o33usxvaqTTOAzjh/nRy/RN/s+GfsLEGqADPxe03ky/EU/XEz9yN60h2RyUT80fBRAvTGP/iqBmAujmadBbiSgfrls79T40fi3/hfAizLTW3n/xVWYF9NELNxsgpwGtPbGD7BKUSEv2BAJcDSdC+WVAEep8gGZ62o5ZEUxag0A1dTbdcj7ksZiC0Ym2blFuYXl3+lYMZUAYINvbLSpvQNNnVGtuLXbPAsk+CTHrxIPI5Gh6zCtvz7u8SMi9hROIj74P3oIrOS3uGrTzWDO/imCHk44qwVwBqMwwN8jUeF7W2MqAIcSg0M2jVkXkHHulLNarAmKx7AT1WAhThYeLqO8XiLSZnbh/OQBc+/xJ/4In+j2Q35IWVwrAoQDb6LIYXiJSzGvZzy5EzN85k5UdKg5ITCJoY1Aog18tm6noKzlXq8Sxt1f6JjzMnzfBdrIobpR3Qr9IPeke3lxlmzZbcWm+uK3uJ+ZaLnrvKu1bpel7KLWah7kBq+IsuY7t+qwO0czEjrYA8G1WQTD84iRL8+k7oIe2JO3lHRuKH5yQzuX0szcg4nMtOaxlEH8D9b8Z9ZlwN8BNj8axkFea3jAAAAAElFTkSuQmCC"/>
                </div>
                </div>
            </div>
        </>
    )
}


const MoreSection = () => {

    const [side, setSide] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://my-json-server.typicode.com/infinitee404/json-blog/moreNews');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSide(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
    
      const miniCards = side.map(item => {
        return <MiniCards 
            imageSrc = {item.imageSrc}
            category = {item.category}
            title = {item.title}
        />
        })  
    return (
        <>
            <div className="side-container">
                <AuthorSection />
                <div className="more-news">
                    <p className="more-post-title">Popular Post</p>
                    {miniCards}
                </div>
                <div className="more-tags">
                    <p className="more-tags-title">Tags</p>
                    <div className="tags">
                        <p className="card-category">Adventure</p>
                        <p className="card-category">Beauty</p>
                        <p className="card-category">Fashion</p>
                        <p className="card-category">Health</p>
                        <p className="card-category">Lifestyle</p>
                        <p className="card-category">Personal Blog</p>
                        <p className="card-category">Tips & Tricks</p>
                        <p className="card-category">Travels</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default MoreSection
