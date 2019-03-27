<template>
    <div class="CTAScroll">
        <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="624"
            img-height="280"
        >
            <b-carousel-slide caption="First slide" img-src="../img/clock.jpg"/>
            <b-carousel-slide caption="Second Slide" img-src="../img/technology.jpg" />
            <b-carousel-slide caption="Third Slide" img-src="../img/tablet.jpg" />
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
    text-align: center;
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
#btnSchedNow {
    margin: 12px 0px 12px 42px;
    background-color: red;
    border-radius: 6px;
    color:white;
    border-color: red;
    font-size: 18px;
    width: 140px;
    height: 50px;
}
#inFirstName {
    width: 180px;
    margin: 12px 5px 12px 12px;
}
#inLastName {
    width: 180px;
    margin: 12px 12px 12px 5px;
}
#inCompany, #inWorkEmail, #inPhoneNumber{
    width: 370px;
}
</style>