<template>
    <div class="CTAScroll">
        <b-carousel
            id="carousel-fade"
            v-model="slide"
            style="text-shadow: 0px 0px 2px #000"            
            indicators
            img-width="600"
            img-height="800"
        >
            <b-carousel-slide caption="" img-src="../img/FeedRealTime.png"/>
            <b-carousel-slide caption="" img-src="../img/MedicalStrategy.png" />
            <b-carousel-slide caption="" img-src="../img/ShrinkCycleTime.png" />
            <b-carousel-slide caption="" img-src="../img/InsightsSince2004.png" />
        </b-carousel>
    </div>
</template>

<script>


export default {
    name: 'CTAScroll',
    props: {
       
    },
    components: {
        
    }
}
</script>
<style scoped>

div.CTAScroll div input{
    border: 2px solid lightgray;
    border-radius:5px;
    margin: 12px;
    /* text-align: center; */
}

/* div.CTAForm div.row {
    margin: 10px;
} */
.Gray {
    color: gray;
}
.Red {
    color: red;
}

</style>