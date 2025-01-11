<template>
  <div class="page-grid">
    <h1 class="page-title">About the Author: Mr Nate</h1>
      <img :src="spikePic" class="avatar page-avatar"/>
     <div class="avatar-intro">Hey. I'm Spike Scarecrow, one of Samy's friends. I like scarecrows, especially making scarecrow dolls. In case you wonder why,
       I'm not afraid of anything. I'm not even nervous to introduce Mr. Nate to you. He is the author and illustrator of this 
       series. He has a lot to tell you about himself. Take it away, Mr. Nate.
       </div>
       <div class="page-contents">
    <div id="about-contents">
        <img :src="mrNatePic" class="avatar" id="about-image"/>
        <p>
        Thank you, Spike. My name is Nate Christensen. My pen name is Mr. Nate for short. I've been using that ever since I helped children and 
        teachers at a YMCA, because that's what they called me. I thought it fit into my published work. I was born with mild to moderate autism 
        and had a hard time with communication. When I joined Boy Scouts, I earned all 132 merit badges that were available during my Scouting 
        tenure. It helped me with reading, writing, and drawing as well. I wrote this book series, because I want to show kindness to all the 
        world and help children with knowing how we can show it, even throughout different life challenges. I've been writing a lot of different 
        Samy Kind stories ever since I was eleven years old. It was the first created character that I ever came up with. My favorite character 
        of the series is Samy Kind himself, because not only is he the main character, but he goes through different life challenges that help 
        him improve his kindness to others.</p>
       
        <p>I liked drawing pictures ever since kindergarten, but a lot of times, I didn't have the patience or the skill to draw like I do today. 
        I did some drawings for my Boy Scout merit badge assignments. It was a good start on how to sketch. Then I took a few art classes at 
        college that helped me with learning the different techniques. I even used computer art to draw the illustrations for all different art 
        projects during grade school. Throughout all the years, I have been practicing and learning how to make these pictures for my books. 
        Today, I use my iPad and Apple Pencil to draw the illustrations. It helps children to know what's going on in the books and make it very exciting.
       </p> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      spikePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736285914/spike_avatar_qocxmg.png',
      mrNatePic: 'https://res.cloudinary.com/dthgudawp/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736602055/nate_jzvk2g.png',
    }
  }
}
</script>
