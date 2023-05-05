<template>
    <div class="py-16 text-white">  
        <div class="container m-auto px-4 md:px-12 lg:px-24">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
            <div class="md:4/12 lg:w-4/12 text-base">
                <h2 class="text-2xl font-bold" @click="activeChap(1)">Summary</h2>
                <p class="mt-6" @click="activeChap(2)">Greeting your customer</p>
                <p class="mt-6" @click="activeChap(3)">Personal presentation</p>
                <p class="mt-6" @click="activeChap(4)">Gather basic information</p>
                <p class="mt-6" @click="activeChap(5)">Offer Assistance</p>
                <p class="mt-6" @click="activeChap(6)">Establish Rapport</p>
            </div>
            <div class="md:8/12 lg:w-8/12 text-base">
                <div v-if="active === 1" class="session mb-16">
                    <h2 class="text-2xl font-bold">Welcoming in showroom</h2>
                    <p class="mt-8">Welcoming customers in a car dealership is essential to ease their stress. Acknowledge when they come in and ensure a clean, pleasant dealership with friendly, professional staff. Keep facilities well-maintained, update welcome boards, and have attractive vehicle displays.</p>
                    <div class="topics mt-8">
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Greet and acknowledge all Customers within 30 seconds and  identify yourself.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Sincerely and professionally welcome and thank the Customers.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Have cordial, upbeat, and timely interactions.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Quickly identify Customer needs.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Share information about resources, check online leads, and ask clarifying questions.</p>
                    </div>
                </div>
                <div v-if="active === 2" class="session mb-16">
                    <h2 class="text-2xl font-bold">Greeting your customer</h2>
                    <div class="topics mt-8">
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Greet and acknowledge all Customers within 30 seconds and  identify yourself.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Sincerely and professionally welcome and thank the Customers.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Have cordial, upbeat, and timely interactions.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Quickly identify Customer needs.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg:mx-12"/> Share information about resources, check online leads, and ask clarifying questions.</p>
                    </div>
                </div>
                <div v-if="active === 3" class="session mb-16">
                    <h2 class="text-2xl font-bold">Personal presentation</h2>
                    <div class="topics mt-8">
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg-:mx-12"/> Good first impressions are crucial for Sales Executives.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg-:mx-12"/> Develop rapport using your own style and scripts.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg-:mx-12"/> Have good posture, eye contact, grooming, great product knowledge, and wear your name badge.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg-:mx-12"/> Offer online resources and send tailored communications with value-added content.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-4 lg-:mx-12"/> In remote live chats, confirm the online inquiry and address their specific request.</p>
                    </div>
                    <div class="illustration w-full mt-24">
                        <Icon name="images/shaking" alt="Shaking Icon" size="w-64" class="m-auto"/>
                    </div>
                </div>
                <div v-if="active === 4" class="session mb-16">
                    <h2 class="text-2xl font-bold">Gather basic information</h2>
                    <div class="topics mt-8">
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Engage and learn about Customers needs.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Get their complete names, addresses, phone numbers, preferred vehicles and potential trade.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Record information in the Dealership's traffic log for follow-up.</p>
                    </div>
                </div>
                <div v-if="active === 5" class="session mb-16">
                    <h2 class="text-2xl font-bold">Offer Assistance</h2>
                    <div class="topics mt-8">
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Assist Customers by explaining how vehicles are set up.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Hand out produc information and responding to any queries.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Tell them about the Dealership and its distinguishing characteristics.</p>
                    </div>
                </div>
                <div v-if="active === 6" class="session mb-16">
                    <h2 class="text-2xl font-bold">Establish Rapport</h2>
                    <div class="topics mt-8">
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Find points of agreement with the Customer and pay attention to what they say.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Use open-ended inquiries to find out their needs.</p>
                        <p class="mt-6 flex justify-start items-center"><Icon name="ico-completed" alt="Icon Completed" size="w-8 mx-12"/> Avoiding pressure tactics to prevent negative perceptions.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icon from '../components/Icon'

export default {
  name: 'DetailedDescription',
  components: {
      Icon,
    },
  transition: 'default',
  data() {
    return {
      active: 1,
    }
  },
  methods: {
    activeChap(id) {
      this.active = id
    },
  },
}
</script>