import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        H1
        <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
        H2
        <h2>Aenean commodo ligula eget dolor aenean massa</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Aenean commodo ligula eget dolor.</li>
          <li>Aenean massa cum sociis natoque penatibus.</li>
        </ul>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </li>
          <li>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem.
          </li>
          <li>
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </li>
          <li>
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          </li>
        </ul>
        
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa
          <strong>strong</strong>. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
          enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede{" "}
          <a class="external ext" href="#">
            link
          </a>
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <strong>strong</strong>. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec, vulputate eget, arcu. In <em>em</em>
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam{" "}
          <a class="external ext" href="#">
            link
          </a>
          dictum felis eu pede mollis pretium.
        </blockquote>
      </div>
    );
  }
}
export default About;