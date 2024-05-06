import React from "react";
import "./About.css";
import Imge from "../../../../assets/Images/aboutimg.webp";
import { Space } from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="about_text">
            <h1>About TechShed</h1>
            <hr style={{ paddingBottom: "50px" }} />
          </div>

          <div className="col-6">
            <img className="about_image w-100" src={Imge} alt="" />
          </div>
          <div className="col-6">
            <div className="left_text">
              <p className="p1">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="p2">
                This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// #include <stdio.h>

// int main() {
//     int rows = 6, count = 1, i, j, space;

//     for (i = 0; i <= rows; i++) {
//         for (space = 1; space <= rows - i; space++) {
//             printf(" _ "); // Print spaces for formatting
//         }
//         for (j = 0; j <= i; j++) {
//             if (j == 0 || i == 0) {
//                 count = 1;
//             } else {
//                 count = count * (i - j + 1) / j;
//             }
//             if (count >= 10) {
//                 printf(" _ _ "); // Adjust spacing for readability
//             }else{
//               printf("_ _ _")
//             }
//             printf("%3d ", &count); // Adjusted spacing for readability
//         }
//         printf("\n");
//     }

//     return 0;
// }
