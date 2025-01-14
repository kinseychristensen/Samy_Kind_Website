<template>
    <div  id="read-aloud-flex">    
        <h2>{{ videos[currentVid].vidTitle }}</h2>
        <iframe width="560" height="315" :src="videos[currentVid].vidUrl" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button @click="nextVideo">Next Video</button>
        
    </div>
</template>

<script>

export default{
    data(){
        return {
            currentVid: 0,
            videos: [
                {
                    vidTitle: 'Introducing the Samy Kind series: Book One',
                    vidUrl: 'https://www.youtube.com/embed/K4aZFqZEVSc?si=1_OePctJUeEkvj9o',
                },
                {
                    vidTitle: 'Chapter One: This Trip Will Be Nice',
                    vidUrl: 'https://www.youtube.com/embed/P0Hg27H_OwU?si=CdACutwOgIbqfouL',
                },
                {
                    vidTitle: 'Chapter Two: Sightseeing',
                    vidUrl: 'https://www.youtube.com/embed/ij0gdkWrJUc?si=4XDTSY6U7KqK0NPX',
                },
                {
                    vidTitle: 'Chapter Three: The New House',
                    vidUrl: 'https://www.youtube.com/embed/ErbTICNi0IM?si=qwYIA0m7e6gsz17C',
                },
                {
                    vidTitle: 'Chapter Four: Making Friends',
                    vidUrl: 'https://www.youtube.com/embed/TWkU6k-hMqA?si=Mn3UO9MNW5kZ_vMs',
                },
                {
                    vidTitle: 'Chapter Five: A New School',
                    vidUrl: 'https://www.youtube.com/embed/BGv0BA7J8eI?si=eFnJzdIyxqraiS4w',
                },
                {
                    vidTitle: 'Chapter Six: Making More Friends',
                    vidUrl: 'https://www.youtube.com/embed/RqExrquTgi0?si=pIqzVUkVDeHusLvd',
                },
                {
                    vidTitle: 'Chapter Seven: Tragedy Strikes',
                    vidUrl: 'https://www.youtube.com/embed/1106iBABwq4?si=YRLVCsLNsX3Cq6ju',
                },
                {
                    vidTitle: 'Chapter Eight: The Reluctant Invitation',
                    vidUrl: 'https://www.youtube.com/embed/y-kSIWJVrdc?si=FXMQyS8vNDIE4Pxo',
                },
                {
                    vidTitle: 'Chapter Nine: The Funeral',
                    vidUrl: 'https://www.youtube.com/embed/oTiRqNdqR24?si=0Ys8QRBGizDECv-1',
                },
                {
                    vidTitle: 'Chapter Ten: So Much Heat',
                    vidUrl: 'https://www.youtube.com/embed/jQG7nOt35So?si=j4qKf1Zuq2i_xeWR',
                },
                {
                    vidTitle: 'Chapter Eleven: The School Counselor',
                    vidUrl: 'https://www.youtube.com/embed/EGAbs71xtR0?si=y--UhN4SItm7owLt',
                },
                {
                    vidTitle: 'Chapter Twelve: A Family Visit',
                    vidUrl: 'https://www.youtube.com/embed/NxcPm_oFbeM?si=jfIrCPlEc-kICF5F',
                },
                {
                    vidTitle: 'Chapter Thirteen: Last Names',
                    vidUrl: 'https://www.youtube.com/embed/qWQBESiIlSo?si=h6oKU6Gqb5omHJsj',
                },
                {
                    vidTitle: 'Chapter Fourteen: Childhood Sweethearts',
                    vidUrl: 'https://www.youtube.com/embed/my4ggyu5cvg?si=3a0-YjrUuXigeG9R',
                },
                {
                    vidTitle: 'Chapter Fifteen: Feeling Better',
                    vidUrl: 'https://www.youtube.com/embed/uA6Zoi1fzNU?si=tUJLOBt0d8yOdXpz',
                },
                {
                    vidTitle: 'Chapter Sixteen: Friends Again',
                    vidUrl: 'https://www.youtube.com/embed/hjnYxdbYNjY?si=h1YgQ9KMvTVxq4Cm',
                },
            
            ]
        }
    }, 
    methods: {
        nextVideo(){
            this.currentVid += 1;
            if(this.currentVid == this.videos.length){
                this.currentVid = 0;
            }
        }
    }
}

</script>