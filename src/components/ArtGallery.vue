<template>
    <div class="art-gallery">
        <h2>Concept Art</h2>
        <h3>{{ pics[currentPic].altText }}</h3>
       <img :src="pics[currentPic].picUrl" :alt="pics[currentPic].altText" class="art-gallery-img"/>
        <button @click="nextPic">Next Image</button>
        
    </div>
</template>

<script>

export default{
    data(){
        return {
            currentPic: 0,
            pics: [
                {
                    altText: 'The glasses Samy makes for Evan',
                    picUrl: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736827643/IMG_0208_skexsf.jpg',
                },
                {
                    altText: 'A mountain sunrise',
                    picUrl: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736827635/IMG_0210_judsct.jpg',
                },
                {
                    altText: 'Samy Kind has a heart full of love!',
                    picUrl: 'https://res.cloudinary.com/dthgudawp/image/upload/v1736827623/IMG_0211_wbibzo.jpg',
                },
            ]
        }
    }, 
    methods: {
        nextPic(){
            this.currentPic += 1;
            if(this.currentPic == this.pics.length){
                this.currentPic = 0;
            }
        }
    }
}

</script>