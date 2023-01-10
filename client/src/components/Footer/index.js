import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 footer">
      <div className="copyright]">
        &copy;{new Date().getFullYear()} by 
      </div>

      <div class="content-slider">
        <div class="slider">
          <div class="mask">
            <ul>
              <li class="anim1">
                <a href="https://github.com/annoyingdroid" class="quote">
                  <img src="https://avatars.githubusercontent.com/u/48995374?v=4"></img>
                  <figcaption>Aaron Frialde</figcaption>
                </a>
              </li>
              <li class="anim2">
                <a href="https://github.com/kabradshaw1" class="quote">
                  <img src="https://avatars.githubusercontent.com/u/109608707?v=4"></img>
                  <figcaption>Kyle Bradshaw</figcaption>
                </a>
              </li>
              <li class="anim3">
                <a href="https://github.com/ashleymullikin" class="quote">
                  <img src="https://avatars.githubusercontent.com/u/109765172?v=4"></img>
                  <figcaption>Ashley Mullikin</figcaption>
                </a>
              </li>
              <li class="anim4">
                <a href="https://github.com/erbeard" class="quote">
                  <img src="https://avatars.githubusercontent.com/u/19694724?v=4"></img>
                  <figcaption>Edward Beard</figcaption>
                </a>
              </li>
              <li class="anim5">
                <a href="https://github.com/August-Lascola" class="quote">
                  <img src="https://avatars.githubusercontent.com/u/109111489?v=4"></img>
                  <figcaption>August Lascola</figcaption>
                </a>
              </li>
              <li class="anim6">
                <a href="https://github.com/landank" class="quote">
                  <img src="https://avatars.githubusercontent.com/u/109819736?v=4"></img>
                  <figcaption>Landen Blankinship</figcaption>
                </a>
              </li>
      </ul>
    </div>
  </div>
</div>
    


    </footer>
  );
};

export default Footer;