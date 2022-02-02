# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJLx6lqGQfK4gRtH3ZVmirChs&destination=place_id:ChIJ0X31pIK3voARo3mz1ebVzDo&waypoints=place_id:ChIJZTlS0TJVa4gRDk2e9cbJ_uE%7Cplace_id:ChIJp3psGfLpwIcRwh64iS_iw7A%7Cplace_id:ChIJNRtRYZZ4bIcR38jJsYGuujM&alternatives=true&departure_time=1648904400&avoid=tolls&units=metric&traffic_model=best_guess&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJLx6lqGQfK4gRtH3ZVmirChs",
         "types" : [ "premise" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJZTlS0TJVa4gRDk2e9cbJ_uE",
         "types" : [ "establishment", "lodging", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJp3psGfLpwIcRwh64iS_iw7A",
         "types" : [ "establishment", "point_of_interest", "shopping_mall" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJNRtRYZZ4bIcR38jJsYGuujM",
         "types" : [ "establishment", "lodging", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ0X31pIK3voARo3mz1ebVzDo",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.89020230000001,
               "lng" : -79.59250519999999
            },
            "southwest" : {
               "lat" : 36.1700501,
               "lng" : -115.1400843
            }
         },
         "copyrights" : "Map data ©2022 Google, INEGI",
         "legs" : [
            {
               "distance" : {
                  "text" : "862 km",
                  "value" : 862334
               },
               "duration" : {
                  "text" : "9 hours 1 min",
                  "value" : 32448
               },
               "end_address" : "3871 W 92nd St, Indianapolis, IN 46268, USA",
               "end_location" : {
                  "lat" : 39.91935549999999,
                  "lng" : -86.2276967
               },
               "start_address" : "419 Kingsview Dr, Bolton, ON L7E 1J4, Canada",
               "start_location" : {
                  "lat" : 43.89020230000001,
                  "lng" : -79.74612449999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "8 m",
                        "value" : 8
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.8901558,
                        "lng" : -79.74604409999999
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e on \u003cb\u003eKingsview Dr\u003c/b\u003e toward \u003cb\u003eBolton Heights Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wh{jGflveNFO"
                     },
                     "start_location" : {
                        "lat" : 43.89020230000001,
                        "lng" : -79.74612449999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 383
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 43.8874599,
                        "lng" : -79.7490124
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBolton Heights Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oh{jGvkveNz@bAVX~@fAFFHHd@h@HHlAvAtA|AlCzCRR"
                     },
                     "start_location" : {
                        "lat" : 43.8901558,
                        "lng" : -79.74604409999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.6 km",
                        "value" : 9621
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 768
                     },
                     "end_location" : {
                        "lat" : 43.819353,
                        "lng" : -79.678715
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eQueen St N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePeel Regional Rd 50\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Peel Regional Rd 50\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "swzjGh~veNLRnAuBF]P[p@gADI|AeCXg@j@aAVe@Va@x@uAl@eA@Cp@gAVc@h@_AFIn@gA~@{AHODGR[j@w@HKt@_AZ_@DGZ_@n@w@fCcDTYd@q@v@iAJMr@mAVc@Zi@rAiBn@cAxA}BZg@Va@LQb@s@PUT_@Xa@Xc@@AT_@Xc@?AVa@lAiB@Cn@aAp@eAHMj@}@Xa@Xc@jAiB\\k@dBmC`BeCNY^m@fAcBh@_AHOz@oAx@qAb@u@HMVa@v@oA~AkCZk@Zi@rAyBVIlBwCJO|AaCp@aAz@qAt@mAl@}@hAcBnAiBR_@nAeBDIRYVa@Xa@r@eANU~BeDLQj@y@T_@\\i@^k@Zg@Xg@Xc@hAkBxAaCvAuBzA}BTYLWf@w@vA}Bt@kAj@_AR[LQr@iAFMh@u@n@eA~@wA|@qAz@qAn@aA@?\\k@NU@E@CHa@NSZg@\\g@T]\\e@PY`@k@R[V_@~BsD~AaCl@_Ab@q@d@s@lAmBf@u@Xc@lAiBfAcBnB{CxA{BlAgBjDkFdBgCNWdA{ArB{CBE^i@\\i@lBuCv@oA|BkDbBgCrB{Cp@}@h@q@VWx@s@XWrA}@hB_Ar@]dAe@t@]rOyHrPkIbLuFjAm@xBeAdBy@nCsA`@QdAe@|@c@\\QlB_AvE{BjFgCx@a@fG{Cn@[bGwCzBgAjQuIjB}@tHqD|E}BhCoA|IiElFiCBAbAe@"
                     },
                     "start_location" : {
                        "lat" : 43.8874599,
                        "lng" : -79.7490124
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1328
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 103
                     },
                     "end_location" : {
                        "lat" : 43.82302840000001,
                        "lng" : -79.66314149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMajor MacKenzie Dr.\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eYork Regional Rd 25\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}mmjG~fieNPK_@oCs@mF]gCKw@oA}JyB}P?Ca@iCo@{Dy@kFW}AW}A{AyJQaAi@}Ce@{B_@aAO["
                     },
                     "start_location" : {
                        "lat" : 43.819353,
                        "lng" : -79.678715
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "18.0 km",
                        "value" : 17951
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 624
                     },
                     "end_location" : {
                        "lat" : 43.6756961,
                        "lng" : -79.59243169999999
                     },
                     "html_instructions" : "Take the ramp onto \u003cb\u003eON-427\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}dnjGrefeN_@oA]y@Ss@U}@UcACc@Ae@Ac@Dq@Da@Ja@Rm@b@aAN_@BGlDgFrAmBtA}AV[j@s@V[JQP_@PMTSXUDC@CZW\\Y\\Y\\Y?A^WrA_AhBgAbAi@b@U~@a@`Aa@fBq@`@ObA_@RIpA_@dA[lA_@|@YdFiBtEyBVQ~CqBd@YvAcAfByApAmAFGpB}BfBuBb@g@tHgJVYr@y@Z]Z_@h@m@X_@JMFGFIV]Z_@Z_@t@_ADEfCsCZ_@lBuBpAqAJKjAeAnA_AxAiAhFqChFiC~E}ApDcAdI{@zBUfD[BAhGi@zAOLCrCY~Cc@hAOrFw@|@KHC`AMf@Ib@GLARCJADARCPA\\EfAMxBWv@KjBS`@GxAOr@Ib@GjBSHAVEb@Eb@GXCbAMVCJAJAn@I^Ez@Kj@Gb@GRC^E`@ETCnBUnEg@v@IfEe@pFo@VCJAb@Gb@ENCRAdAMHA|@KB?`AMj@GB?VENAb@ETCj@EtBSlCWb@GnCWlCYfAKlAMZCb@EdBQDAhBQb@Ep@I^CdAIzMmAl@Ef@En@Ch@Ez@Ef@C~Nu@~@ExES~CU~Fs@pEk@|AStAQTCPERCRCPCNCJAJCxJmA`BS~ASlC]FAb@G~@KjDa@t@Kv@IdDc@vAOfBULCb@G`@Eh@Ij@G`@GPCDAx@Kx@K\\CRCHAhAOLAXBxC_@FAbFq@b@Ez@MhBUfAMdAMlC]jBUbBU`H{@\\E|BW^GfBQz@U@?tC_@`BQdAMdAMxBYfAOn@ItBU`AKhDo@xEg@jFo@dEu@lBc@nD_A~@]lAe@fCgAnAm@dAm@`EoBDCfNkGtDmBpAm@hCkAzOmHhPuHv@_@v@a@NIfB}@hB_AfB}@`Ag@~DoBhB{@|BiA`@SBA~C}AhKkFfB}@h@Wd@YtEcC|A{@z@g@fBaArAu@`LiGxBiAfAm@fAm@`Ak@|CcBvBkAdDiB`Ak@VMJGzA{@VOHETOr@a@r@_@tH}DbDcB\\OvAw@nAi@r@YbGkCXMfDuAr@YfEaBvAk@@AlD_BJEhB_ALIFCBCFEHELIdBeARQhBmA\\WHE^UJKLOLKJKNM@Ar@s@BCjAuAhBkCTg@d@cAFKh@oA\\_AJ]b@kA@AHUPa@Pc@Pg@Rk@Zs@N_@P_@P]^m@PW\\e@^i@d@k@d@e@RUTQj@e@l@e@f@Yn@]j@W`@Od@MNEp@QbBWpBUhBQH?~BU|AOf@Gh@E\\CNCz@GZC"
                     },
                     "start_location" : {
                        "lat" : 43.82302840000001,
                        "lng" : -79.66314149999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.4 km",
                        "value" : 4395
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 165
                     },
                     "end_location" : {
                        "lat" : 43.65217519999999,
                        "lng" : -79.6287916
                     },
                     "html_instructions" : "Take the \u003cb\u003eON-401 W\u003c/b\u003e exit",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "clqiGtkxdNFDD@@?B@B?DANAt@Ih@Gb@GRCn@MJCZKpBs@zAw@hAq@vAcAfA{@z@w@HIXWXUJKTOPKPIPGXGRATAN@F?D?PBTDVHRJ@@RLPNPPBDJLLT@?JTXp@BD`@`AJZFL^dAXv@`@tAHVTt@r@bCp@dCRz@\\nAXhAJPJJNf@@F\\pA@@Pp@hBhH@BTx@FXhBdHlBlHhBfHlBpHX`ANl@ZpATx@|@jD@B\\rAn@`Cf@lB`BzFnAdEh@zAn@jB^`Az@|Bz@tB`@dAFJVb@\\t@rExJnDtHj@jAlB~DRb@fAzBr@tArD|HxDlIt@`BHPHPrA~CDHzDrJdBrEjC`H"
                     },
                     "start_location" : {
                        "lat" : 43.6756961,
                        "lng" : -79.59243169999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1404
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 43.6462163,
                        "lng" : -79.6441679
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e, follow signs for \u003cb\u003eQEW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHamilton\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOntario 403\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-410\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBrampton\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "cyliG|n_eNjErMlBfGj@fBHXhA`ElCjJvCbK@DRr@fBnGd@`BT|@\\pAd@hBj@xBJ^b@fB@DjBdI"
                     },
                     "start_location" : {
                        "lat" : 43.65217519999999,
                        "lng" : -79.6287916
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2643
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 43.6349114,
                        "lng" : -79.6730049
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eOntario 401 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLondon\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "{skiG`obeNXj@xAjGVbAhAxEf@tBNj@@HbC~JLl@Pn@VhAV`At@hC`AfDtAhEVx@BD\\fA|AvETn@jAdD~A`FtFvPf@zAj@vAbAzC@BNd@^dA^fA`@hAn@fBnBdGnBvGlA`F|AjGLl@n@dCLj@lBxH?@Lj@@?`A~D"
                     },
                     "start_location" : {
                        "lat" : 43.6462163,
                        "lng" : -79.6441679
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2274
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 43.6250296,
                        "lng" : -79.6977282
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e, follow signs for \u003cb\u003eMavis Rd\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "emiiGfcheNbB`GHZr@zBb@rA`@nAN`@xArEpA~DRn@?@x@hCfChIhCjItArEj@lBtB~GX`A`AdD`BpFn@vBFPL`@`@tAJ\\b@zAdBrG`A~Dr@rC|AbGvAfFZ`A~BjHv@pC"
                     },
                     "start_location" : {
                        "lat" : 43.6349114,
                        "lng" : -79.6730049
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "156 km",
                        "value" : 155958
                     },
                     "duration" : {
                        "text" : "1 hour 27 mins",
                        "value" : 5232
                     },
                     "end_location" : {
                        "lat" : 42.9101969,
                        "lng" : -81.2271343
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eON-401 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mogiGx}leNh@lB@BjDrLJ\\dAjDjB`GPh@tB|GjBpGv@lCRn@FVPj@Lb@ZfABJVx@x@pCxEzOdClIHXTx@BHLl@Rl@Nf@z@xCjBlGzD~MFNRp@HVL`@DLNd@fCfJpAnEFTt@hCbAnDf@`Bf@dBXb@|@`D~@fDNh@XbAT|@~@hDNh@Rr@b@~ABLh@tBFTVbAJ`@@DPp@d@jBn@`Cv@vCHXJ`@@DZnA|A~FbAvDpAlEX`AfAlDjArDRn@L`@`@pAFRFR`@pA\\|@Rl@f@|Ax@dC~@rCx@lCDJTv@^lA|AbFPj@^nAPh@DNBHDJFTpBzGn@xBV`AX~@r@xCTbARhA^lBP|@Jz@X~ATfBRbBVfCJlAFt@JrA@RBb@@`@HfAj@~MJnDNhDLvENnEFrB@b@`@dMV~Il@tQ@b@\\pKDjAn@nPRhFDtAT~FBnAN|Cd@hPH~ADnA\\|H@PDdA@ZD~B\\bIP~CNfDJrCR`DZpDb@dE@FJl@T~AP~@\\hBLl@n@tC~@zD`@|AZdA`@tARh@Lb@BDVt@L\\Rj@b@fAl@tAd@fAhAzBl@fA@Bp@lArBhDd@t@PVHJ?@t@~@rBdC`AhAv@|@TVhBtBf@j@l@p@t@z@f@h@|AfB~AjBtNvP\\f@b@f@r@x@xA`Bp@t@f@l@`ClCpC`DdBpBBBVXDDnBzB`AfAPTVZZ^hCnCBBVXBB@@hEpE~AfBVXjCzChApAbC`EvF~G`CvCX`@Z\\Z^VXfBtBnB|BnB|BjCzC`DrDxGxHpAzAfBxB|AzA`ApAnBzBtEjFzBbCn@t@VZz@~@hC|Cv@~@Z^j@l@X^@@hB~B~LrNZ\\jL|Ml@j@\\b@TVdE|ElBvBjCbDtAbB|GvHjFbGbLnMrEpFj@h@tB|BX\\X\\PTRTl@p@t@v@HJtBxB~ClD\\^r@v@v@x@`K~KTV@@DDDDBBNLPRd@b@rBbCfBtBt@z@vA~ApAzA~@jALPj@v@`@l@h@v@n@`AtAbCt@vAf@bATf@`AvBd@dA`@dAj@zAb@nAf@~A`@tAb@fB@Ff@vBZnAf@fCRlA@Dr@nE^vCd@tEp@rI`@fFTrCFz@Dp@LzANnB@JB\\@DDn@P`CNdBl@`I\\pETnCNlB?FFf@LpATnBTzAXtB^tBBL^nBFXNz@FVJb@Jb@Nj@v@xCb@zA`@pARj@n@fBPb@DLPj@Xv@Rh@JZHTFNHVHPzAhEv@|BxF`PfBbFHVVp@Tp@dBfFtAdEV|@v@vCfAzCt@vBL\\xAdEzE`NpDpJ^fAVt@Rr@b@`B^~ALr@Fb@Hj@Fb@Hv@BRJpAVrDRjDHpAXvEN`CRdE^vGDj@RpDHxALxBJfB?L@RBd@xAxW?@@JDn@Bd@LjBDlABTHlAJbBDx@JbBHpALlBLnAP~APtANz@@HHd@@HH\\Lp@ZnARv@Rp@Pj@DL`@hA^bATf@j@lAR^v@zAh@dAZj@`@t@b@z@Tb@R^BFbDfG\\p@lBpDbDdGNZj@dApD`HvB~D`AjBXh@|AvCl@jAVd@NZt@pAVd@l@jAFJNX^t@`@t@r@nA@Dt@vAXf@tAhCh@bAP\\R`@FJf@~@@@DF~@bBt@tAVb@l@|@jBnCtBjCjArAd@h@d@d@f@f@HJVRfA`A\\XLJTPJJb@ZpB|Av@j@bFzDjF`EfClBhBtAf@\\VPHF`@ZxDjCfDxB`BdA@@vBvA^T\\Vv@f@v@f@NJ^Vr@b@JH|@r@\\XHHRPPPn@n@f@j@t@~@p@`APVf@z@\\j@b@|@Zn@DJd@fANb@Rj@DJX|@ZpAXlALr@FZBNHf@NdADd@D^Fp@B\\BRBb@Dl@Bf@F~@Dv@Dv@LvCBn@D|@H|A?HBb@?@Dp@XbGV|EPlC\\bGDt@PtDHpBJdCT`FHjB@NNrBRrBL~@NbARjAPx@b@nBVz@H\\Xx@FRXv@^`A^|@t@bB~@zB^v@|@lBJTRb@HPz@nBd@fAZp@Zt@pCbGbA|BFNP`@Vj@f@fAnAnCfAfCj@jAf@hAVj@^x@h@lAVh@P^Xn@P^f@fARd@LX\\t@Vj@^x@N^R`@Zr@P`@j@nAVl@Td@z@lBh@hAXl@Vh@f@jAf@fAh@lAVj@~@rBr@|AZt@~@pBv@fBNZRf@JVd@hAPd@Tp@\\|@Tr@`@jAX~@Pn@Pn@\\lARx@XlAPx@VnAHb@Nx@Lh@BRJf@ZhBHf@Nt@TpALn@F\\@HNv@FZLr@VpAZfBJl@DTDVJn@H\\Jf@N`ALn@XzAN|@Nz@VvATlAb@`CXzAX|A@BJh@Jn@@BhAtGJh@Hb@BHJl@Hd@j@|CDXlC|NJn@FZ\\lBJl@Ln@P`AP`Ab@`C\\jBVzAFVDVj@bDDV^rB\\nBLn@XzAJn@Jl@P|@`@zBVvAJn@@@Hd@z@rEh@|C^xBTlAVvAF`@BJJp@Lz@ZdCFl@LhAFf@H`AJhAJzAJpB@RH`B?HBp@HnCDlC?\\@RDnC@t@@p@@p@@LBpCBbABjBFbEDtCTvN@p@?^@PBrC@p@?p@Bx@@rA@V?\\Bp@B`B@p@@p@BdBBzAFhEBbB@nA@b@D~B@r@?VBfBBrABrABbABlANdDBb@Bn@LbBNjBJfAB\\LpAPzAXrBRrA\\xB\\fBr@|Dh@nC`@xBLn@Lr@Jf@b@`CH`@RfAX`B~@zE^pB\\lBLp@Lp@Ll@Jl@@FRdAh@tCx@lEt@|Dj@dDb@|B`@nBd@rCH^Jh@j@|C^rBzAdIz@vEP|@d@hCJf@f@nCLr@TjAPx@Ll@Jl@RdARbAJl@?@\\lBFZLl@l@bD^pBJl@Hf@P|@\\fB^tBVrARhAFXXzAVxATfA^rBJj@H^\\jB^pBr@xDh@rC\\jBH^r@`Ef@jCX`BLl@@BNv@@Fx@tEFVn@jDRlALl@Hd@@FX~Ax@jEt@bEx@dE?BJj@?@Lj@Jl@R`Af@lCf@jCDTJl@Jj@VrA\\fBDP~A~IBLJl@nAtGN|@J^Nz@TpAt@hD`@dBJb@t@vC\\lAHXVz@X~@Rd@`@hATp@f@vAjAbDt@tBvAbEDJXv@l@dBdCfHf@rA`AvCn@jBr@pBX~@J`@t@dCt@vCp@|C@B\\dB\\jBV~ANdADV?BFd@LdAV|BNvAP~BLdBFhABn@BX@\\DlAD`BBbBBtA@xB?~B?V?X?TAb@C`GExEAtD?NCfEE|F?|@CbB?JAhCEvFCtDCpDAdB?j@?LC`EAjBExG?LA`AAnACdFC`GAT?j@?^CrBAnCCpDEdJC|E@bDDtCLdE@T?TB`@Bb@@\\Dn@BZ@TVhDLtALlAt@bHV`CPtA@LNzAXxBN~AJ~@RlBRzALnAPzARpBHt@DX@LBNVdCJdANnAFh@BVPzAJz@V~BTxBf@fEPzABVPhBD\\TpBJ`ADb@Hh@Fj@Fh@DXnBnQPlBRbBj@fFBTf@vEHr@b@zDTlBbAdJpCfWfAzJ?@Hl@f@vEdBzO~AvN|@`IFp@VzBTpBl@nFt@~GHn@J`AV|BXnCd@jEhAbKnClVj@lFP`BFf@ZtCP`BLbAt@|Gp@fG^jDBT@@t@|G?@ZrC`@vD@BFn@~@nIl@lFNtAVxBNtADXLnARfBBRVxBHj@LhA`@xDVtBTlB^jC|@pFp@bD|@fE~AnHd@pBHb@@FLd@@DJd@?@@FLj@j@hCXpALl@?B@B@FDNDP?Bt@fDPz@lBzI|CrNNx@@@?@?@DL@D`@hBb@pBR|@t@lDJb@ZtAr@hDv@lDz@bEr@~CbAvE\\~A\\zALl@?@f@|BZxA~@dEbAxEXtADPBJLj@t@jDXnABN@@n@|CXpAp@rCdAvDZfARl@@BDPHV@@v@fCvAlEVz@Nd@\\hARn@X|@Tp@r@|BfAjDPh@fAjDd@rATv@DH@DNd@@BNd@Ph@?@@BL`@@BPh@Pj@@BX|@FRNh@@BNf@\\fADL@BNf@@@Nf@Ph@DNJZt@bCPj@xApE`@rAFPt@~B?@BDZdAbAzCn@rBp@xB^xAXfANj@Np@n@|CP~@|@rEx@`EpD`Rr@zDT`AP~@H^VpAJf@Hh@H\\d@fC^nBP|@j@rC@@BNZbBTfANbAHd@BLFl@BJHv@Hr@Hx@F~@HpADlABjA@l@DdC?L?BHvF?d@?DJnHHdI@BB`DJpJDzDD|CB|ABvCD|BDtEF~DHzGBxB@p@@t@FpFBvAH|G@`BV`TF`G@dCFnLBzF@hABfHBtH@X?X?b@@b@B|HD|H?`@?`@XzM?HHnCFrC?xA?zAF~HF`U@xADfD@pCBrDDbEHnBHzAFt@TpBXpBZhBXnAf@tBPf@d@dB\\~@l@xAfBfE@@hChFpAdCj@hANZNVxAxCNZz@fBp@tAzClG\\n@\\p@FLFL\\n@nAbCj@nAlAtCPb@N`@`AlCz@rCV|@j@lBbGbUp@`Ct@fCJ\\t@~Bz@|BtAfDz@lBXn@f@dAZt@R`@fA`CzAbDn@vAlBdEvE|Jd@hAZr@~@tBj@nATd@h@nADHN\\Td@p@xA`AvBTf@j@jAj@nA?@r@|ATd@x@jBjB|D@DDJFLBFHPFL|@nBfAbC`@z@Rb@FLXn@Td@FL@Bj@lA@DDH`@~@zB|E\\t@FLJVjB`EVh@v@dBd@fA^t@j@lAx@~Af@|@fAjB`A|A~@xANRHLhA|AvAfB~@fA\\ZhAjANLv@t@^\\NLLJz@p@@@\\Vj@b@nAz@r@b@tAx@x@d@`Ad@x@^~FpCfK|Ej@XVL|DjBNF~IfExFlCpB~@l@XfAh@vBbAnAl@nAl@rAl@ZPd@RtAp@rGzCvAp@pAl@hAh@TJjB|@n@Z`@N`@Pf@Rh@Rf@P|Af@XH`@Jr@Pn@Nt@NRDt@L^Fv@L`@Dn@HfBN|AHb@BlBJnCL~CLzGZz@DnCLlCLlBHfAFlAFhDNjFTvAH@?dJ`@b@BvH^vBJZ@f@Db@Dv@JVDXD`@Hn@LdAVp@Tz@Zh@Tv@\\h@Xh@Xz@h@h@^hA|@~@x@f@f@VXB@h@l@v@bAh@r@TZd@t@`@p@R\\Zj@h@fA^v@tExJ@Bh@hABDrAvCj@jAl@nAj@lAVh@fA|BN\\Rb@Td@@BtAvCtCdGlAfCd@dATf@@@l@pA~@lB@Fh@dAJTHPTd@P`@HNLVj@lATd@Tf@Td@NZDJj@jADHf@bAj@nAj@nATb@`AtBTd@Rd@xA|CRb@lB`E@BVd@\\v@dBpDlBbEtBlE`@z@h@hAf@fAd@~@@@pBhEv@`B\\t@bChFvAzCxAzCvBrEXl@Tf@h@fAVj@LVXn@`BjD|@hBzDlIVh@LVj@jAb@~@vAzCTf@`C`FpCbGz@dBXn@b@`AlAfC^v@HRNZDJFJLX@@HNJRLXTf@Td@Tf@j@lATd@j@lATh@Tb@j@nATd@vAzCj@lA?@j@lATd@Tf@`@z@v@zAl@jAd@z@`@r@\\l@d@p@x@lAjAbB\\b@?@X^Z^tAdBjAnA`@`@n@p@f@d@\\ZtDlDVT\\ZpDfDvArAz@v@`CvB~EnEh@f@lNjMbCzBjAfA^Z|FjFnCdC\\ZlAhA\\ZHHXVt@p@ZZHH~BvBf@f@|CrC\\Zf@d@hDzCx@t@\\Zz@t@\\Z\\ZnAhAlAfAHH@@ZZ\\\\\\ZHJPPZ^RTJJl@v@`@h@NTt@fADJVd@JNJTPZBDHNLX@?Rb@?@Th@Rd@DLLZRh@Pd@FPl@nB?@Nj@FTFTNj@Nj@?@Nj@Nj@Nj@FVFRNl@\\vANj@?@Nj@Nj@Nj@\\vAl@`CHZx@|C|@hDj@xBLd@dAnDTn@j@`BL^DHFLZ|@`A|BBFrApCtAhCnDvGbAhBR^BDR^Vb@tBxD?@BBR^Vb@Vd@Vb@tBxDVd@PXr@rA@?Td@fAnBPX\\n@NX^n@dAnBPXDHPZDHVb@NZ\\l@PZDHVd@h@~@jIdODJVb@|ArCPZDHPXDHVd@Vd@vAhCn@hA\\l@~CxF\\n@Vd@Vb@n@hAf@~@DHVd@PX\\n@PZDHVb@tD~GFHNXDHfAnBR\\@?P^n@hAVd@l@fA@@JPJPVd@PZDFTb@Vf@Vb@Vd@Tb@Xd@Tb@Vd@Vb@dAlBXf@`@r@Td@LRHPLRHNVb@?@Vb@Vd@Vb@JTHNLRHPVd@Td@Td@j@lAVn@n@zAHT@?Ph@HPHTRh@HTFRRh@FRHVPh@DPHXPh@FRFRFVDRNj@HVDRNj@FZDPHXR~@TjABNJl@Ll@Jl@RhAXzAJl@Ll@DRDXNx@p@nDBNRjABPRfADR^xBDNF\\N~@Ll@Jj@Jl@Ln@`@~BVvAt@fEr@xDVzAvDjTNv@r@rDp@bD^bBBJNl@\\tAjA~D|@pCl@dBl@~An@xAjAbC~@fBLXv@pAfAjBdEnG`@j@xKdPrAnBjAfB`GnIHLZ^X`@`@h@~AhBjAlApAnAXV\\ZXTBB\\XVRHFRPDBXRt@l@dAp@FDx@d@^TJFt@`@`@T`Bv@z@`@lCbAz@\\`EzAdExAbC|@~Al@|Bz@zFtBPFtAd@`@N|EfBtBv@f@Pf@PbC|@n@V`@NVJx@^bAf@n@\\d@XXP^Tn@d@l@d@JHt@l@l@j@\\\\`@`@f@j@RTVX\\b@BDh@p@RXh@v@`@n@b@r@Xh@Xf@Tb@`@v@b@~@^`Ad@hAFNL^b@pAZbA\\jAZnAr@`DVzAx@tF|@rGfAbIh@|Dl@lEd@fDR~AF^~@fHbApHd@hD^hCh@zDTpANz@XpARv@@DPp@Rr@HVn@fBPb@LZj@nA`@x@nArBxAvBxChDtBzA~@l@r@`@x@`@r@Zt@Xx@VdAXh@Ld@Jn@N|A\\D@~@PNDRDt@NhAVbCh@bEx@z@PxDv@n@Nn@NVFbCf@TDhDp@tCn@`@HZHF@xAZj@LfCf@vCl@pE~@XFrCl@@@t@PtA^JBfA^f@RJDj@VTJNHPHPJf@V`B`ADBZTB@n@d@j@d@DBVTJHPPHFRRXXb@b@t@x@f@h@dAtA|@nAl@~@l@`Aj@hALXn@nAXp@Zr@^bApAjDbC|GRh@@DPb@Ph@lBjFdB|ERh@b@lAz@`CRh@`@hA`BnE`AlCx@zB~@dCn@hBRh@HV^bAdAzCTj@z@|Bl@dBp@nBv@vBPh@@Bf@jAVr@t@xAVf@l@fAb@p@Vb@@BV\\RXh@t@fAlA`AbAZZVTBBVR\\XB@\\X\\VjBrAd@^fAx@|AjAj@`@zGdFzAhALJ^X\\VNJHH|@p@|@p@LLDBh@^pAbAHFzBbBvFhExDtCr@h@HFRPj@b@ZTpEhD~CbCpCrB\\XB@@@ZVrFbE~C`CtCzBB@ZT@BbDbCpCvBhCnBj@b@|@p@`@ZbAt@~CbCr@f@p@h@z@n@tAfAbAt@~@v@XV^Z|@x@b@b@h@j@\\^B@TZp@t@RTDFRVBDb@h@BBX^x@jATZn@~@dClDb@n@f@t@FFvKvOJNX`@tDlFhA~A`B~BHNNPHNdBbCfB`ClDjEp@t@rA`BNNxF~GtChDLNbBpBVZ|GfIZ^HHPRt@~@hPtRvBhCl@r@Z^Z^d@j@^b@n@v@fApALNNPZ^@?X\\t@~@Z^Z^JJd@h@z@dAX\\@@Z^FH\\`@JL^d@HHp@t@n@n@\\^h@b@j@`@JH^XBBf@ZDDl@^VN^RFB\\R@@^RvDzA~EnB`@P`O`G^ND@ZLDBpEdBr@Zr@Xj@Rb@R~Af@xErA`@L`@J|Bl@rBh@LDj@NlD~@rBh@LBtBl@lCr@t@Rt@R~GbBhDz@VFzEnAVJd@JRFLBJDLBH@NDHBD@n@Ph@Lp@RFBJBJBTFXF|Ab@f@Pp@T|Bz@zAr@PFj@XDB`@R`@RJFfC`BnCjBNLr@j@x@t@h@f@ZZ~AxA~B|BpFnFXT@?DDzBzBlFdFVVn@p@tArAtBvBv@z@l@r@n@z@JLf@p@Zb@t@hAnAtBzAlClA~BFPd@bAP`@x@nBb@jAPd@d@pA@DJXp@xBx@vCH^Nl@\\vAPr@d@bCb@hCJj@PnA`@bDD`@@Dd@xEPtBr@pILvALvAXfDDd@`@rEBVVtCXdDDn@r@pI@ND^?JR|BfAdMd@pFLnAJjAV`CF^Hn@Jt@@@NfANv@FZBRBFX|A@F@FH^Jh@Np@Nj@?@DRr@lC@HPl@@FLb@BFFTj@fB@DJZ@Bh@`BdAxCDLLZ|BxGnDfKdCfH|@fC^hAN`@dEnLr@rB~ArE~AnEt@vB@Fx@zBBJ~BrGlBbFtAdDx@jBPZfBzD`AhBjA|B`AfBbAdB@@?@JPtCbFvE|Hn@lAvBpDVb@PZfAjB~@`BhAjBfAlBjDbGXb@Vb@pBjDR\\NTpAzBlFdJlBbDb@x@nEpHPXnCbEhAbBjC~DJPX`@FHbA|AfBlCNRX`@X`@X`@@BV`@PXV`@r@dAV`@RX^j@p@dAX`@V^@BPX^h@r@dAX`@~BlDzCrEn@`AjEtGX`@?@p@bAXb@vCnEdHnK~@tAfA`BhBpCV`@~BlDr@bA@@nAjBrChEr@dAvBbDhGhJfEnG^j@zA~BzCrERZBD~BlDpAnB~A`CFJPVV`@rCfEjBrClAhBnDnFzCrEp@`Ap@dApDpF?@jAfBdBjCp@dAX`@dBjCNTz@rAp@bAzHrLf@v@lH`Lr@dAV`@jEvGrB~CHNHJBDLR~DfGh@x@hDjFbA~AfLfQp@dAV`@hAdBbBjCdBjCvCpE|BnDX`@`@n@d@r@r@dA\\h@RXdBjClAjBFJNRV`@r@dA\\j@NTZf@HLNRp@fAz@pANTf@t@p@dAJNVb@RZ~@vAZf@`AxA~@vAZf@LPXb@@@hBtCbGbJ|AdCr@hAhAfBNTtAvBbBjCt@jAlBzCRXV`@rCjE|QhYxCrElFhIlQtXrBbD|CvEpArBFHl@~@@Bd@p@d@r@lAlBvGhKl@`A^f@pAvB`A|AdAbB\\h@`@j@PVvCnEr@dAV`@LRnE|GnCjEV`@d@t@|@vAdAhBFLjKnRNXFLR^fAnBVd@n@jAVd@p@jABDHL`@z@^r@\\p@PXNXvB~DnCdF`BxC`HlMVd@HPNVjFrJVd@j@fA~BjEz@~AtG~Lr@hApBtD`BxCd@|@dB`DjBjD^r@r@pAhAtBf@|@h@dAdAnBhAtB`LxSdHpMbAjBrCfFn@fAb@v@`A|AbA~At@hAdBfCZ^^h@|B|CZ^`HhJ^f@\\b@vCzDhAxAPVHHr@~@jA|A`BxBjA|A`ApA|@lAfAvAp@~@r@~@VZrAhB|@hArCtDv@dAlA`BdAvAr@~@fB|BNTX^z@hAlA~AjA|An@z@t@`A\\f@^d@rAdBvAnB~@lAV^rAfBh@t@Zb@r@~@r@~@v@dAnA`Bv@dATZX`@BBr@`Ap@|@@?X^JNh@t@p@x@r@bAB@~@rAnBvCf@|@DH`@p@|@~Al@jAv@fB\\t@Zz@p@jB^fA\\fAFPTp@Tv@b@`BXfAXlA\\xAR`AJh@?BLl@XzAJl@DXNbABLD^PpAJz@Hn@@FDf@\\jDNrBFn@Fn@Dn@LvAV`DZvDFn@B^t@~Ib@pFFn@JjA^rE\\`EB^NnBFn@?FbAxLb@tFRxB^lEHdAPxBFp@HbA@JD`@D`@JnAP~BR~Br@pIDn@f@bGDj@HhABT@LBf@ThC?DFn@L~AR`CH~@JjAP|B@JXhDtB~V~@pLFp@Fn@Bd@TnC\\dE@R?@PrBXlDDn@@DXrD@HLtADn@H~@b@bFj@|GFn@HdAFp@H~@B^VnCDd@@HTnCd@jF\\~DPvBfB`S\\`EBVJpAtCf\\dAnLFt@tA~O|@dKx@bJFn@d@fFp@~Hx@lJb@fFx@|IZnDDh@Fr@p@xHrBzUDf@Fl@JhAt@rI\\dEd@hFHt@\\zDz@pJH`AH~@Dn@H|@\\`Ed@fFf@xFv@zIPrB\\|D^`El@~GNnBhAjMTfCb@`FNhBVhCp@zHbAfLp@`ILnAFp@Fr@NzA?DDh@@LN~Ab@lFf@pFPhBf@xFN`BVpC\\~Db@hFBN`@tEhBrS`@|EXdDNbBFn@Fn@^~DBXf@|F`B`R\\~DDn@Dd@VnCH|@B`@N~AFn@Fh@?DN~Ab@bFDf@RtBBT`@xE`@pEp@|HFn@r@zHn@jHFj@Fp@Dr@@LBPX~CB`@BLB`@Hx@Dd@JjANdBZnDTfCt@pIDb@BPB\\@ND^B^H~@NbBj@hGf@|FVrCx@dJPtBNfBLpAN`BNrATjBJr@BLRtA^xBN|@`@pBZrAf@xBh@nB`@tAp@rB`AtCjAlD|@nCDHP`@Pf@t@|Bd@rAf@xABHL^Ph@r@vBfAfDPh@Pj@f@|AjBpF~AzETr@lDfKf@vArAxDHTVt@p@nBJVNf@n@nB\\nAVbAn@jC@FH`@Lj@ZtAd@hC@HPlABNNx@TfBNlAJlABJFn@@HH`ABRB^FbADn@BRHbBH`B\\bHBn@Dv@PnDT|DPlDTzELlCTdETvEHnB@VhBz_@HnABn@?Hj@fKbAhTHbBJjB@THfBBh@D`AB`@HxAHrBB`@HzAFnAJ|BDl@FxADn@LdCFlA@\\Dl@?HLbCTzEBb@@V@XFjAFdAJnBHfBF~@Dz@HhBVhFNnCLpCDbAB\\?@Dv@Bh@DdADz@NjCN~CJrBDv@PxDL|B?HFdAJzBBf@Dx@JhBDdAJ|A@THvBFjAP`DHrBFdAl@fMVtEXfETzCPvB@Lh@hFbBvMPxAFb@^|CNbA@DbAbIR|A\\lCXvBJx@R`BJt@DTFj@z@rGv@fGpB|Oj@dER|ANpAT|ADb@Lz@ZpBZxB\\jC@@?@^tBP`ALt@ZdBTdARfADT@?FXFXBL@HH`@HZ`@tBThAJh@Jb@Hb@F\\t@fD@Fl@zCFVz@hEVnAp@hDb@pB`A|Dp@vB`@rAj@~Az@dC@D`CtFBFl@jA^t@v@tAh@~@v@nA|@tAv@hABB^f@VZ~FnHt@~@tCpD\\`@tBlCfFpGd@j@~ApBr@|@jCdDt@~@`JbL@BNPFHBBfH|Ip@x@x@dAFHZ^h@p@hEnFhH`JZ`@jB~B`BrBnG~HnJtL"
                     },
                     "start_location" : {
                        "lat" : 43.6250296,
                        "lng" : -79.6977282
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "74.7 km",
                        "value" : 74737
                     },
                     "duration" : {
                        "text" : "41 mins",
                        "value" : 2478
                     },
                     "end_location" : {
                        "lat" : 42.4862678,
                        "lng" : -81.904016
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork to stay on \u003cb\u003eON-401 W\u003c/b\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "w{{dGptwnNlNfQn@x@x@bA~@jAjB~BpBdCx@bArAzA~@dAt@z@rAtA~@~@TTb@`@b@`@PPbA|@f@d@BBt@n@r@j@l@d@bAx@^X~@r@^\\r@f@hCpBfBnA`Ar@dDdCBBbDbChAz@vDrCd@\\dDdCrCxBrDnCfE`DlBxAjEbDdDdCvAhAJFj@b@~BfBbChB|AjAlCpBhClBJHhEbDbDdCxAfAVRDBVRDD`@X~BfBv@l@~D|CjIfGRPt@j@b@Z^XzAjApA`AbDbC^X^XpHvFbAt@bAv@bAt@pA`AfBrAnCrBh@`@^XnBxAdDdCpEhDvDrCxC|BzC|BpKbIzBbBxC|BlCpBnNnKzBbBjPbM`BnApCrBfK|HfAx@NLBDBBlAx@VPd@^ZThAx@dAx@PLzBbBd@\\d@\\rAbAnBzAxJnH~C`C\\XDBVRjHpFhQxMrJjHjDhCxDtC|DxC~BfBd@^t@n@tBdB\\\\fA`At@r@v@v@lAlAHJPPl@n@dCpC\\^b@h@`AjApAbBpAdB`AtAxCnE~@vAzA|BlJxNbZld@l@~@\\h@hAdBjAhB|@rAhTl\\bHnKj@|@rArBz@rArBbDvAzB\\h@T`@?@nApB|ChFNTvJlP|AnCjAnBfAjBVb@hAjB|AlCdAfBj@bAXd@jAnBx@rAd@x@BFRZBFdCfEhAlBnApBnCnEjClEhAhBlD`GpBfDJRXd@|@xAlDbG|CjFjD|FlDdGtA~BxBrD`BtChAfBv@tAj@`Aj@~@\\h@Zh@x@rAvA~BhAfBx@tAfAfBl@~@j@`A\\h@Zf@NTb@t@v@nAfAhBz@rA|AdCnBbDpB`D|AfCnB~CzAdCtCtEHLbBnCxA~Bj@~@b@r@d@r@T`@jJ`OXb@n@bA?@dIjMV`@Vb@f@t@hCdE@?r@jA~AfCXb@Xd@pDzFbCzDnEdHlAlB?@t@jAvIfNZj@`@j@v@pA`@p@PV`BfCtAxBJPJNv@nAZf@nApBvA|BFHjFlId@t@n@bATZjFpIjG|Jf@x@dA`BT^~AhCZd@Xd@jAjBl@~@l@~@j@~@j@|@z@tAhBtC~DpGhAfBhBtCh@x@NTFLxDdGtBhDhBrCbDfF`CvDp@fAV`@BDl@`ALPfAfBz@pAl@~@HJVb@V`@n@~@Zh@Xb@PXz@tATZn@dAn@dAv@rAV^r@jAT^V`@`F|HhAhBl@~@bDhFNTpClEbDhFp@fAhC`E`@p@`AzAf@v@`@p@HJz@tARZHLXb@PZDFVb@\\f@fAjBtBlDtA`CvJjP?@Vb@pFbJpCxEfAhBtA`CfAjBl@bAx@pAj@`Ax@vAjAnBVb@@@z@vAbBtCx@tAz@vAtA~B@@T`@p@hAtA~BHLlArBtA`Cl@`Aj@~@JNlAlBz@tAz@pAzA|BfBfCrC`EDHj@x@hD`Fr@bArBvCvGrJbAvAbLjPLPFLHH?@NT`DrElBpClAfB|@rA|@pAnAfBZb@`AvAjBlCv@jAbBbCzAxBlBnCjBlCv@jAbAvAfCrDn@~@zAxBtCdERXxFrIvMpTnNrUlD|FvBnDfNdUfBvCjB~Cj@~@fBvCz@rAj@bApAtBNVhAjBt@nAjAnB~EdI|DtGT`@DDP\\DD|BxDdAdBNTl@bArBfDtCtEPZpD`GnAvBxBpD`A~Ap@fAVb@FHn@hAb@t@hDpF~DnGdGnJbA~AvCtEjJ~NR\\NTn@bAh@|@j@|@\\l@LR\\f@^l@j@`A\\h@h@|@^l@j@~@j@`Aj@|@l@`Aj@`AZd@NVj@`Al@`Ax@rAj@|@n@dAh@z@\\j@l@bAj@~@h@z@^l@l@`Ah@|@l@bAj@|@\\h@Zh@NVj@z@j@~@j@`A\\h@\\j@^l@h@|@\\h@^j@DHVb@LRj@~@jAlBh@z@l@`Aj@~@z@tA^l@h@|@j@|@^l@\\j@Zh@^j@Xd@z@vAl@`AhAhBl@`AhAhBj@~@x@tA^l@j@|@\\n@j@|@\\j@b@r@bFlIvA~BHLlB`DtA|BxC~EdJfO`@p@pAxBV^xAbCv@rArCvElB~ClB|CjClE@@T`@@@fAhBr@jAjI`N~EdIpAtBVb@|@vApAxB`HbL|@xAhIbNpApBlB`DbAdB~CdFxC~Ej@`AnB`DxC~ElIdNj@~@dCbEhEbH|@xArAxBR\\v@nAbC~DJPlArBT\\x@rAt@lApD`Gf@z@tBjDJNvA~BPXn@fAb@p@|DrGf@v@PZ@@xAbCnAtBR\\Xb@\\j@h@~@fAdBp@hAb@p@Vb@dBtCl@~@xDlGn@bAXd@LRb@r@Vd@Xb@j@~@~AlCb@p@x@xAh@bA\\p@Tb@NXJXZt@b@|@Xn@h@vA^dAZz@Vx@f@zAV~@Rt@^tAb@hBp@bD\\hBTpANfADTLx@TlBLhABPHv@Fr@JlAJvAL|ADf@f@vG^pELjBFn@b@zFT`Dp@vIx@hKJvArAzPHdANnBXxDP`CLvA@NR`CRrBRfB`@rCPpATpAf@jCf@~BNl@H\\Lh@\\pAr@dC\\dADP^fA^bAb@hAf@nAh@nA^z@FJXn@b@x@j@fA`@t@f@|@jAlBxA|Bb@t@hAhB?@vCzE`BlCf@x@~@|Az@tAbC`Ej@|@p@fAR\\BDT`@dAdBDD^n@xBnD`BlCj@`APV\\j@f@x@j@`AhCbEBHbA~Ap@hAV`@d@v@Zd@^n@p@bAhChEXd@R\\b@p@T`@|CbFtBjDZf@x@rABBvA`CXd@vAxBd@v@d@v@LPtA|BR\\jDxF`A~ALRzBrDZf@?@b@p@r@jAj@~@fAfB^p@j@|@Xh@\\h@Vb@`@n@xA`CBBrAzB|KvQjHpLz@vAV`@b@p@fAjBdC`E~I|NPV|BvDr@jAzE|HdAbBlB~C`FfI~@zA|CdFrAxBT\\Zj@Zf@l@`ALT^p@n@hATd@HN`@x@j@pAx@jBf@rAf@tAd@pAt@dC@B`@xAn@dCj@bCh@hC`@hCF^Lr@RxA^~CN~AThCDb@JfBL`CFvBFvBDbC@rB?pBC~BCnACfAElAIdCEz@KfBW~EE`Ao@zLy@`P]|Gi@fKSxDIlBALGdCC~ACpB?bA?d@?H?j@?|ABrADtBFnBHjBNfCLfBNlBHx@Ht@P~AZfCd@xCPfAh@jCXrA^`B`AnD\\lAL^~@rCn@dBTj@j@rAh@nAr@xAx@|AXf@FLDHpAvBz@vAdDlFrBfDrAxBvErHzAdCfAhBdIrMjBzChDrF`J|Np]`k@hAhBx@rAhAhBNVFJNVbLzQVb@FJbUx^dFjIhAhBh@z@jDvFPV^l@BFRZb@p@hAjBhAhBvBjDZf@bEzGV^@BNVnOtV`BlCXb@t@lAj@~@`BlCFHXd@nArBnApB~@zAz@|AVd@`AhBXj@h@lAh@lAd@hAd@lA`@jATp@\\fAVp@ZhATx@Pp@Rv@Np@J`@Lh@H^TjANx@\\jBLt@PrALt@PrANrALpAD\\RpBZfDZfD|B`Vf@dF|@dJt@vHd@bFd@|E\\jDd@`Fr@pH\\jDRpBPlBHv@Jx@TlB^fCZrB\\hB`@hBJd@x@jDZlARp@JZ\\hA^hATp@Vr@j@zAXr@j@tA^t@d@`At@zAZl@dAlBbAhB`BxC~FlKlBjDv@xAjCxEjCxEbEpH`@r@Vf@`H`MbAlBfAnBrNhWxOhYpKpR`AdBjCzEzB`EfAlBxCpFvEpIdBzChHrM|BdEnPfZfApBdAhBt@tAdErHpBpDt@rAx@xAHPj@`ArEjIDH|@~An@jAxB|DpA~B`BxCDDTd@^n@d@z@FJn@hAtDzGtBvDhBdDVb@JRbJjP`HjLlGpKV`@`@p@hAlBj@`AvFnJtA`CvBnDpCxEfAjBvA`ChXpd@Vb@zJtPtBlDrAzB`BnCpJbPrBpDTh@l@nAXl@bA|BRj@Vr@N`@Pb@HXVr@h@bBNb@^nAPt@V|@Nr@HXVhA^fBFXLp@XdBPfAJp@RzANjAHn@Hz@HdAN|AF~@JtAJtA`@zFLpBLhBr@xKHdAJvAPnCBTP~BNrB`AtNj@pIJzALlBjC``@^|FFx@VtDFl@HlAFdAPjCR|BHnAJdAVbCR~APtARpAb@dCj@tCThA`@bB"
                     },
                     "start_location" : {
                        "lat" : 42.9101969,
                        "lng" : -81.2271343
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 820
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 42.4839568,
                        "lng" : -81.91302619999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e109\u003c/b\u003e toward \u003cb\u003eVictoria Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChatham-Kent County Rd 17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChatham-Kent County Rd 21\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 21\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ebibGb{{rNBXDVVfAb@~Ad@zAd@vAdArCBFNb@d@xAJXDPT~@PdADr@?|@C`AG~@Cf@MdBO`D?h@@`@D\\F\\Nf@N^R^^j@@BbAjB"
                     },
                     "start_location" : {
                        "lat" : 42.4862678,
                        "lng" : -81.904016
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26.3 km",
                        "value" : 26335
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1157
                     },
                     "end_location" : {
                        "lat" : 42.5737742,
                        "lng" : -82.172365
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eVictoria Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChatham-Kent County Rd 17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChatham-Kent County Rd 21\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 21\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Chatham-Kent County Rd 21\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wshbGls}rNy@dAaBxBaAtAW\\UZq@~@w@dAA@}@lAa@h@EFY^]d@_@h@W\\SVmD~EsHjKaAtAs@~@k@z@OPa@n@g@t@oCvDA@oAfBeFhHoEjGiFnHcCfDa@`@UX]b@_ApAkBjCqFxH{CfEgCnDSXiO|SABY\\kFjHaGdImE~F{@hAY^{MlQmO|SeGlI[`@gFfH{H|J_C~CqD~EmBhCyC~D}@nAcB~BgCnDsBnCiA|Ai@n@]\\e@`@WTo@`@[Pe@Te@P]Hi@Lu@Li@Fg@Dc@Bc@BmBLyAFuAFeAFs@Bc@Bq@DkAFqAFgAD}AHE?u@Dq@De@Bk@BmBJ{AHc@@}@Fa@@iKh@o_@jBc@BeQz@WBSBC@OBOB[Fc@JQF[JUJUHQJYPe@XQLIFSPQNQPUTUXORSV{@rACDcA`B[l@Q^uAxCe@lAs@`BEHm@xAOZYp@O\\Wn@e@hAe@fA[p@IP_@r@S^k@~@i@v@[d@]b@GJq@`As@`Am@v@[`@aArAwAnBoAbBA@a@j@{B|CORs@`AqAdB_DnEyD~EkBhCaCbDu@`Ak@t@a@j@y@pASh@Od@K`@Ib@Gd@In@C`@Cj@ElAEt@EZC\\EZE\\IZSl@i@jAo@z@aBzBs@|@k@v@}AvBw@dAy@hAyAlBm@x@c@h@QVQTi@t@aC`DcO`SiAvAmAzAiAxAwAlBeAxA}@hAy@lAmA`BaApAsAjBmAbBe@n@a@t@Wf@[v@YbAo@`CMl@a@zAo@nC]lACJSz@O`AKj@Kr@Ej@Ep@AdAA|A?hF?dD@hC?~B?pB?rB?fB?~A?hB?LAxB?jB?jA?`@?lA?f@AdAAbBCjAEnEIlGC~BAvAQtOEjDAjA?n@ATQrOCpDAn@EzCC~BEzC?BEjDA~ACjAEhEAt@CdDE~DC`BAnAMlME`FQ`OC|CCjCAXIzHWrVKnKMtLOxOA~@e@nc@WpXGlEKfLAn@KdK?XKhJS|R?DG~GC~AAn@EdEEhFIlHEpEGlFObPGtF?^KtIInJGhGa@|a@GvGAp@KtJGtHAn@K|K[f[?`@GpEGbHKhKo@lq@EpEKfKIdKErEOfOYx[GlIe@hg@YbZCpCErFIbHQjTAn@Ap@?RAZQxOM`LCtBEbHGtFEvG[f[GdFCbCAVC|AAVEl@?FCTCTCPCHAFAJGRGVK^Yz@"
                     },
                     "start_location" : {
                        "lat" : 42.4839568,
                        "lng" : -81.91302619999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "17.1 km",
                        "value" : 17065
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 748
                     },
                     "end_location" : {
                        "lat" : 42.5800027,
                        "lng" : -82.380414
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBase Line\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eChatham-Kent County Rd 15\u003c/b\u003e (signs for \u003cb\u003eCounty Road 15\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWallaceburg\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "aezbGfhptNb@n@JZHXD\\BZ?ZMlKIjIKfKGbHa@rc@c@`f@_@|[IdKWlZ]bc@[l\\MnOKvOAx@U`TQtO]`_@w@~}@a@di@SxRg@de@]n]YpXc@hYEvGGbN?jAM|NGbHIjJc@n]c@x_@uDluCo@fq@aBd|AOnLy@pw@UjTe@pc@I|IKvIItIiAbjAC`BIzIKlIId@GnBEpD"
                     },
                     "start_location" : {
                        "lat" : 42.5737742,
                        "lng" : -82.172365
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 243
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 42.5821891,
                        "lng" : -82.38036330000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMurray St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-40 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_l{bGp|xuNW?cBA{BAkBAqAC"
                     },
                     "start_location" : {
                        "lat" : 42.5800027,
                        "lng" : -82.380414
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1124
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 106
                     },
                     "end_location" : {
                        "lat" : 42.5910156,
                        "lng" : -82.3868332
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMcNaughton Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-40 N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uy{bGf|xuNi@fB[`@KJGDIFEByIdFqDpBaE`CqC`BcCxAuAv@uAx@a@VqAp@yFlD}BdB"
                     },
                     "start_location" : {
                        "lat" : 42.5821891,
                        "lng" : -82.38036330000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 236
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 42.5928096,
                        "lng" : -82.3883249
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eMcNaughton Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-40 N\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "{p}bGtdzuN_@^]Z[Z{@v@]ZqAlAc@\\SFg@H"
                     },
                     "start_location" : {
                        "lat" : 42.5910156,
                        "lng" : -82.3868332
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3702
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 252
                     },
                     "end_location" : {
                        "lat" : 42.5937326,
                        "lng" : -82.43352779999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDufferin Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-40 N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a|}bG~mzuNCxCIlIAbAErGGrIE~IC|ECv@A~@?ZAlAAt@BtF?^I|ACjEAtACjJKrRIpKEhFCpEM|UEpEIjOC~DErFAtBCpC?z@AvBQr`@GjQCpD?p@E`C?fAAhA"
                     },
                     "start_location" : {
                        "lat" : 42.5928096,
                        "lng" : -82.3883249
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.8 km",
                        "value" : 3848
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 239
                     },
                     "end_location" : {
                        "lat" : 42.5904149,
                        "lng" : -82.4788248
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eDufferin Ave\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ya~bGphcvNCrFAn@OnZEhJAnBCnA?rBCtFIrNUpa@ElKOhZEvFCtDa@ns@CdDD|ADt@Bl@Df@Hn@Fj@Lv@F\\HXFVFVLd@N`@L^BHHR^z@@@Rb@LZDJVd@P^BDNZDHVh@Rb@DHN\\BFN\\BD`@bAFBDLp@rAZp@N\\t@~AJRlBbEVj@Vl@BDVp@N`@Nf@"
                     },
                     "start_location" : {
                        "lat" : 42.5937326,
                        "lng" : -82.43352779999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.9 km",
                        "value" : 3944
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 241
                     },
                     "end_location" : {
                        "lat" : 42.606963,
                        "lng" : -82.5195116
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTecumseh Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 32\u003c/b\u003e",
                     "polyline" : {
                        "points" : "am}bGrclvNVdARdANt@Hr@Hr@Dj@Bh@Bf@Bj@@v@?b@?ZAf@Ah@Af@C`@C\\Gl@Gl@Eb@If@[pB}ApJa@hCmChPwEpYeAnGg@~C{@fFi@hDo@rDOp@EPENGPGNMVa@x@_CfEsBxDWb@Wd@kC|EqElIWb@iFrJw@rAkAzB_@r@w@vA{BdEGHe@z@g@~@a@v@{@|A_AbBU`@cEtHe@z@kC~EINmC~E{@zAUd@Yf@m@fAUb@s@pAsBxDu@tA_AdB"
                     },
                     "start_location" : {
                        "lat" : 42.5904149,
                        "lng" : -82.4788248
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 989
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 75
                     },
                     "end_location" : {
                        "lat" : 42.615041,
                        "lng" : -82.514579
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiver Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ot`cG|atvNwIcEeEoBqG{CeDiAkDiAICoDeCAAiEwDgAq@"
                     },
                     "start_location" : {
                        "lat" : 42.606963,
                        "lng" : -82.5195116
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "30 m",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 42.615127,
                        "lng" : -82.514922
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAustin Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_gbcGbcsvNQbA"
                     },
                     "start_location" : {
                        "lat" : 42.615041,
                        "lng" : -82.514579
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1305
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1388
                     },
                     "end_location" : {
                        "lat" : 42.6187402,
                        "lng" : -82.53000829999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eAlgonac - Walpole Island\u003c/b\u003e ferry to Algonac\u003cdiv style=\"font-size:0.9em\"\u003eEntering the United States of America (Michigan)\u003c/div\u003e",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "qgbcGfesvNwHhZ{BnPsCt]mApK{@fE"
                     },
                     "start_location" : {
                        "lat" : 42.615127,
                        "lng" : -82.514922
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "65 m",
                        "value" : 65
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 42.61864,
                        "lng" : -82.5306961
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "c~bcGpcvvNI^AH?D?D@B@BBFRVBB@B?@?FAX"
                     },
                     "start_location" : {
                        "lat" : 42.6187402,
                        "lng" : -82.53000829999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 679
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 121
                     },
                     "end_location" : {
                        "lat" : 42.613603,
                        "lng" : -82.5353159
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSt Clair River Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "o}bcGzgvvNZTp@h@r@f@fBpAvGbFjCrB~AxA`B|A`BhBRXLXDFTj@"
                     },
                     "start_location" : {
                        "lat" : 42.61864,
                        "lng" : -82.5306961
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "21.7 km",
                        "value" : 21672
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1125
                     },
                     "end_location" : {
                        "lat" : 42.681156,
                        "lng" : -82.73685519999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eM-29 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDyke Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePointe Tremble Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow M-29 S\u003c/div\u003e",
                     "polyline" : {
                        "points" : "_~acGvdwvNPp@DXD^Df@@h@?N@ZAVAXMjAMpAK`AWtBY`CGd@ATMjAIx@Iv@OvAc@vDGl@YfCQ~AGn@Kx@KfA_@jDStBKx@G`@Gb@I^Kb@I\\Qj@M`@KVOZSb@q@tAc@x@Wd@KVEHO`@K^Mf@Id@Gb@CT?@CVUpCAFSdCKjAM`BIdA[vDC\\Q|BM~AKrAUhCQrBOhBSlB_@`DM~@g@xCc@dC_@tBId@Y|Ai@`DeA|FcArGUpAWbAWx@c@hAm@xAq@hB]~AE\\Mn@Gb@Gp@g@pFi@xFi@lGcA~KUrCa@zEIz@C^I`Am@`HAFIbAI`AMbBO`BG~@Gl@Gn@Gz@SdCCRSxB[nFYfDC`@Gh@MtAi@tD[|BM~@e@bD_@rCYtBg@jDu@~FgEjZa@hCeAzH_DjUqAfJYlBO`Am@xDa@lCi@pD{@nG}BrPKn@Ih@_@~ASt@Qj@M^MZ_@~@Sd@Ub@Yh@c@p@eAzAm@n@SRiA`AeAx@SL_@PSHYPSHWHUHiAZc@Hu@JiBN{Fb@mFb@sCPsGf@kNbAq@DygAbI{ALc@DaEXoKt@kDVuBPuDVkBNmAH}CVqAHUBuDViCPgCR{BPoBNc@BoHf@kE\\c@DoCReHf@cBNWBg@HSFUHSFULQHWNOHKFOJURSNQRMNQN_@h@U`@OTGNQZITGLOb@Y`AKb@Uz@gCxJWfAGJyAnFa@hBa@bBUnAEZAHIj@QlAIp@K|@YhCAb@OxAk@bF[zCWdCa@fEYzCE`@C`@Er@Ch@A`@AV?^?d@A\\AxH?`DAfA?r@Av@Cx@CfACr@Ep@Ej@C`@E`@Ed@I`AGh@Mx@Kr@Kr@WbBi@fDs@tEs@jEm@|Dk@rDq@~Dm@zDUvAa@dCiBtKsAzHeAtGu@vEQz@}@tFObA_@dB]rAiBpGUx@mAhEe@zAOh@Ql@Wp@GRYr@e@fAiCpFeClFw@dB{FfNwAjDy@nBiApCUf@a@bASf@O^e@pAcAvCk@fBW|@Wz@ABc@~AYfAc@fBy@hDWdAUhAUbAGZKd@[dB]vBc@lCSlAYjBSnAGj@Ip@I`AMlBMfCIrAE|@MvBCb@Ej@GhAEx@Ez@C~@AfABnA@`CB~@@hA@l@B~ABrADjCFjE?N@n@BjAF~BBf@HhCH`CLdCVbGRdDJnALbBRtB`@pDFn@\\pCNjA?@^jCLtA`@nC~@`HR|AHn@NdAd@lDDXBPr@dEXbBdAbGhBfKTxALtAJvAJjBDr@HhANrCJlBLdBARVvFBl@DxA?hBAp@Cn@Eh@ARI~@OjBA\\WbBiA|HSrASzAOzAE|@AtABv@Bv@Fn@Hx@F`@BL?D@F@JJ^Lh@J\\Nb@HRP`@b@|@~B~DNVXb@d@x@@@DBF@dGdKhBzCfChElCnElAtBx@rA`A`BhAnB"
                     },
                     "start_location" : {
                        "lat" : 42.613603,
                        "lng" : -82.5353159
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.2 km",
                        "value" : 4238
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 272
                     },
                     "end_location" : {
                        "lat" : 42.7074413,
                        "lng" : -82.7740323
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWashington St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gdocGjp~wNq@~@_AhA]b@y@fAeB~Bk@v@}K`OiAxAgChDy@fAwDdFm@v@]b@a@j@y@fA_@f@sEdG}@lAq@|@mDzE}ApBQTu@`Aw@dA[^ORQTmAbB[`@GHQTs@`Au@`Am@x@iBbCY`@w@fAUXm@|@U`@INGNQ^ABe@hAi@rAk@tAeBlEy@pBe@lAu@jBk@rAyBpFc@fAYt@m@xAw@lBc@fAwApDUf@eEbKSd@m@vASf@eAtBS`@KN_@p@[b@q@~@mDtEqCpDMP[^}AtBaC|CQTY`@W`@qA~AmA|AiB`CoA`BY^QVGHu@`AED"
                     },
                     "start_location" : {
                        "lat" : 42.681156,
                        "lng" : -82.73685519999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 42.7083406,
                        "lng" : -82.7751591
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eM-19 N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ohtcGtxexNgAxAkBfC"
                     },
                     "start_location" : {
                        "lat" : 42.7074413,
                        "lng" : -82.7740323
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "53.4 km",
                        "value" : 53422
                     },
                     "duration" : {
                        "text" : "30 mins",
                        "value" : 1796
                     },
                     "end_location" : {
                        "lat" : 42.3514345,
                        "lng" : -83.09538739999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eI-94 W\u003c/b\u003e toward \u003cb\u003eDetroit\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "cntcGv_fxNDFJNJPNVb@h@TVRPXRXNb@LXDh@Fb@Df@D`@DPBj@Pd@Pj@\\RLHHNNNLLPl@v@jAhB^j@l@|@^VjAhBLPBDFHbAzAT\\@B|E~GdAxAX`@BBLPd@p@LNdFhHtC~DzAvB`BzBbDpEd@r@hBdChA`BjBjCxBzCzDpF|AxBvCdE`CdDrBtCb@l@xKlODDNTBBDHNTt@dAp@~@hBhCvAvBb@p@h@z@f@v@\\h@jAnBb@t@Vb@JPlAtBl@jAp@hAhAvBVd@Vf@t@tAnDzGn@hApD|Gb@x@b@x@|AtCh@bANXvAjCTb@tAhCtBzD`CnEtEvIXf@b@x@lBpDt@rAn@jAP\\R^l@hAb@z@f@~@j@bALTnBtDR^pBtDbApBpA~Bb@r@Xd@`@r@j@~@x@pAx@jAtBzBz@t@PPZT|@l@~@l@~@f@vDnBbAf@rAr@tGjDvFtCZNtBfAd@VjDhBhCpAfDfBbCnAfCrApIjExDpBhIfEhKnF@@jO|Ht@^dExB~KzFFB`Af@~@f@v@^LHvAt@xAt@tBfAhDhBhIfEjO~HhCpAdCpA|KvFlBbAxAv@x@`@dAj@rAr@v@`@l@\\LFnAl@dAj@pBdAfB|@`G|Cz@b@r@^HDJDTJJFn@ZzAv@zBjAbCnAt@`@fIfEt@`@VLn@ZvBhAJDdCpAZPd@ThCpA|@f@pCtAvCvAzAf@fBl@z@Vx@R|A^hATrARr@JfALl@Hn@Bn@F~AH`DJjFN`EHtDLnCHrBFj@@bBFhDH^?^@rCH@?hBFz@B|@Dl@@zBHdADH?\\@~@BtAD|@Bl@Bf@@bELxDHdBFzDJpDJvBF`CHf@@H?lBF|ADpELrCHjBD|AFZ@lCHF?Z@H@X@bEJhELN@hEJdFLhDHpADdCJhFNhCFn@@dBDbAB~@Bb@@|@B`FLzBDx@BnDHfGLxELb@@~GNjBDF?p@@\\@R@p@@|@DrDJfABb@Bb@@b@@fABjBFzAD~CHt@B@?b@@lABZ@jBFnBFnBFzDHdBFjADd@@pADV?tCJxCJhHPv@BrDJ`@@h@@hDJ`IVrENV?h@@N?r@Bd@@\\BZ?V?fBHb@Bl@FXD~@R\\Jl@Rp@TnAp@`Ap@NJVTRRZVRRHJJJRVTXRXTZv@rARb@j@tAN\\L`@L^J^FTDNPr@Hb@Nt@RzALnAHrAFxABfB@t@@tB?|A?n@@vBDzGBnE?N?t@BlA?BBn@Dx@@VDd@BZBTFf@Fd@@HLr@RdANr@Nj@Tt@Rj@Pf@Pb@Rd@N\\Zl@R^TZR\\RVPTRVVXRTRRFDLNVRVRv@h@j@`@ZRb@XpFrDPLdAp@h@\\^V~B|A|AbAzAbA^TlBpAPJ\\TFD^TRNh@\\PL^V@@JF|BzAp@b@LHFDn@b@ZRHFFDVPZRl@`@XPTNVTVPFFFFDBTTRTTTNPDDRVPTRXR\\V^LTN\\P\\N\\N^L\\HPPh@L`@DLFPH^BJHVH`@Hb@F\\Hb@BV@FFb@D`@Df@D^Bd@Bb@Bv@@P@f@?`@?f@JtLD`FB`FJ`N@fABd@@b@Bd@Dd@Bb@Dd@D`@Fb@BPBLFb@Hb@H`@J`@H`@J`@J^Lb@L\\L\\L^P\\N\\P^b@v@PZNTBDRVPVHLHJVZRRVVj@j@RPVPVPXPTPXNXPVNVNVN`@T`B`A^RDBZRxBnA~G|D`@VbAj@fAp@XNr@d@~A`AdAl@x@h@JFpAt@l@ZZPTNJFLHJHHDn@`@r@d@bAt@RN\\VRNpAfANNn@n@fAbAf@h@@@PRf@j@Z\\f@n@`@h@RVRVbApAn@v@j@v@zAnBX^`AlAp@dA^l@PXDHn@hAP\\hAbCJT`@~@P\\Pb@NZP`@b@~@DHHN@@V`@NVRXX^NRTV`AdARNLJLJRNVRRJNJPJTL^PZNJDPFNFPD`@Lx@Pr@Lf@Db@DP@X@`@?^?`@Ad@?z@CZA\\?v@Ap@ANAt@Ad@AjDGP?jAAFAp@AtACxACpCE|@AvBEh@Aj@Az@Cf@AR?vBEb@?XAtBEr@AH?B?xBEzBEJ?V?hACH?\\AlBCj@CX?z@C\\?L?ZAnCEvBEjHMn@A`BCvAC`BCfBEjACV?H?^Cj@?f@Ah@Cf@Cv@EtAMHAlAQXE~AWhCa@t@Kt@KB?TCTCnAGt@E~@C|FGv@AD?b@CnAAbA?@?l@?b@?nADdA@zAFjERJ?L@nCLhAFdADb@BH?X@fAFnERD?XDn@@f@?Z?L@L?L?TAR?NAl@Cp@Cb@CTCJEv@Gt@IvBYFANCrCa@`BWd@GD?BAZC@AF?VC@?b@Ed@ETANARABAH?D?j@Ab@Av@Cd@?dBC`BCr@CN?x@A@?^?N?bCE`@At@A`AAtEGB?f@?f@An@@N?N?L@L?ZBl@Dh@Dh@Hr@LZFZFLBXH^J^LXHXLZLJDZLVL^RZPf@XxEjCHDDBp@^lBfADBLHdB|@zAz@p@^v@b@dCvAh@ZHDD@@BHDnBfA^RBB@?XPHDVNd@VZNZPFDPHFB@?LHPF@?\\Pr@Xv@Xp@Tt@VJBDBtAb@^LPDzBt@~@ZhA^bBj@r@Tl@Tj@Pz@Xj@PRFPF\\JTDXFXF^DXDP@\\B\\@Z@Z?Z?ZAVAVCRAHABARARCNERCXGVGXIb@Mj@S@CRINGJENI\\SZQ`@YZW`@[d@c@h@k@X]\\e@d@q@d@u@R_@?ATe@h@cAl@kAFQN[`@s@Tc@t@{Ar@yAJQ@AFOP[NWV_@BEZc@NQRUNQZ[TS\\[XU\\UZULGZQd@Ub@Qd@QZKREPEREZGVCREXCTAn@Eb@?N?`@AR@R@T@R@R@RBRBVDPB\\Fd@Jt@Rr@PB@x@TbDx@d@L@?D@B@B@j@NVHzBl@rCv@vF~Ad@NJBv@V|Bt@lA`@^NNFb@LtDpAjEvA~Ah@\\LrAb@vAf@JDjA`@~@ZvAf@tAd@PFx@Vb@Nn@VrAj@RHd@RNHB@ZPv@`@@?nDlBbDbB|@d@^Rf@Xr@\\|@f@jCtA^RNHpAt@RJx@f@zBxAJFPLdAt@zAfANJ|AdAt@h@b@ZhCjBx@l@FDLHDBx@l@LJl@b@nFzDlA|@zAhAJH^Xl@`@\\XXT^X\\Xj@h@r@r@NNPPNRRRVZV\\X^l@z@b@p@LRLTRXhAvBRZZp@HR`@z@nAbDN\\Xr@Rh@Zr@Vh@HRBFP^Vf@Rb@T`@NXTb@PZNVNXT^HN^j@f@t@BDFHFJ|A|BX^HLd@p@fA~ApAlBZb@nBpCx@lAx@lAFHfA~AZd@Zd@vChEBDV^DF`@l@~@rAz@lAzAzBNRjBpCf@r@j@z@V`@DDh@~@d@~@`@x@BFRd@Pd@L\\\\`ANd@V~@JZDLLh@ThAPx@N|@Hb@Lv@T|AF`@RxA?B@FPfA~@pFLh@\\fBPv@?B@FJb@XnARz@r@lDd@tB^jBVpA@@?BLj@@F~@lEh@fC\\~AhBrIZxABLd@lCn@nDPhAFb@Jj@Hh@Jn@J~@VxAXdBp@fEBHJl@@J?@h@fD`@lCT|AJn@\\fC@BJt@ZpB`AtGDXJl@Jl@Lv@b@|BPbADVZzA|@nEBN~@xE@FLl@Ll@XxALl@Jj@d@~BTdAb@zBTlA@FJd@^dBNp@|@~C@D?@Pd@r@nBBHJXXl@R`@NZVh@BFLR\\l@p@dATZ@BDD@BbAxAr@dAT\\j@z@PVJLNTtBzCpAnB`@j@FJZf@b@~@~ArDFPN`@Tl@HZ?@HVXfATdAH^Jj@RfADZLx@L|@Hx@Fr@BPDf@BZD`ADnA@X@\\@p@@dA?hCCbD?zCAl@@jA?B@fABhA@^@\\D`A@l@Dx@HxAH|AX~CFl@\\fDJr@F\\ZvBVzAH\\PbAR|@Pr@ZlAHb@x@tC|@|Cz@pCDPRr@FPdAlDbCjI@DJZlCdJFRHXDJn@vBZfATz@x@pCx@pCBHTx@j@nB\\tA@?XpA?DR`ALl@\\pBR|ARbBBPFj@Hv@b@lDX|BX`C?HDXFh@RbB@BDb@ThBN`AJh@Jf@Jd@Ld@DH?@J\\Rf@Pf@Xr@P`@JTLRTd@R^V^@BNTZb@b@f@b@d@l@j@^ZLLx@f@t@d@`@Vj@\\RNB@FD`BdA@@p@h@\\ZjAhAb@d@pAhBJPV^Zl@P\\Tf@Pd@Xn@@@?BFN?@\\`AHV|@`D`ArD~AlG?@@@b@dBlArE~@hD?@Rt@ZhABJFZxCjLjDrMLh@@@?@Nh@^vATbA@?|@hD|@hDHXd@lBDRRv@BHH`@J^X~@J\\d@xAJThAxCTl@h@jAJVTd@@@Xn@Vh@NVT`@Xj@LTlAvBXd@~AtCLT@B@@NTJP^n@LTdAjBf@z@f@`Af@|@d@z@Xl@FJDLb@~@j@tANZXv@@??@?@f@~ANf@z@lCBLVz@z@xCFTt@dCh@fBpBzGVx@LZvAxDPf@nDlJ?@Vl@l@xA`A`Ct@zA^t@pBvDdAnBfAfCXp@`ClFJRDJFJ@BHJ`@v@`@x@T`@FJDH\\l@b@z@`@v@Xf@^r@FJT^^t@HNNX@?JRd@|@LVXd@R^LTJPLPHLf@t@T\\BD?@nAfBVd@RZz@pAj@`AXb@Vh@LVl@tARb@Vp@Vv@Vv@Pn@Pt@DRRx@Nl@\\~AVnAF\\R`A~@fE\\zAXrANr@Pz@BHj@jCLj@|@fET~@Nr@`@lBvAvGhBlId@vBH\\Jf@h@`C"
                     },
                     "start_location" : {
                        "lat" : 42.7083406,
                        "lng" : -82.7751591
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.3 km",
                        "value" : 4255
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 168
                     },
                     "end_location" : {
                        "lat" : 42.3196359,
                        "lng" : -83.08254649999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e213B\u003c/b\u003e to merge onto \u003cb\u003eI-96 E\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "mwnaGdqdzNAR@FBPHd@Hd@Jh@FX?@BTHj@B`@Dh@Bd@?x@?DAh@CVCXGVGVGVWr@G^CTCPAN?NA@@R?N?B@RBLBPDRFRDFFNHL@@LPNLBBTL\\HXBTAREHAd@UNMZYNMj@g@nAkALKRQbA}@h@e@NMRMx@{@DEBCFE\\a@HGLOTOVSf@]\\SHGj@Y~@g@b@UZQ@AH_@pAm@VMr@_@\\Sj@YPIh@Y|@c@^U^OTMFCXM^QrCwAj@[|@c@\\O@AJELGl@YjAk@TMFCtBcAZUxCyAl@[p@]NI`Ae@?AZO~Aw@FC|Aw@DADCbBy@z@c@VMLGJGLIDCFEPKDELIXSBAVQ@AZUHGz@s@XSBCZUXOb@[XUpAcAVUNKVSXSjA_ANMFEz@o@VSb@[j@a@\\SlAi@dC_ARC`@ILCXCx@MJAFAlBWLALCbAO|AWZITGZIf@S\\MJEbAi@|@g@zBoAp@[vAs@fDeBfD_BbAc@HGd@Q\\O^MPGLEh@O`@M`@K`AS\\INEd@Kf@MHCPEl@Kf@Ox@Ux@QNEREVELCNADARANANAVATA\\Ch@A"
                     },
                     "start_location" : {
                        "lat" : 42.3514345,
                        "lng" : -83.09538739999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "87.5 km",
                        "value" : 87461
                     },
                     "duration" : {
                        "text" : "48 mins",
                        "value" : 2874
                     },
                     "end_location" : {
                        "lat" : 41.6859936,
                        "lng" : -83.5673468
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eI-75 S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Ohio\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "wphaG|`bzNb@BjAPb@JNFj@Nb@Nj@TZNt@`@PFJFXPh@`@l@h@`AfANRDFZf@T^FHXf@Xj@\\p@Xv@Tn@Xv@^nA?@Lb@HX^nAPn@Pj@J^b@~ADLZhAPh@?@Nf@Nd@r@dCPj@`@tADL?@@DHV?@@BJ\\?@Rl@Jh@DPFRZbAj@lBTx@Tv@DP@DX~@ZnADLBJDJBHHRFXRr@J^@BDNTz@Lb@ZfA\\jAb@zAJ\\Rl@FTlAdEzArEx@vBd@jA^z@FNBFBDDH|FhM?@Xl@h@lATf@^x@@@^v@tA~Cj@|Af@zAx@tC@?Nf@?@bAjDp@xBX|@FVzAhFdAfD@B@HZfA|@vCf@dBDNL`@FTb@xAFPLh@?BL^Vz@Pn@JZV|@d@`BHZBBBBBHHX\\hAn@rBBJl@rBHX`BrFRp@HXBHNh@Vz@HRPj@\\bARj@h@dA`@r@f@|@X`@NT|BnCzAhB`AfA~@fAFH@?fApAtBzBTTDF@?HHHHFFJJJJDBHJHFJHXV@?RPRLHHNJHFVPnBjAbE~Br@`@~@l@j@Z~Ax@@?~Ax@f@Xv@`@bAt@j@f@XV|@hAJLl@hAj@jAf@nARh@@B@DRh@Z|@FLHZ@BNf@@DV|@ZbAJ^HRDLNf@\\hANh@Pj@Xz@HZJXL`@ZfAL`@Vx@Pf@|@rCTt@Ph@^lAn@fBFVNd@L`@HVFT^tAPf@`@rATx@Vx@l@lB^fA?@Tt@BF^jAPh@b@rAd@zAX|@BJ\\hA\\pANh@FNV~@Pp@BHPf@HZJXh@bB\\dARf@p@dBHPJT\\p@Vh@HP\\j@NRZb@X`@b@l@NRd@l@n@r@\\`@`@`@j@h@TPZX~AlAXTBB`@ZPNf@`@@@^X\\XPLPNNP@?NRLHRRJLJJHHFHHJHJJNLNFDFJRXPXZj@R^DJJTXr@Th@FXPf@Nd@BHz@rDbAlEBNPr@Rv@Jd@ZvAd@rBFRH^Nn@Pj@Pn@Pd@Xv@`@`ATf@LT@@R`@R^T\\j@z@lA~AZZj@h@p@n@f@`@hBvADBbBpA^ZXTpCxBJJXTpAdA`@ZXVlA`AdAx@lCvBb@^PLLLPNpH`GJHRNl@f@f@`@TTb@f@RRFFh@r@PR^l@Zh@h@`At@|AZp@Vp@Tp@p@zB@DX`Af@dB`AjDv@jCjAdEBHNh@J\\Pd@Tp@@BRb@`@z@b@x@`@r@HPJLp@~@NP^d@`@d@h@h@VV`@^z@t@XTLJxC|BDDp@f@hAz@XR@BpB~AVRNL~ApANNp@f@`HpFxC|BnAbAh@`@h@`@vBdBdAx@z@p@|ApAf@^TP`@ZXVl@f@n@j@fA`A~@|@FFlApA@?~@dAv@|@rA`B|@hA`DjEr@z@b@f@BBx@dAbBvBt@|@h@p@h@l@f@f@l@n@fAfAp@j@lCzBRLzAlAHH@@LHZTHH`@\\TPXRXX`@\\vAtANNVT@Bj@h@Z\\RTjA~A\\f@p@~@b@n@T\\LP\\f@`BzBLVvEpGj@v@Z`@JNd@l@lB|Bf@l@tA~Ar@x@j@l@PP~AfB`AfALN@@JL@@JJ@@JL?@@?Z\\pAzALN@?JLRTvB`CHJ~@dAZ^~@fAJJ@@LNLNjApAb@h@v@z@d@j@TXn@p@@B@?PRXZVXBB\\^b@d@LNRTVXj@j@@BJJfAnAVZ~AjBLNFFvBbCf@j@LNj@l@@@v@|@p@r@\\^\\`@RTHJTVBB^^ZXVVTNNLZRBBHFDBTLZPXNLDPJVHJDHBTHf@L\\JRD\\FZDP@PBR@`@BP@T@\\@dA@zBDn@@T?hABn@@x@@nCHV@J@J@V@H@XDZDPBTD@?d@Jf@Ld@NVHLDLFPFRHLFVLTLZPZPPLXRJHJFVV\\Z^Zd@f@^b@^f@PTDDFJFHb@n@PXjEpGrAnBpEzGhDbFt@hAJNHJfA`BT\\FHfEjG^j@v@fAX`@V`@t@dAXb@lBrC~@xA`@l@Zb@PTBDZb@NRRV\\`@|AhB@B`@b@BDvAbBB@zAdBTX~AlBpDhEhE`Fv@~@VX@BX\\LNNPZZ@@JLJJRVRTjBxBLNt@z@hBtBxCjDd@j@bBnBJJTXFFj@n@n@p@LLBBHHLLDB@@FFVTPPb@Zn@f@l@b@@??@x@f@b@XBBVL@@LHRJf@VPHHB?@ZLPHNDHDVHBBJBb@P\\J\\LrA\\vBh@x@RD@dCn@ND`Dx@hAZf@Nh@NbAZ^LZHRHr@TJDb@Nb@PRHvAj@`@PTHpCfARJn@VVJh@T`A^|@\\nAf@XJh@N|@T@?`@HXDH@fAHB?N@\\?\\@v@A\\AZA~COx@Cr@CdACx@CN?P@fCKzESjCKfAExAG~BIf@Cp@Ar@Ap@CxAAz@AdGEJ?bBAb@?F?VAtBEvE?XAnDCH?~@Ab@A`@AxDIp@AdDGJ?j@Av@Ct@Ct@AjACjEIz@CdEK|DGfEKnDIB?\\AD?hDGrISlFKrFKjACnEIf@CpACjBE|BEXA~DI`CEPApCExCGhAC`@AbAClEItAChIOZAT?fEK`CGvBETAnBCx@AfACp@CN?tDI@?zBGxDGH?`@A@?D?hGMxCC\\AD?B?P?zDCpBAlDE@?F?H?P?F?pFEd@A~EEtCAnCCb@?l@?pAAd@A`@?@?`@A@?`@?h@?\\Ab@?nCCb@AnCCb@?@?b@?`@Ab@?b@AbGAh@A`JB~@?`A@v@?vA@X?r@?r@@vA?jB?|B@pD@rD@b@AvEBX?H?`QD`A@bFBx@?jB@b@?fA?fA@|C@fA?t@?hB@@?hB?hB@Z?X?jGBZ?`NFdC@hA?xFBvKDdE@|B?V?f@@fTDzC@nFBlC@`@@n@?T?jGBrLLJ?@?dDFtEH|BBrADrAB@?ZBh@DXBVDh@Fn@L`@H`@Hd@Jt@TZJp@Vf@Rl@V`@R`@TVPFDf@ZDB^VbBpA`ChBxEnDbGrEvAdAnA`AbAv@|C~B@@NLTP~AlATP|@t@~B`Bh@`@hAz@b@ZXTl@d@d@^|BdBvB`B\\XB@^XtB~Ap@f@\\VbFvDfDjCrBxAjCpBNL~AjAnA~@tDrC@@PNRNRLNJNLPLPLjAz@lNtK`BlAr@j@`@ZDBtCxBj@`@l@d@~@r@`A|@JJ^\\pArAj@j@jAvA^b@x@fAnCrDLPRXdF|GxPjUHHNTvBrCjBfCxC~DrBpC~OdTdB|Bv@hArCtDdCfDvVt\\hAvAn@t@n@x@tAzA`AbAhAfAtAlAvAnAj@d@|@n@NJ?@vH|FbHpFhA|@dBpA|@n@~D`D~I|GbYlTlVbR~KtI\\VzBdB~UzQ^Xtb@f\\`BrAzApAvChCdFfFd@d@JLlGhGv@v@zBxB|CxCzIzIj@l@nDnDv@v@TVNP`@^`A~@n@p@jAhAlAlA`AbAlBjBdEdE`@^tIlIbDbDnChCXVv@r@dA|@zFvE\\VfInGnKlIjAdA`@ZzI`HbS|OrFjE`MpJb@\\@@dAx@PJXTbClBlEjD`DfCzAjAlDpC~@t@pEnD|HbGHFvC`C\\VVTJHPLt@l@pKnItB~AhF`Eb@^~ExDrB`B@?zBhBvDxCnEjDp@h@jA|@lCvBrC|BxB`BjA~@fDhChM~JvDxCdOnL|AlAl@b@jAx@x@f@h@ZbCjA`A`@j@Pd@Nf@N`@Jd@Jl@LLD|@Nj@Hx@H`@Ff@Dx@DxBBhA@h@Cr@Ab@Ch@En@I~@KvB]n@Mr@ShBk@`Cw@jA]hBo@j@SDANGbA[t@Wx@Wv@WzMoEhBm@@?b@ObA[~FmB\\MXInA_@l@MdAS^G`@Gl@G\\Ct@El@Cb@AX?|A?B?v@BjAFhAJt@L`@Fx@N~@TbB`@jInB`Cj@@?f@LdB`@tG~AtD|@JB`B`@fGvArHfBdB`@`IlB|OvDvCt@xBn@dAZbAZdA\\dC|@`@Np@VvAj@^NxB`AjCnAtAn@JFrCxA|BpAh@ZdAn@lAt@r@d@j@^HLpAx@b@\\d@Z`Ar@f@VrAx@|@p@`@ZVNVPvA`ApA|@pD`CZVfDrBpBrAz@l@bBpAfCpBh@`@b@^BBf@b@zApAt@r@fEbEHH`E|DrBpBdG~FJHjChCtJnJlEjE|@z@PP@?zDvDfEdEdAbAvErEdDdDzAxArApA|BzBx@v@bD~Cz@z@pBlBPNXZdCbCpDjDJH@BVXpIhIdAbAz@z@p@n@rCpCpBlBB@\\^B@\\\\tAtAb@`@b@`@bC`CzEvEJJfC|BrAlAl@d@TRtAfAn@f@t@h@dAv@jAt@l@b@BBr@b@z@h@vBpAjBhAzAz@hFbDtFdDpBpAxBpAdEdCpBnArCbBrCdB|@h@`@VTL~AbAf@XpAv@~A`AtAx@rAx@dFzC|BvA`B`A`CxAjBhA~D~BtLjH|ClB`EbCRLhEhCx@d@zA~@vCfB|D~B`DnBD@\\TLH@@nF`DlFbDbEdChC|ArDzB@?ZR@?vAz@`@VlEhCfHjE\\T`B`AnS~Lz@h@VLdAl@t@d@^R\\RNJj@\\x@h@dCxAlAv@B@lAx@rA`Aj@d@~@r@@@~@v@v@t@`@\\\\\\bA`At@t@lAtAr@v@pItJrAzAhDxDdCrCvBbCt@~@tB|BdHbIrQnS^b@pJvKzAdBTV|@`At@z@|B|BLJ`C`CbBvAp@j@d@^b@^XRJJPLn@f@xAfAtB|AfBnA^VJFFDHFHDLJHFVRTRnCnB|AhAPLhBpArBzAz@l@pF|DnGpEHFDBHFDBDDHFJH^VjA|@~@p@|@p@rHnFz@l@XRx@l@rDjCTPzGzExB`BJHdM`JfDbC`@X~G~ElHlFvCtBxCzBNJHDVP|AhAzAfA|AhA\\V^Vl@b@jAz@PLj@`@p@d@JHnA~@LHbAr@h@`@LHrA`AxAdAJHv@j@~@p@TPj@`@ZTvAbAxAdAhAx@LJ@?@@DBRNhAx@~@r@`CfBB@fD`CRPvA`AlHlFb@ZrGtE`QbMNJ\\VVPNH`@VPJb@T`@T\\Pf@RXJVLd@NNFZJZH~@Vd@Hb@Jn@Hp@HZDt@FX@L@^@\\@Z@p@?bDA~ACz@@r@?hVS|@?X?T@v@@hABp@Dz@Dt@Fp@FL@t@Hz@Lx@L`@HrE|@`Ev@n@LxHvAF@HB~Cj@bKhBxE|@nFbAp@LrGlArHvAvGlAbHpAtI~AbNfC~L~BLBh@JbAPhATjJfB\\F^HlMbCdARd@HPDn@LtA^z@XJD|@^nAl@v@d@d@Xf@^`@Zn@j@nAlA|@dAZ`@TZp@~@T`@\\j@`@x@Zj@l@tAj@xAp@rBVv@V|@FLNf@^pADNf@`B\\jANb@@@L`@P^DNDNFJfBrDj@fAR^x@pAb@j@RX@@XZ|@bAn@l@TTn@f@t@j@v@d@x@d@`@RTJXN@?rAf@dAXZHb@H~@Rz@Ll@Hn@Dx@D\\@`@@tA?vAAj@?N?\\?`CGpFEtMMNA@?~CAfAApAAfIIjMMBAB?b@AfACj@?nHG\\@pBAbAAhAChCCxBCtLKxAAX?ZAf@?^AfAAPAr@?@?nAAvAAl@?^?t@DTB@?D?ZDL@pAVTHh@NLFd@Pl@VVP`@Vt@h@h@d@h@d@n@r@p@|@b@r@Xd@`@z@^|@Zv@^nAJ`@DRJb@@HJh@Jn@Hd@?FP|AFl@Hz@Fp@Fj@D\\PjB@@Fn@Fl@@PPhB@N?@BRD`@Dh@NzALnAFh@Jp@FXBJBNRbAFTd@rB`@fB@?H`@Np@Lp@BLPpALnA@F?@F`ABt@DdA@^?^DrCBn@DpC@d@@d@TxL@f@?F@f@HdE@j@?BL~G?L?LHvFB~@FbEBrBDpBFhC@bA@n@Br@JpG?PLhI?FVpK@\\?@|@|YBh@HjCBn@D`A@t@J~B?b@JnCF~BD~@@h@PpD@NHzAJxABTDb@Fr@DXj@pEPfA@@BJFd@P~@Fb@XdBF`@Nv@Jl@@HvB~LD\\B\\@JH~@Ft@@n@@jA?n@An@Ah@Cd@A\\AHKjAMjAG^Kl@Ij@WrAa@rBGVETADKf@ADg@dCYxAWvAWtAQ`AKz@E`@Iz@ElAC~@A`B?nAFbA@N@P@LD\\?@F|@Lt@Lp@DTV`ANp@HX@FFPLZJZVp@d@pAz@jBXf@^p@r@dAPXBB@@Z`@JNd@l@Zb@HH"
                     },
                     "start_location" : {
                        "lat" : 42.3196359,
                        "lng" : -83.08254649999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1695
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 41.675926,
                        "lng" : -83.58053869999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e204\u003c/b\u003e for \u003cb\u003eI-475 W\u003c/b\u003e toward \u003cb\u003eUS-23\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "mxl}F|v`}NDLBDn@dA\\`@|@`A`@`@x@v@j@j@pDjDp@p@XXHFXZt@r@XVHHRPHFNLPRVTVVJHLH`@\\d@\\t@d@j@\\XPXLzBhAhAj@l@Xx@`@x@b@^P`@R^PXLPJh@Vt@`@b@XB@zAjAr@v@RZPVJTR^Tn@Tp@Nb@Jd@J`@BPHl@J|@Fr@F`A@l@@PDdA@t@@N?d@@`AApACzAAT?X?V?`@"
                     },
                     "start_location" : {
                        "lat" : 41.6859936,
                        "lng" : -83.5673468
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.4 km",
                        "value" : 9373
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 338
                     },
                     "end_location" : {
                        "lat" : 41.6881527,
                        "lng" : -83.68871270000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eI-475 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qyj}Fjic}NE~@C^E\\I~@QrAMz@EXUnA]|AWbA_@nAqAhEqAvDKVYz@Ul@MXc@vA{@jCuAvEWv@Yv@uBtGi@`BABk@dB]hAUp@K\\s@nBeA|Cc@zAA?Oh@IRu@dCiBnFmArDeA~CADq@vBCDK\\ADm@fBGR]dAUv@kB~FUv@mAvDQn@e@nBQz@Ov@Mt@Kr@It@M~@Gp@Ep@Gz@Ev@Ev@Cx@Cp@?z@?v@?d@?R?t@B|@@r@NfKDvB?D@nA?FJfHBhB@bA?@@hAH~F?J@h@@r@CvDA~@Ev@Cv@G`AKfAIv@It@Gf@ERIh@i@xCGV_@zAMj@q@rCYlAMd@ADQt@[rAm@dCOj@Ol@c@jBi@|BG\\?@EP]vBOfAIp@Eb@EZIjAKzAAf@Cn@CpAAhA?b@A~@?H@xA@bAFjIFtJ?J?B?N?b@@l@@j@?l@?RBzB@`BBxD@v@@dB?N@fA?j@BzCBtD@z@@jAB~D?D?D@Z?jA@~A@fB?h@@~A@n@FnI@jC?DHnL@jB@rCB~B@`A?^?B@j@?L?N?bA?|@Av@EbAAn@Ep@?@C`@ALCh@ADGt@C^G^QxAMz@EV?@i@xCOx@Kj@YxAMj@YzAe@dCSjAADUlAQfAWfBIv@ABC\\APKjAKzACv@?LCn@?PA\\Ap@@lC@p@?l@?@?^?LBlE?t@BnG@nC@L?P?P?@?V@tE@~A?fA@zA@x@@tA@pA?~@?r@?`A?@@V?p@@dDBvB?n@@~BBrD?|B?h@@|B?NBlC?vAD|E@|A@N?BBx@Bp@B^?@@VBTBd@Fl@Bb@BRBNBXF^Fd@FZHn@@DDZLn@T`BXlBXnB@FHl@DTDXLfABRLbAXbCNzAHv@D`@Dd@"
                     },
                     "start_location" : {
                        "lat" : 41.675926,
                        "lng" : -83.58053869999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 747
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 41.6850561,
                        "lng" : -83.69584499999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eI-475 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-23 S\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eMaumee\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eDayton\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "}em}Flmx}N`@jFL~APpBD~@Fp@HdABVB\\JfARfBZjBJf@Lb@@DPh@PZ@BVh@LTz@jAf@f@j@`@l@\\ZLJDp@P^Fj@L?A"
                     },
                     "start_location" : {
                        "lat" : 41.6881527,
                        "lng" : -83.68871270000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 471
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 41.680924,
                        "lng" : -83.69467379999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e, follow signs for \u003cb\u003eI-475 W\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "srl}F~yy}N\\Ef@AXCl@GTG@?`@K~@WjBi@x@Sr@Up@OnAUNAl@KlAMd@Gd@K"
                     },
                     "start_location" : {
                        "lat" : 41.6850561,
                        "lng" : -83.69584499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.6 km",
                        "value" : 13574
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 457
                     },
                     "end_location" : {
                        "lat" : 41.5593258,
                        "lng" : -83.68826849999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eI-475 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-23 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wxk}Ftry}NtAC~BKR?NATAp@CnCKr@CnAGrDOrDQTAL?r@CJAvCKbAEb@CxESB?pDOrBItEQbGI^@zA@dD@b@@bADT@H?x@D`DND@xIp@`CRrDXD@rBPvBNnAL~@F~@H`@D`DVjAHRBn@DV@RBhBHH@z@BH?nAD~@@^?xA@fB?`@AnAC`BCjHKnC?D?\\?d@?L?~CAR?bCEt@C`@?v@Cb@AjAAl@CjHGfGGvDCrACvDEv@?nBCdFGxDClACfA?@?P?fFIzAAzAAzBCvBG|@@~AC`CGdCK`DQ~@IzFg@vEe@zAM|BU`LeA`Ea@jCKvD_@?AdAKb@Eb@EVCn@G`@Ez@GB?d@Cn@GF?|BSNAp@G`CUPANAfBQbBQ`AK@?fAKrCWfAKb@CRELAXCPArAKp@GbAIbACh@Cb@Ap@C~CG@?vAAL?t@A\\@\\?x@?tC?fA?\\?B?LA@?@?`@?~B?`A?vB?tB?hE?jB?@?tACh@?rD?~NAf@?d@?V?h@?`@?vE?~@AlA?dA?jB?`DAR?jVA~A?fA?fA?ZAnC?jC?rAAZ?~D?hA?hA?~BA|B?P?T?lC?`@?bA@z@?NAb@?jB?bAAP@R?TAbF?rA?f@ArB?xNAvCAV@b@?lEArA?dA?fC?vB?zRC^?lC?fG?tAArA?D?r@AnAA~@CZAhBGpBIbAEnAKXAnAM^ClBQlBWpC]p@K~@OvAYb@I@?tAWvAYxD_AnA]|F{AjCu@|Bo@z@U|@U~@Uj@Q"
                     },
                     "start_location" : {
                        "lat" : 41.680924,
                        "lng" : -83.69467379999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 167
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 41.5578689,
                        "lng" : -83.687888
                     },
                     "html_instructions" : "Take exit \u003cb\u003e4A-B\u003c/b\u003e for \u003cb\u003eUS-24\u003c/b\u003e toward \u003cb\u003eMaumee\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNapoleon\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "y`t|Ftjx}NFD@@B?B?j@GLC\\In@OVITIzAY"
                     },
                     "start_location" : {
                        "lat" : 41.5593258,
                        "lng" : -83.68826849999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "128 km",
                        "value" : 127761
                     },
                     "duration" : {
                        "text" : "1 hour 10 mins",
                        "value" : 4226
                     },
                     "end_location" : {
                        "lat" : 41.0852628,
                        "lng" : -84.9912293
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork to continue on \u003cb\u003eExit 4B\u003c/b\u003e and merge onto \u003cb\u003eUS-24 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Indiana\u003c/div\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "uws|Fhhx}NrB]TE`BYTEF?DALALAPC\\AR?D@V@H?J@J@J@RDJBB@H@HBHBD@LFVJZPPLjAv@RJVPZNJFJDPFPD@?TDn@@T@dB@XB\\D\\DB@TDJDJD`@RVNLJRPPTB@`@j@dAxAp@~@n@z@bBlCXb@LJRJRZdBhCvB|CBD`AvAHLnCbEdBhChBpC~@tAlEzGbAxAPXNRLRrArB~BjDhAbB@@^j@~@xADFZf@z@jAr@`Ah@t@z@lAjBfCZb@~@rAn@|@hA`BpApBJNr@bAhHtKhCbEfBjCT\\p@fAr@dAlBxCV^p@bA^\\p@z@LNb@h@\\ZXXf@^PNz@j@n@ZNHRJf@Tf@R`@NZL|Bz@LFp@VbA`@pAp@h@VZRJFPLf@Zf@`@`@\\v@r@p@n@hArAv@fAt@hAh@`AZn@Vf@@DZn@b@fA`@nA^jA\\nAZnANz@FTRrARtADd@Hl@D^PnBn@~IVrDXjERnCRpC@JJ|ATlCDl@|@hLDl@n@hIXpD?FL|AFn@JpANfBPvBBVFl@?@LbABTJl@Hj@TrANt@FZNt@Rt@\\nA^nARn@J\\DJPb@Xn@d@hAjA~BJRd@v@bAzAn@|@DFRXtDhFX`@^d@RXX`@X^x@hATXvEnGnD~E`B|BDDBDTXDDb@h@x@`Af@d@VVz@t@`@\\PNr@f@VPVPr@b@f@XPJTNRJrDlBhB`AnBdAbAh@PHRJ|EhCb@Tz@d@PJRJhCtAdDdBbBz@xBhAjE|BTLbAh@xHbEdAj@JFj@^x@h@|@n@v@j@r@h@|@v@v@t@rBjBdGjGz@z@pAnAVVnFpFhEhEr@p@FFNNZZDDLNb@`@rCrCrCpCVVHJl@l@xAnATRpAdADBv@h@v@f@xCjB|A`AjHrE^TJF|BxA|H`F|GhE@?\\TZRjAt@bBdAhC`BdC|A@@|BxAbAn@`BbAnAp@|@b@p@XJDTFb@Nl@P`AR|@Nl@Hl@D|@Dl@B`A?R?`A?D?tAAnDC~AAlA?xAAtAAdAAh@?vAAxBAz@?lCA^@h@DJ@lAJr@LH@@?j@N~@Zb@Rx@b@dAt@f@^^\\RN|@dAJL^d@rAfBx@jApAhBn@|@b@j@V`@pHlKxApBtChEJL`@j@h@t@DHBBdBbCzB|C|A|B|@lAzFdIZb@HJr@bANTbFhHv@bA~BhDnAhBbAfB`@`A\\v@`@nANj@p@pCNhABTDf@@DHfA@JHhBB|A?T@D@bGAX@fG?zM?n@@zK?zB@to@@pH?~J?bC?|A?L?D?B?R?@@xF?fE?xD@nN?|F?zB?r@?`B?~EBhFBvAD|@@NBf@Fn@@N?@R`BV|AVlARt@Rt@Vt@N`@Zv@d@`Ar@lA\\h@l@v@BBtAxA`@b@rApAnBjBBDpAnA`@`@x@v@jEfEtArAZXz@z@`A~@jBhBr@p@b@`@r@r@jBhBdAbAbE|DdAdAfEbEjAfAJJNPb@b@fAbAhBhBPPNLt@t@PNb@`@d@d@p@p@b@d@n@t@n@z@\\h@\\j@LVd@bABBNb@P`@`@lAPr@ZtATlAP|@lDhT\\zBZdBHl@n@tDF^zDbVVxAzAjJF`@jAhH^xB`@fCRnA@JfBvKVzAt@xEhBrK?@BHfAtGPhA`@nCPtAVlBTtBN|A@NLlBj@pIHz@Fx@B`@PbBRdBT`BFXJr@Z~AH\\Lj@@H@@XjAH^~@dDhEnOzArFTx@JZ\\xAVrABNN`AFf@Fl@HfADz@Dv@@d@BfA@rAFzSBnHB`JBbHJrb@?H@L@hCC|BClAGnAG|@I`AMx@E^ETKh@[vASv@Yz@Ul@a@~@EJ]v@y@`BiAxBm@lA{@fBc@dAABSh@O\\a@lAIXW|@CLU~@WtAW`BMhAIfAGx@Ch@Ex@C~D?`@DlK@jB?jA@fE@nF?NHjUB`I?p@D~MBhI?B?h@@x@@jA?lA@zF@rA@`C?p@D~MFjO?r@?~A@nC?BBzGL~_@HxV?B?j@?B?`BB~G@hCBhJF~Q?N@n@?|A@|@?j@@h@@l@@bABt@B~@Bv@Dv@Bp@F|@HvAH~@@TLpAHdANtAPjBBNFn@Hz@PbBLfABZRjBNbBNxAHt@JbAJjARhBNzAPbBRnB\\tDLpAFbA@FBb@Dt@HlADtABj@Br@B`ABdA@t@@tA?nB?n@?n@@xA?~A?pC?~A?h@?vC?n@?n@?n@?n@@~A?~A@~A?r@?Z@Z@z@@f@B`@Bx@Bb@B`@Fv@Fj@D^BXBXF`@F`@Hh@Hf@Nz@TlALj@XxAZzATlALp@Jj@@BHh@Lx@@JDVHn@BTBXFn@Db@B^Df@Bl@Dx@@\\@^@v@@dA?rA?dC@X?fC?pD?vA?|A?n@?@@d@?rC?nB?pD@~F?~F@lB?`F@|I?r@?\\@~J?bC?xC@`B?z@@hA@Z@p@Bt@Bf@Bd@HbAJ~@Fh@Hl@Ff@@@Hh@Pz@XhADPFTX`A@@Tv@L^Vn@Rh@hAnCHTpD|I~AzDr@fBRf@f@nApHxQ|@vBp@bBRd@?@f@lARh@`@dA|@~Bd@rAPf@Rh@Nd@Rl@J\\Xz@\\hAPl@L`@n@|B\\lAVbAl@xBHZDNlBlH~@lD^tANh@Nj@Nh@v@rCNh@FVNj@FPTx@Rv@Rv@@@d@fBPp@Nh@DNPl@`ApDLb@^tAp@hC\\lA@Dv@rCDPNh@@HRp@T~@Tx@Pp@H`@Lh@F\\Jh@Jj@?BJj@Jv@Hx@LhA?FFz@F|@FtA@T@d@BvA?nA?pA?tBAvHA~AA~P?j@Ar@?fBAfIAdE?|B?zCA|@?p@?f@A~@?\\CpACx@C\\A^CZAXAFCVALAPAFCRC\\E^Kn@G^Ih@Kf@Kj@Id@Ot@Qv@Ov@Ot@YtAQfAOt@Kt@Kt@Gf@Ed@Gh@C^Ch@Cj@Ab@Cb@Ah@Af@?d@?D@h@?h@?rA?|@@~A@~@@nA@pA?L?l@?F@p@?P?b@@Z?j@?J?\\@z@?v@@\\?Z@lA?bB@hF@pK?x@@tQ?`E@lL?bD?T?x@@zC@z@@vB@tA@x@@~@@v@BbA@`ADjABx@@`@Bt@DvAFrAFxAHvAD|@HnAD|@JpAFz@F|@JrALxAPpBLpAXrCNdBJ|@T`Cd@|EVbC|@tJJdAJz@H`AXnCd@zEBXBRZ|CH`AZ~Cf@`F\\rDl@pG`AhKNbBVnCJx@VpCx@dIL|ADd@RpBVnCVbC@JJnAJ~@VlCTxBFt@Hv@LtAHz@DVBb@Hx@XnCHv@XrCn@|GBRHl@BT@LNfAd@dDHb@Hb@Lp@TnAv@lDLj@@FLb@Nh@ZnABDNj@Vx@HTPl@Vr@J\\Rj@f@nA\\x@JVRf@NZ`@|@FL@BVh@FLVd@DJtAdC@BLRV`@DHPVt@fAn@~@V`@`ClDb@p@RXRXj@x@`@l@n@`AjErGHNLNh@x@`@l@~@tAxDxFx@lAdBhCDFDHDDPZTXhD`FBDfA`B~@rAV^d@p@lAhBl@z@~@tApBzCbAzAbAvAh@v@Zd@vAtBrDrFNRFJR\\hA~AZd@Zd@rAnBxB`DdG~IjGbJJNlC~DHLr@dAj@~@vClE@@h@z@dA`BlB|CXb@\\h@t@pAt@pAbAfBTb@@@f@|@NZ@@LT\\r@FJRb@LTJRP\\dBpDl@nAXj@x@lBPd@Xr@|ApDhBpEf@lARf@DNPf@z@`CdAtCFNpGnRBHnInVPd@`@pAvJdYb@nAnEtMVr@fBnFxAhEnDnKrDrKPh@xAfE~CfJrBfGnCdIjAlDt@vBd@tAnK`[l@dBNf@?@lMn_@vFnPPf@JZVr@|Mx`@bEnLzApEl@fBbAxCtEfNFP|EtNnD|JfEdMRh@bB~EzC~IBJL\\tDzKf@xArEjNb@rAbEfMnHtUzJf[Pj@b@rAtFfQNh@fAfDfAlDxI|XPh@Ph@jCnIrAfE|D~LfH~TbA`DnA`Eb@pAPl@x@jC|A|EPf@`@pAfCdIrGjSz@rCrF~PzAvErAdE\\nAtAjE|AdFpCrIjChHbAjCrA|CnBjERd@rHpP`FtK`@|@jExJzAbDdElJDHtDhIhJrSb@`ARd@zB`FdDlHRb@f@jABDP^~@rBbBvDbAzBpDdInD|Hx@jBRd@JPdDnH|AjDtEbK`AvBbBvD^z@l@tAh@xATn@^hA`@rANh@ZlAhArE`@lBVrARhAN|@Hd@b@|CTrB@FPnBRhCT`EHlBDpAB~ADnCBzDDfI?@F~OBjCDhL?bBFhIDnL?^?N@n@?n@@n@FxN@tBBjF?jB@nA@lDBbD?t@@zC@r@@nD@fCBnC@lC@fB?xA@dA@|@?lA@p@@|@DhAJnBPrCZjDh@pDPjABLXvANn@`@dBz@|Cn@hBh@vAP`@Zt@d@bAr@vA`AfBfAlBn@hAZj@FJHNJPzArCfChEb@x@t@pAf@~@fB`DnC|EDH`@t@dAjBFHTb@BD^p@\\l@r@nAxAfCVd@z@zAJRh@|@HPHLt@rAZl@Xd@j@bANXLTfAlB|ArCd@x@hBdDXd@Zn@d@x@JPvEnI|AnCxGrLpEdIPXPZtDtGvEnIf@|@rA~BpA|BT`@hIzNdUfa@`AbBrAbCDJNVf@z@bB|CfAlB`AbBbD~FdAjBn@fATb@|ApClBfD\\l@h@bAv@vAn@fAVb@j@bA@BNThArBLTJPv@pAl@dAn@`A`@h@?@h@p@XZp@r@n@n@LHPPjA~@lA~@nB`B~BzB~@bAx@dAJLT^RZr@lAz@lBFLDRb@pARn@Nl@J`@Nj@BJd@zB@Df@xB@@@DP~@l@rCZzA^fBr@fDf@zBPp@Vz@Rp@Tn@Pj@Vn@Vl@Xj@NZb@x@n@fAz@pAZ`@X^t@|@@@v@x@ZX\\Z@?pAdAxB~A`BlAb@Z\\VNJ|@v@dAbAHFd@h@RTLLX^\\b@X`@R\\HLNT\\n@Xd@Xl@LXR`@Rd@Rf@Nb@Tn@FTJXL`@Lj@@BRr@^`BJj@BPVpA@Fb@fCrAzHJj@l@tDVxAxFr\\TlA@JbMrt@r@zDfEvVxH~c@~BdNlC|OzAxIx@zE^`CzChQdDpRrA`IjBtKpArHd@nC|DpUJl@nAnHxBnM|DlUjA~GPdAlCxO~@tFPbA`BrJ^xBj@`DfCzNnBjL|@hF`@xBn@vDdDrRhAvG|@fFj@hDr@`EvC~Pz@`F?@Jl@|DjULp@lCzOVxAvEjX`DhRrAjIJj@Jl@zArKJv@Hj@b@jDlApJ\\hC^tCJbATrB@DRdCDp@@HL|AVpHVpK@`@PjIHlD@|@Br@FdCF`CBbAFrBDvAB`@Fn@LxAFn@ZzB\\`B@BV`Af@hBRf@Xt@`@~@JXl@jAFHVb@^h@j@z@t@z@Z^z@x@fAz@n@b@~@j@zAt@bAf@fB|@b@Rf@V|@\\RFh@T|@`@LH`@P~@f@x@f@xAhAhAfAp@t@FFBFLLDFV\\FFPVf@z@NXDHLVVh@^~@Vr@Zx@Rv@d@nBTbAV~Ad@nD\\nCHl@Hj@J|@p@fF^vCRxAR~ATdBPpAF^Jl@Ln@^jBVjA`@~Ad@~ADNnCxI|C~JFP`A~Cd@xAjAvD~AfFPj@Nd@@DPh@Pj@xF|QRj@r@`CPj@Pj@nA|DHXPj@lAtDJ^Pj@`@rAZlAPr@Rz@FXTjAJj@TzAPpANtAVdCJ`BFrAHjBBlBBbB@xDDjGBrHBrDFjN@nCH|MDxG?fA@rB@dBBzD@bB@|DB|A?b@@b@DhABl@FnANxBJfAXpCn@`E\\pBXbBF`@h@tC`@zBJn@f@rCv@pEv@rEhE|VzFr\\vKzn@f@lCZlBf@zCd@dCb@fCZhBDXfAlGhExVz@~E`Gd]|@hF`DdRVxAXzAJj@BL`A`G|@bFHh@Ln@d@pC^zBfAlGBFFb@dBxKJl@Hj@Hb@H`@pC`OJj@fAvFF\\H`@HXpAjFNh@@DJ`@nA`Fr@bCnAxDjAlDfAtCl@~ATh@d@jAPd@@@f@lAN\\j@rAZn@DHv@bBJR\\v@h@dAl@hA@BNZDHPZt@rA`@r@t@rAfAfBl@`AjAfBx@lANT\\d@hA|AX`@bB~BdCfDX`@|@pAh@p@X`@fBbC~OpTfBbCpEjGbGhI`EvFX`@lAbBr@`AX^FHh@x@jAdBHLzA|BfBxCz@zA^p@v@xAh@dA|@hBj@lAJPNZh@lAbAzBN`@b@bAn@bBRf@^bA`BnEd@xAFR~@tCPl@Nd@Nd@V|@\\pA^rA@F@F`@|Ap@rC\\|AFXLh@@@l@zC`@pBJf@f@rCPhA@BHl@RlAV`BNjANbAVrBPzABLJdAJdAD^TfCBVJhAH`AF~@Fz@LvANnCF`AJzB?BN|D@HFfBPjFLdEh@xPTrH@f@ZrJTtGDnA^|LR|GRzGBr@?@`@tMJnCNxEtAxb@@VJ`DPtFHfCHvCDnAN`EB|@@d@Bf@Bp@F|@Bb@Dl@J~APrBF|@LnALpATjBTfBRzAJn@Jr@Hf@Jj@Jn@XvANz@F^DRBH^dBJh@DLF\\BDFVBNHZ@DPl@Pr@XbABLBFBFHXHXHV`@rAPh@@@`@nAPh@BFL`@Ph@bAxC@DTp@f@zA\\bATp@FPHVPh@|B`H|B`HxC`JPf@@@Pj@t@zBxAlEb@pARh@`@lAd@vAb@pAb@rAnB~F^hAh@~A`AtC^lAd@tAZz@j@fBRl@l@hBx@fCZdAv@pC^xA^`BXjAJh@\\|AZ`Bn@vDb@pCb@nCPjA`@fCPhAZpBHd@BT@FF^Nx@Hl@Jj@Hj@?@xAdJLv@RtALp@t@zEHl@?@RlA@JHl@NdAb@fDFd@PzA`@lDPpBRtB@LTzCHlADn@F`AD|@Fz@Bl@?@@LFrAFpABv@D|@?V@\\DhA?JDvBBx@@p@?D@f@?P@\\?ZBlC?T@n@@lC@n@BtC@|@?Z@x@@b@BjA@bA@P@\\?VBz@@H?NDvABZ@Z@\\Dx@@Z@\\B\\@ZDv@RjDHrAD`@FdABVBT@RH|@H|@PtBJhAXhCHv@DZD\\DXL`AFj@Lv@Jt@D\\Hl@@FLv@Fb@Jl@RpA`@|Bn@hDFZNt@Nt@Rz@ZtAR`Ar@vCZlAbBbHrBlIl@bCJ`@BFLj@\\vANj@@BJd@Nj@Lj@\\tANj@Lj@\\vA\\tA\\vALf@@@\\vALj@Nh@Pt@J`@Lj@HZRx@Nj@Pr@f@tB@BNj@Lj@Nh@Lj@l@`C@FJb@BDJd@\\tA\\vANh@Lj@Ld@@DLj@@B\\pAjAvEbDxMhAxEd@jBb@fBhApEBLXhAx@jDxAdGNh@Lj@J^j@|Bj@`Cl@`CNj@x@jD@@Lh@FXDNNj@?@@BZpAxAdGLh@Nh@\\nA@Db@pA@DDLHVHXXt@Pf@?@Rf@Tj@Rb@Xp@NXTb@?@FHP\\Xj@f@z@DFj@|@BB`@l@l@x@NRBB?@PRFHNNLNRVDD\\\\ZZZZ`@^n@j@TRPLh@`@j@`@B@?@~@h@BBJFNH^TJDt@^JFt@\\@@\\P@?~@d@DB|Ar@JFf@Tl@Z@@\\NLHRHZPb@RHBj@XJFd@R@@XLTLJDB@\\Pp@\\LD`@PJFt@Z^Rf@Vv@d@r@d@JFHDRPB@ZTFFTPRPHFDFVR?@@@p@n@x@`AVXh@l@X`@p@bALN^n@BBVb@FJP\\P^Tb@@@Th@Rb@BJNXJZDJRh@FPHTL^Rr@JZVbAT`AVlAJh@Jp@VxABVRdB@LFl@B^@LDn@@FHrBD~@@p@BdCBzD@p@?p@D~D@|A?n@@n@?n@HlL?n@@n@BlF@n@BnFBlC?pA@L@nC?B@bB@rA@fABv@B~@?@Bl@?PBj@Bd@Fz@Dl@Fj@Dr@DZ@NFb@Ff@@DFf@?DF`@DZHf@P`AVtA?BLj@VdA`@|ABHNh@ZdADLv@~Bx@dCn@lBJ\\DH?@t@xBPh@h@|A\\dAb@rAPf@t@|Bh@~Ap@vBxBvGhAlD~@pC`@jANb@zBxGzB~GX|@~@pCr@zBpAxDX|@Ph@t@zBlAlD^fABFPh@Ph@FRDJNh@J\\DJV~@FTPt@Lj@Tz@P|@FZP|@VxAHj@Jj@@JF`@PnA@JHl@Fn@Hx@Ft@^tEDn@@FDd@^vE@`@\\fEVtCPzBbAjMFv@NjBFr@Hx@Dj@B^HhAbApMFl@jAdOp@dIDh@Dl@Db@RhCx@bK`A|LTzC^dEZtC\\|Bd@|B?Dh@zBv@nCp@tBh@vARb@LZVf@h@fAfAjBnCrExA`CBF\\h@Zj@HLn@fAxBlDVb@rCrEhAhBhAdBzC`Fb@t@bExGx@pAxC~ElAnB~EdIzAbCxDlG|@xAhDtF`BlCn@dAnB`DpAvBX`@\\j@hCjE^j@PXvBnD\\d@?@R\\RZ@@zAdCt@jAvBnDr@zAz@tBb@vAl@lBTr@T|@Tp@J^Tj@d@jAzDnGrAvBl@z@JPBF|AlC"
                     },
                     "start_location" : {
                        "lat" : 41.5578689,
                        "lng" : -83.687888
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 457
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 41.0824252,
                        "lng" : -84.9951813
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRose Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{mwyFdzveOrBbDl@~@n@`AZd@n@`Aj@z@vAvBrCrE"
                     },
                     "start_location" : {
                        "lat" : 41.0852628,
                        "lng" : -84.9912293
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "33.3 km",
                        "value" : 33324
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1150
                     },
                     "end_location" : {
                        "lat" : 40.9605594,
                        "lng" : -85.2899319
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eI-469 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-30 E\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow I-469 S\u003c/div\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "e|vyFzrweORXP]rAeBp@{@lA{AXa@RWPWp@_Ah@s@HIPQXWj@i@NK`@Yh@[r@[d@Ol@Qv@QlASdL_BvB_@b@QRCbBUd@Gl@IpBYb@G`@Gx@KlBYHAh@IVCt@Iv@Il@G\\ALAB?`CMLAJ?H?J?tFIfAA~AEn@ARAlAAt@ArBCxBC`EEnBC`CEh@?DAv@AB?`A?xACt@?pAClBDvAHh@D`AL|@NxATpA\\v@Tf@PLFjGlClEhBbAd@b@Rn@Xd@RdIjDnJ~DbEfBrGrCzEtB`@PVJPHHD^NHDLF`HxCHDbA`@zAp@t@\\nB|@HD`Af@p@ZrAr@jBbAl@^rBnAlAt@zBzAPLp@h@ZV`@\\NLLJFFnA|@\\Vt@p@d@^x@t@~BzBv@t@n@p@r@r@vC~CpAzAt@~@DDn@x@V\\dAvAjCrDvEzGfBdCT^d@n@nKhOpFzHf@v@h@v@jEjGV\\zGrJhA`BJLNTdBdCV\\DFHLRVPVV^|AvBdFpHl@x@r@`A`BtBbAnAf@l@bAnAvA|AjBrB?@lClCdA`A@?@@LLz@t@z@v@p@l@d@`@nAbAJHjA`AhA~@JJbDlCbAz@B@bBvAfDrCTRhBzAfBxAt@l@DDVRDDt@l@|@r@b@^rAhAjB|AJHtL|JfGdFnC|B~KjJrOnMFF\\X\\Xt@l@b@^^ZzBjB`A|@n@l@Z\\tAxAfAlAbBvBxBzCv@nAtA|BlA~BJNJTNZbAvBh@pA^z@HVRd@p@fBd@rANd@L`@Nh@l@vBXhAb@~AT`A@D|@fDDTbClJb@`Br@nCHZHZ?@HZDN@D?@@@HZFVHV@B|DpOd@dBx@bDv@|CFNbFzRd@fB\\tAHVjBdHLj@n@~BPn@nIx[bFpRdAzDv@xC|A`GNh@\\nAr@nCNl@l@zBn@dCb@dBb@lB^nBb@vCZdCTxC@BBh@?DHxABl@DzA@\\?r@@dE?\\A~BAhD?jBA~EAhNAh@?L?x@A|G?l@?TA`E?vBAx@?D?jA?l@?p@@j@@f@@h@Bh@Bf@Dn@JjAHt@Fd@Jr@Lr@VtA`@`BNd@FR@BFNHXb@jAd@fAp@pA`@p@Xd@|@nApAhBBBh@r@jBdC^f@n@|@pAdBnAdBv@bAhA|Ax@fAtC|DzBxCd@n@pAfBjA~AX^NRxAnBnAbBjA`BnAbBdB~BrBzCLTn@bAr@jA`@v@T^T\\PZ~@dBbBxCzD~GdD`GVd@tChF@??@`AdBPVTb@~@`BpA~BR\\f@|@v@vAPX?@xAfCxIvOd@z@PXr@pAj@`Ah@`Ah@~@vAhC~@~Al@fAz@zAr@nA\\n@n@hAb@t@l@dA|@bBh@~@\\j@Xf@Zl@`AbB^p@f@~@Xj@NZ^|@Zx@FPVp@L`@V|@\\vAPv@XvAV~AVvBJ`AJvAD~@DfA@^PjFXvJ@f@@l@Bt@Bt@D~ADfAtCxbAFlBZ~KLxD?@J|DDjAR~GL~EDlA?\\Bl@HtBDhBXrJD`ABbANbFt@rWHpCHfCFrB?J@XP`GRvGPrGJzC?Tl@vSJrCHzCDlA?LH|BBjAHhCJtDLnEJ~CDvABbAB~@@ZBjA@nC@zDC`CG~GIdKKhJQvQA`B?VARCrBAlBOhQChBC~BAfA?n@Af@C`C?T?xA?xA?|A@dD@|ADjCFpD?T@XHdFR|LHxEDdEHtE@j@?@@l@@z@b@|W?VBfAF|DFpEBbADpCRtNBnAHhFJxFHpFF|D@`@@jADhBPnM@T@v@BlA@j@BvADvC?FHvFB~A?lA?^?N?~@A\\GlCG|AInAEt@Gn@C\\CPCRCRC\\E\\E\\EXSvAUpAIj@YpAg@xBo@rCkBnImC|LADQv@gBfI[tA_@`Be@rBoEhSoAzFw@lDQx@[pA_@hBOt@a@dBYnASbAq@tCeAvEAFGXEPm@pCUjA[xAA@[zAaAlEk@hC[pAeAxEaAlEKd@YnAMr@Mt@Kp@Kp@Gn@AFCVGv@Eh@Cf@Ep@AZA^Cx@?N?FAr@AhA@rA@^@z@?@Bl@?@@^@NBn@LrA^jEZrDRxBPpBFz@Bb@FfBFlABxB?tB"
                     },
                     "start_location" : {
                        "lat" : 41.0824252,
                        "lng" : -84.9951813
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 185
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 40.96053,
                        "lng" : -85.2921341
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLafayette Center Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ob_yF`eqgOB|D?p@?h@?@?J@V?H?@?D?t@?d@?H"
                     },
                     "start_location" : {
                        "lat" : 40.9605594,
                        "lng" : -85.2899319
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "155 km",
                        "value" : 155068
                     },
                     "duration" : {
                        "text" : "1 hour 24 mins",
                        "value" : 5064
                     },
                     "end_location" : {
                        "lat" : 39.9003929,
                        "lng" : -86.0497874
                     },
                     "html_instructions" : "Take exit \u003cb\u003e0A\u003c/b\u003e to merge onto \u003cb\u003eI-69 S\u003c/b\u003e toward \u003cb\u003eIndianapolis\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ib_yFxrqgOMzACXERELAHIPIJEHIJIHIFKDEBKBE@GBI@U?OASEMCQIKIKKIOKQKWCMCQCMAM?[@g@Da@DOFQHOHMFIHGDEFELGNIRERAL@L@@?RFZJTDx@l@ZTn@d@nDbCh@`@fAt@bAr@@?z@n@|DlClAx@|CvBtKtHLHr@d@l@`@nA|@tFxD\\V^Vd@\\tA`A|AfA|AdAdBlATPnCjBRNVPzB~AzDlCxEdDRNlEzCpA~@NJzAbAjAz@hAv@v@h@bAt@fAr@dAt@x@j@`BhAbAr@lAz@vAbAhAt@bAt@l@`@lAz@f@\\x@j@x@j@f@\\v@j@lAz@d@Zb@Zf@\\x@j@v@j@jAv@x@j@d@Zh@`@v@h@fAv@~@n@f@\\d@\\l@`@d@ZvAbAz@l@j@^TN?@p@d@lAx@~AhAjAx@f@ZfAv@@@pBtA~AhAf@\\nBtAz@j@b@\\f@\\v@f@z@n@d@Z@@t@f@d@\\lAz@v@j@r@h@hDhCbBnAd@\\t@l@x@l@x@n@v@l@|AlAjA|@d@^tCxBbAv@vC|BxBbBf@^rAfAf@`@HHj@`@tEpDNJNLr@h@nA`A~@t@jInGt@j@p@f@XT`BnANLb@ZpB~AzC~BpG~EpAbAnEhDhEdDLJ^Xv@l@`@\\h@^^ZPLRNb@\\rAdANL\\Vj@b@xAhAZT@@VRpAbAd@^jBvAtCzB`@ZVPb@^f@^r@j@f@`@d@^x@n@b@Zv@l@b@\\RNd@^d@^t@j@v@l@d@^f@^LJVR`@Zd@^\\TPNl@d@jA|@RNNLlA~@b@\\NLd@\\v@n@lA|@t@j@PNRNRNPLTPNJRLVNLHTLPJTLRJRJVLb@RXLf@RPHTHj@RTHRFRFTFTFTFTDRFTDTDRDRDVDVBRDRBVBTBTBTBR@L@L@R@R@T@T?T@R?V@T?R?V?ZA|@A|EEz@Ap@Aj@A`AAd@?p@AxAAr@A|IIfDE~AA`AAl@Ah@?TAl@?`AAbAAh@AxAAh@AX?vAA~@Cj@?RAfCCh@?xAAvACj@?lBCbAA`EEb@@Z?TATAjACbBCj@?vAChBA~CEhBAl@?zCCl@Ad@A@?`@?L?lBC`AAbAAh@?nBCrGGzBCL?t@AZAB?J@j@AlCEx@?~BCvKGfAA|@?fA?jBAjB?pC?B?hO@nF@vB?xL@tA@d@?`@?@?xK?xLBrA?`@@@?b@?@?bJBxD?B?V?`C?lA?hD@xA?vB?fA@`A@x@@pAJnANlATbATjA\\t@ZXJZLx@`@n@^l@^LJRLl@d@hAbATRbClCr@v@XZ\\^Z\\|@bAtAzAz@~@RTTXlBtBf@h@TVrAvAv@|@rAxATVpAvAfDrDrAzAj@n@DDLN@@NPXXx@~@RRXZxA`BZ\\BBrAzAn@r@r@v@t@z@x@z@dAlAt@x@^`@Z^xDhEbCjCn@r@j@l@n@r@LL|@bAjAnA\\`@b@d@rAxAhAnAhAnA\\^jCvCt@x@\\^DFz@|@|@bAn@r@zAbBRTr@v@`BhB|ChD`@b@z@~@~BhCtC`DpHjInBvBp@t@xDhEjDvDxCbDbBlB~@bAjArAxDdEb@f@b@d@t@x@bAjAlF~FdAhALNZ\\FFb@b@`@^d@b@NNPPPNFDHFRN?@b@Zv@j@TPd@ZRLx@f@d@VLHXN|@b@\\NjA`@n@XXLRFl@RdBf@RFVDj@LTDTDRBTDTDTBTDh@FTBTBN@F@B?VBJ@@?VBT@T@@?P@T@V@T@N?`A?Z@v@AlJAxA?@?dPEzWGnBAD?H?V?fB@P?`GAh@?~@?bAAh@@PAZ@T?V?T@X@`@@P@ZBT@R@RB`@Df@Dr@Hh@H^Hh@Jj@J`@Hh@L^Lh@Nl@Pf@Pd@N\\PVHd@Pp@\\d@T`@R`@Tb@Vb@T\\Tj@`@jEzCz@j@RLx@j@v@j@j@`@l@`@h@^fAt@z@l@jAx@d@Zb@Zd@\\d@ZzAdAp@d@HFb@ZJFpBvAzDlCbC`BhAx@|@l@jBpAx@l@v@h@x@j@x@h@`@Zh@\\d@\\t@f@h@^`@Xd@\\lAx@h@^tCrBz@j@d@ZxCrBjDbCx@j@^VBBlAx@v@j@d@Zx@j@pBrAjGjE~AhAz@l@`@Xf@\\b@ZVN\\Xh@\\`@Xf@\\b@ZVNHFVR|@l@d@Zd@\\t@f@`BhA|B~A`Ap@jAx@fAt@nAz@pBvAbAp@ZTdBlAfBnAf@\\lBpAfAv@b@ZLHTPf@\\\\TVPp@d@XRdAt@|AdAv@h@b@ZXR`@X`@Vv@j@BB`@V|B~A|@l@vBxAVRPL~B`BbAr@p@d@ZTVN?@ZRp@f@|@l@~AfAzCtBfAv@x@h@d@Zx@j@v@h@RNr@d@fBnAPLd@^RLPNt@l@XTJHTR`@\\p@n@JJf@h@PP\\^B@`@d@LLLPLLFFPT\\`@^f@LPV\\f@p@`ApA|@nAn@|@Z`@DF\\d@^h@\\d@l@x@FHd@n@r@`Aj@v@`@j@~@pAl@z@n@z@n@z@l@z@~@pAn@x@HLFH~AzBHJl@z@r@~@nAfBnBlCvAnB?@B@TZ?@r@`Al@x@bCfDz@lAfAzAJL`ArA@@BDRV?@@@BDj@v@tAjBXb@f@p@^h@rAdBRXjA~An@z@PX~@nAh@r@BDLPJNx@hAFHZb@V\\|@nA~@nA|@nAPV\\d@TZBBR\\@?^h@\\b@NTNRh@t@p@~@TZb@l@b@l@HJ^f@bAtA\\b@~DvFf@l@`@j@`@l@DDxApBtAlBV\\zArB~AzBpAfBj@t@\\d@NRd@n@tHhKjCrD`ArAHJ`CbDNT\\d@l@x@~AxBhCnDPTFJZ`@FJtBtC@@pBnC`ArAd@n@t@bAp@~@\\d@nTjZ|AtBRVJPx@fAX`@DDlAbBPVjFjH~@nAJNX`@X^|B~C`DlEp@`Ap@|@LPDFRTpGzIzAvBjFjH~@nALPX`@bAtAlBjCRVl@x@l@z@lBhC`BzBTXh@r@nBbCl@r@p@v@n@r@Z\\RTnBpB`@`@fBbBb@`@tAnAv@p@`BtAtLhJ|AjAzBfBt@j@B@x@n@LJ`E~CfCnB~BfBBBbCjBxBdBl@d@\\V~BhBhDjCvGdFhA|@JHzI`HnCtBn@f@h@^TPr@j@JHFDRNbBrA@?vC|BnDpCzFpE~@r@@?RPd@\\`Av@~@p@dCnB`Av@l@b@v@n@FDXTNJbBpAfBxATPbBnAzEtDrAbAz@p@lBxA\\XzDxCf@^t@j@\\VdBnAn@b@\\V~AfArChBh@\\x@d@PLv@b@?@TLfC|AnAr@hAp@rBlARJNJ@?NJBB@?d@XRNRJPJPLTLNJZPrEnC`FzC`EbCnQpKtBnAhDrBPJzMbIzFhDtAx@rCdBtAx@lEhCPLf@ZPJtBpAzA|@|CjBnAt@x@d@x@d@nDxBdCxAXP~@j@xBrAxFhDRLv@b@nAv@vG|DfBfAfBbArBnAFD`CvApAv@jAt@lAt@v@f@jAx@`Ap@b@XbAt@t@h@`ChB|QvNtCzB\\XtDvC\\XrFhEzAjA\\VHHfAz@nA`ABBBBB@rB~AlDpCnItGvBdBvC|B^VjJnHvp@jh@fWdS|BhBhF`EvDvC`@\\|@p@dAp@f@ZPJd@Xz@d@j@Vb@RRJh@TRHf@Rh@Ph@PRFTHTFRFTF~@TTD|@PTDj@Jj@Fh@HTBTBTBj@Dh@BTBX@d@@V@l@@`A?tCAjHGb@?fZU|@?p@ApGExDEfECH?jAAvCCxAAf@?lGGlDCbCAjDC~EE`IGb@?@?v@AfIGl@?~@Al@Ah@?bAAbJGLA|BAvECtDE`@?hHEhDCf@?B?Z?|CCx@ATA|@AjJGlAAnAApDA@?b@?V?`@@lAAF?z@A|GCj@AvCE`B?N?PAN?N?X?b@AhAAvBE\\A\\AN?rBClAA`A?zAA~@AZA@?`@?@?D?fCC`@?tAA|AAlAAhBADA\\?\\?D?bBAj@A\\?n@A\\?b@AdA?rAAf@A~@A\\?h@?jAAv@A|BCtBC`BCn@?l@Ah@AzAA~@A~@AbAAdAA|ACpAAfAA^A|AAfACd@?nBCbCCfCCfEEvACj@ArBA|@AjBC~@AlCCdCCdBCL?jAA@?n@Al@AbCCdAAfBCjAAf@AtCCvBCH?|EGbCCrCCd@AbDE~@?pAC~@AzAAT?XA`AA~ACb@?h@Al@?xBClACvAAhAAx@AlBChBCjCCf@AD?\\?lACf@?dEExAChDErBApFGpACvAAl@AtEEd@AhAAhBCvAAx@An@At@AhAA~ACnAAlA?vBAz@A|AAtA?b@AL?xCAbEA~C?pFAfAA`DAlC?xCA~A?fHCV?vA?l@?xAAbC?l@?`@?P?N?L@bBAb@?fA?dAAbGAfCAnEClB?@?hB?~IC@?D?X?`EArA?bB?\\?b@?h@@v@@L?l@@P@\\@x@Bf@Br@Br@BdAHX@H@X@d@Dr@Fl@FP@n@FfALx@JF@ZBx@JpANF@bBR@@bAJ@?n@HTD~APH@b@Fb@DLBpBTL@p@Hf@F`@FjANtANtSbCtBVp@HD?F@LBL@l@DTB^BT@T@L?@?P@H?dA@b@?|@At@CPAPARA@?zBSz@Mp@K`@Iv@Qb@KbAY|@Y^ONEJEDCNGPGtAg@NGLG@?PGLGjBs@dAa@fAa@@AnAe@xB{@d@QTIpCeALGbA_@@?b@Qv@[`A_@|CkAlCeArDuAvAi@hAc@zB{@dBq@zBy@n@U^MTGpA_@n@Ql@MZIj@KREXEl@Mb@GXE^GD?h@GTCn@GZC^E@?NAVATA|@E^Cx@Al@AlA?l@?j@@fABd@BN@|@DbAHVBF@H@v@H\\DVDx@LB?f@JLBTDXDVFRDb@J\\HpA\\x@T\\L`@Lf@PZL\\LXJZN\\NVJlAh@f@Vv@^PH\\Pt@\\NHVLb@R~FrCnAl@x@^THf@Rz@\\z@Xh@Ph@Nh@Nf@LTDVFj@Lz@Nh@J|@Lj@F~@JTBF@F?RBD@D?b@DxABX@f@@Z@b@?V@h@?ZA\\?~@AR?zACrCCvBCd@?jAAR?j@Ap@?fBC|CCJ?nAAxCCrDErEGxAAxBC~EEnCCd@?l@AfCCpHG`EEV?xBCv`@a@nUSb@?jACV?f@?j@AHAd@?lOO^?dAApBCrCCpBAbCClDEbCCxBAbCC~CEtFEpAA`AA`AArAAX?f@?X@f@@j@@j@Bh@DN@ZBVBD@N@j@F`ANTBf@J`APf@Lh@L|@Vh@Nh@Pj@Rh@Rz@^d@Tz@`@|@f@d@XDB`@TPLJFFDx@j@PLf@`@@@ZVB@v@p@^\\r@p@|A`Bp@r@@@fBlBDDtAvARTTTzA~AjAnA@?`AdAl@n@RR`@`@x@v@^\\b@^r@j@TPb@ZDDdAr@RLf@Xd@XRJd@VTLRJf@Td@RTJv@Zl@Rp@Vt@Rh@Nl@N@?h@Ld@Jl@J^Fh@J\\Dt@Hv@Hl@Df@BfADnABV@T?~@A`JChCApEAfA?bBAT?\\?j@AnFAP?nHChEAzAApLCxOEtECzEAF?r@?bJEpB?xB?vA?x@?fA?B?vDBv@?T@F?bCBD?Z?Z@N?nEFf@@xFLb@@xBFR?d@BlDHdGLdDFF?zBB|CBf@?~@@vC?dC?n@?x@?l@?tCCtDE`YWb@A~CCR?dACN?z@A|@Ax@?RAfFErHIhGGT?DAlFEpHEfGErHCpNEn@AfA?bICx@?hPG|AA`JClJCnTIxBAfFAjAAn@Ab@?@?tBAvEExGEdFElHIb@?xDEt@?`DC@?xBCbAAjCChHEb@?vOInAAxIGd@?jAA\\?hAAbBA`ECP?jBA|AA`@?fBA~CCv@AhECL?J?rAAZ?zAAdFCxBCjA?t@?vBCxFAbBCnACbDAxHEhKGdIEdMG`WON?fDAl@A`BApBAv_@UrGCtLI~HErECbAAh@?dGEfNI`GC`EBbA@j@@H?n@BzADf@@d@B`BHh@BbAFfAFl@D`BNdAJF?xANrBTt@HpMvAtEh@vANnALF@hBRB?^FB?dBRB?^DB?fKhAF@D@L@d@DB@XBl@HrCZV@vBVb@DjBTjBRhAJr@JJ@`AJvAN~@Jj@FjBRVBNBf@Fl@FpAL|@HpAHdAFbAFt@DR@j@@Z@xEFF?d@@tA@lB?P?vE@~A?tA?|@?fC@J?`@?L?fA?p@?hA@p@?z@?pC@vA?`B?bC@fA?b@?bA?~B?zA@h@?tA?`A?vA@b@AhA@vC?`A@`A?`A?`A?`A@~@?vA?h@?`A?j@@j@?j@?~@?V@tB?bB?vA?xC@R?vA?R?lB?nB@jB?`A?^@`@?jB?vA?`A@~@?`A?j@?j@@j@?j@?j@?~@?l@@h@@bAB~@B`ADj@B~@F`AHj@DJ@r@HnALH@b@FXD~@N~@L~@PhB^pAXbCl@f@N|DlAdF|AzBp@|Bp@xAb@xAd@nBj@rAb@dBf@lA^vBn@fA\\nDdAxBj@rAZx@Pp@Ld@Jb@Hr@LvARh@HTBf@F`AJVB~@Hh@Df@DnBJV@n@BpABn@@^@fC@xL@vC?hA@hA?|F@jC?`m@FvE@lO@lD@lB?P?Z?rA@xA?f@?X?H?v@?~@@j@?j@?j@@P?j@@h@@h@?`@@J?h@@\\@|@Bl@@`ABF?T@r@Bv@DfADD?`GXjADfBHT@d@Bf@@`AF~@BVB~@D~@DD?D@b@@T@j@BhAF|@DdDL~DR~BJrAFhBHB?\\@N@D?\\BX@T@f@Bp@BrAFb@BdAD`AFd@BX@`AD`@@`@BV@P@d@Bn@Bj@BfADnAFdADb@B@?l@Bl@DbCHtAFf@@@?T@l@@T?j@BR@nBBjCBH?X@b@?t@?P?b@@x@?R?n@?\\?^?`@@B?Z?\\?`BBlCA@?fA?pC?xG@L?H?lA@D?D?hBAxA@P?V?F?B?bA?jB@|A?L?jB?\\?dB@n@?D?bC?\\@v@?D?X?b@AnC@^?F?fB@N?zE@P?b@?V?bC?zD@jB?|IBv@?tB?vE?dA@rB?J?P?lA?lD@h@@X?hB@jA@`@@h@@R@X@b@@T@j@Bj@BT@ZBp@DXBl@D`AHt@Ft@Fz@JbALb@DzATtARvATdARd@HnAVB@nAXtAZlA\\B?~@V\\J`@L`AX`Bh@LD`@Nv@XBBNDfA`@JDx@Zb@Rr@XZNx@^RH`Ab@fB|@~@f@TLl@\\z@b@p@`@TLVNd@Z`@VpAx@d@\\t@f@bAp@v@j@pA|@f@\\v@h@ZVXPpAz@|B~A`C`BpA|@dBjAh@^~@l@hBnAzB|AVPDDvA`Ad@ZPLLH\\Vp@b@`Ap@tA`A`C`BZRp@d@bAr@JHn@`@r@f@hAv@FDVPbAr@d@ZnAz@r@f@lBrArBtAh@^VPpA|@h@^FDZTdAr@n@b@NJxAbAf@\\XR~@l@`@ZZRbAr@v@h@b@XjAx@JHNHn@b@\\VFBt@h@RNhAv@\\Vt@d@^Vz@l@^Vv@j@RLfAt@hAv@XTVNTPTNx@h@RNHF^VNJz@j@r@f@ZRHHRNNJh@^z@p@BB`Ax@XVVTBBZZLLbAdA|@`AnB`CnAbBp@`Ab@p@DFLRdAjBXh@\\j@bAtB`@|@|@vBb@dA`@fA^hA|@rCZfA\\nAl@hCTbAP~@RbAH^RnAHl@Lv@@LHh@@BNpAHp@BXHx@@JJdABTB^Fv@Fx@Dt@Bh@DbADv@?D@l@Bz@B~@J~EPfKJ~EBrBFhDFdDDrAFlEHbEBvABpA@x@Bt@@z@@r@Bv@@z@@X?ZB`A@l@BjADtCBtABx@@nA@z@@rA@v@@rA@x@@fE?v@@v@?B@nE?|@@^?hD@z@?^?lA@nBBtH?x@?v@@jB@~D?dA@x@?V?Z?X?l@@h@@jB@t@@|@@p@@`@@d@?f@@`@DnB@h@@b@@\\Bz@DtABd@@l@JbCFfBFxABXDnABb@Dh@@\\BZ@^FdAHlABd@BX@PBZ`@vG@TBV@PV|DJzANjCNzBFdALpB@RB^@JBl@VxDLpB@ZJ|AHtAFt@Dz@BTDt@BZ?DFx@h@rIVxD@LDn@HzAB^LjBLxBBZF~@^fGHfAVjEJfBD|@HbA?DNrBRvCHrABXDv@\\dFDdAJdBRxDDj@?Bd@jHLrBNjBB^BVDz@Dr@B\\@ZD`@Dp@@ZB^`@nGZ|EVvDJdADl@BXRpBH|@RlBFf@Fl@h@bEBRHj@?@Hj@BJRxARnALv@Lt@RjA\\jB`@vBv@hELn@VpAJl@Nv@Nv@P`ABHNx@Lp@TlALt@Nr@TpA\\hBLp@Lr@Pz@Ll@F^Lp@TnALr@FZH\\~@`Fj@|C\\hBjAnG~@bFv@bETjADTn@fDLv@Jf@BJLp@FZLr@FZFXLr@DPHb@Lr@FXFXHf@BJTpAVnAJn@j@vCbAlFp@pDp@rDrAdHh@tC~@bFJj@bErThAjGv@`ETnAFXFXNt@b@bCXtA@F@DH`@Nv@@D^pB@Jl@~Cd@bCn@nDd@`Cd@dCBPP`AH^TnAj@vCLp@h@rC`@pBH`@X~A@HvAtH@FLj@DRj@zCNx@z@tETnAjAhGTjARlAn@fD\\fB\\fBFZHb@BHBPTlADTJh@N|@FZ@BJf@Lr@Hb@DRFXFZBL?@Hb@Lp@H\\BNJh@?@DPLr@Pz@TlAr@xDPz@d@bCHh@XvA\\hBNz@FVTlAFZd@fCn@lDf@lCTlAd@hCtAjHLp@RhAp@vC^`B~@hDd@dB|@rCNf@f@zATn@Tn@Xv@Rj@LVJVXt@FNLXz@rBLV|@nBb@|@z@bBl@hAZh@`AbB\\l@\\h@Zf@NVp@`AdAzAPVLPPTNRNRLPPRNRNRNPNPPR`@f@`@d@^b@^`@XXVZ^^d@f@r@p@PPRP`@`@dA|@RPb@^PN@@PLPNPLb@\\|AjANJRPRLb@ZTLPLRLb@X|@h@lAt@b@TRJRJRJRLRJTJPJd@VTLRJRJRL|@b@RLpAp@zAv@nAn@z@d@TJx@b@lAn@jCrAzEfCdB|@rDnBJFjB`Al@ZLF`@T\\PbIhEh@X~Ax@p@^tAr@p@^n@\\tAt@rBdAPJPHNHNJjB`AZPfCrA`Bz@`@TXNdG`D`Af@rKtFhAl@ZPZR~Az@nAp@rEbCTL\\Ph@XlAn@f@Zd@X^VNLZVPLb@`@NNPN`@`@Z\\FFFHJLHHNRPTZb@PTZf@LTNVZh@d@~@d@dAJVJTLZHTJZRj@Tr@VbALb@Ln@Lf@Hf@Lr@Jr@Jt@D`@Hr@@FBRBXB^BZ@^@JBd@@X@\\@\\@X?X@\\@z@?n@?@?B@f@@`BB`FDfG@dA?l@@|A@p@?V@R?n@@~A@b@@tB@hC@tABhCBbEFdL@jC@fB@`C?@@l@JtRDbFFdMBfC?z@DbE@~B?l@@nABhD@lB@|@@r@@pB@dADvG@|CDfF@dDBfDBhD@pB@tBBbD@vA@v@?tA?pBAfB?F?d@Ap@CpAAv@Ct@Az@A\\Ct@AZEx@Cp@GtAKnBEn@Cf@Gr@CZCZWfCWhDUdCATCZCXE\\CXGv@Gt@C\\It@Gx@I|@ARAFATADGt@Gv@Iv@CZUpCIfAQnBIhA]`EObBM|AEj@OhBKhAc@hF?BGt@Gt@CXAHCZEh@AVEf@ANA\\C\\Cd@AZAZARAf@A\\Ar@Ah@?N?JAx@?F?j@?@?n@@d@?x@@^@Z@dA@Z@D@Z@T@\\@\\@ZBZ?D@VDz@FxA@DLzC@ZHdBF~AVdF@NFfABr@@VBj@BTFbB@^NdDLvCBn@@Z?@HvAFzAJjCDj@LfDNlDD|@L~BFhBB\\@`@@JBn@FlATnFFfAJhC@NF`BDv@HfBFvAJxBL`DJ`CBb@HpBB^J`D@\\Br@FvB@n@?@?J@N?T@F?V@V?VBbA@n@@|A@l@?ZBzE?vC@dABjN@hE?x@?F?d@@|A?H?d@?~C@hD@rA?hB?fABtF?hB?rC@p@@jC?xB@lB?xB?vA?v@@x@@fI?fC?B@H@~H@r@?rD@tB?\\?rB?^@lC?lA?B?h@?D@pB?jB?bA?R@vA?\\@~C?fE@xC@bC?B?@?zA?~A@h@?P?@?\\?t@@xA?f@@tC@tFB~L?lE@dD?|@@~@?pB?jE?b@?|@@dC@nB?rA@X?\\?fB@zA?Z@zD?d@?`B?N?P?D?tL?j@@hBB|F?@BjAH~DFvBLdCJvBB^BT?L?BDv@Fv@Dl@H|@H~@Fn@BVFd@Hp@J~@Hh@Nz@Hj@Hd@DNBNz@hFfBtIRx@`@dBd@hB`@tAL`@^nAb@pAd@rA^dAf@rA|AbELZdAlCvBzFfDbJbEtKt@nBN^?@LVhJtVpMl]bLlZzLt[bFzMlA~CPf@`@dAhB|EJX~BlGj@vAFPHT@?Pf@d@lARl@b@hAf@pAPd@jA~Cz@~BL^Pf@`@nAHZNj@BH@DFZDNH^\\hBTtANbA@N?@DZBPD`@Fj@@JHtAZnF@ZXfFRxDf@jJn@`Lh@hKnAvUBd@RbD@XBj@j@zJfAhSBd@NdDLrBHpAHdBRxC\\xCNdA\\`Bb@dBd@xATl@l@tAr@xAh@~@x@hAJNr@z@\\^JJRP`@\\ZVZVTNNLNJ^X@@ZRbBjAvA~@HFDBzDhCXPrKfHlAv@fElC|A~@fC|A@@HFNJ@@p@b@fAp@zDjCf@Z~CvBtChBNRx@h@fG|Dd@ZbDxBzMzInAx@z@j@fFdDhBlA|@j@~GvEb@X|JtGp@b@?@tNpJrExC`C|A~CtB@?~AfAvBtAb@ZfAp@vCpBbC~ADDXPDBHFr@d@tE|CzE~C~EbDzAbAdG~DdAr@p@`@RNLJHFXP\\TVPLHx@f@lAv@rGhEzAbAdAr@`CzAxHdFPLJF@@bElCdAr@tDbC`An@PLn@b@rFpDvDfCpH`FdBfA\\V^TrBrAxGnEdAn@dIpF`C`Bb@VxA~@b@XvA`AvCpB^TRLbEnCb@ZbBjAnAv@r@h@r@h@n@h@f@^TP@@TR@??@@?@@vAhArAv@bCjB`BpAJJLHxC|BnCvBZ\\"
                     },
                     "start_location" : {
                        "lat" : 40.96053,
                        "lng" : -85.2921341
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "15.9 km",
                        "value" : 15899
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 560
                     },
                     "end_location" : {
                        "lat" : 39.9239389,
                        "lng" : -86.22141929999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e200\u003c/b\u003e to merge onto \u003cb\u003eI-465 W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "m`prFdrelOb@n@l@d@dCxBf@d@XV^^\\`@JPB@nAdCFZH\\Rt@Nj@FZDX?D@D@NDV?@?@BX@N@HBZ@Z?Z@B?V?Z?ZAZ?`@ATCZCZ?FCRAXCZI~@Cd@Ch@OnBCZC^ALIlAALIx@OjAMn@I\\CHI\\M\\GNYt@KRWh@Q\\]p@ED?Bm@dAaAhBS`@{@|Ag@~@e@z@Yj@[j@Mn@MT_@p@_@r@SZoBnDiCvEOXU^{@~AIPa@r@GJg@z@u@tACDo@hAOV?@EF?@CDsC~E_CtEyAjCaAdB[j@m@fAUb@m@fAm@fAiAjB]n@uBnDo@fAuBnDIJaApBWf@sAbCkBfDc@v@e@x@CD{BbEg@`AGJy@hBKVYv@_@fASl@CHUv@Oj@a@hBERGXEV_CrLkC`No@hDaArEKd@Kn@I^Kh@GZI^K`@Mn@ETCPIf@ENMl@s@xDc@zBIZk@xC[bBOn@G^_@nBWpAKb@CLKh@YtA_@lBSdAG\\YtACLQv@kE~T]dBWrAa@tBSjAg@bCc@|B_AzEAJI^Ot@Kj@e@~BAFI`@y@hECHc@xBe@`CABIf@A@WtAUdA?DGX?@A@?@Kd@AF?@?@ERABAFADKh@g@bCAHOt@SfAMv@e@`CmAdGI\\wAfHsBjKm@|CI^CHERI^S~@wCjOs@nDWvAg@fCSdA{AzH]~A?@_@pBeAnFQ|@y@hEMh@ETS`Ae@dCSbAYvACP[zACN_@lBKj@ENk@~COt@AFQ|@cAfFsBfKOx@Kl@EXGXCTAFG`@Id@E`@G`@EZ?BEXCRCXEb@Ir@CVKjAEf@IjAIlA?DEt@Cd@Cx@Cn@AFCz@CfAAj@?R?@ArABrC@`GBnF@`I@zD@lC?X@rE@dD?xB@jB@jG@|A?Z?H?B?B@hB@xF@hC@nC@nE?lABdF?|A?l@BjF@jB?j@?jB@~A@rFB`H?|A@fA@rA?N@FDrABl@NnBVvBVzALl@DRR|@l@vBb@nAd@fA\\r@NXDJLTn@fAtAjBnE~F`@f@DDJLHNNTb@l@n@~@V`@h@~@h@fAVp@Th@h@dB\\pAXxARdALdAJ~@Ft@Fp@FjABrA?Z?VBtD@jAHpP?l@JbU@bBDxG@hD@rA@dB@pD?HBhF?b@@n@?l@@fB@pABvG@z@B~F?J@jBBfGFvL@l@BfFDxJD~JBzE@r@@lDBlF?HD`FBlI?B?h@?BBdFBrC?`@@tA"
                     },
                     "start_location" : {
                        "lat" : 39.9003929,
                        "lng" : -86.0497874
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 635
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 39.924596,
                        "lng" : -86.2287389
                     },
                     "html_instructions" : "Take exit \u003cb\u003e27\u003c/b\u003e for \u003cb\u003eU.S. 421 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMichigan Rd\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "sstrFzbgmOG|A?vB?j@?n@?j@?LAlA?H?z@?j@?z@ArAA`ACz@Cb@CXIfAGZMv@Kd@a@lBO|@EZE^Cd@?d@@l@@Z"
                     },
                     "start_location" : {
                        "lat" : 39.9239389,
                        "lng" : -86.22141929999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 573
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 75
                     },
                     "end_location" : {
                        "lat" : 39.9199026,
                        "lng" : -86.2267001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-421 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Michigan Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow N Michigan Rd\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wwtrFrphmOJn@lCgA@?DA`@O@A@?TK~B_A`C_AhGcCx@[fC_A"
                     },
                     "start_location" : {
                        "lat" : 39.924596,
                        "lng" : -86.2287389
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 39.9197449,
                        "lng" : -86.2277131
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 2nd cross street onto \u003cb\u003eW 92nd St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kzsrFzchmORZ@Z@Z?NBx@@R@V"
                     },
                     "start_location" : {
                        "lat" : 39.9199026,
                        "lng" : -86.2267001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "43 m",
                        "value" : 43
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 39.91935549999999,
                        "lng" : -86.2276967
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kysrFdjhmOL?R?h@A"
                     },
                     "start_location" : {
                        "lat" : 39.9197449,
                        "lng" : -86.2277131
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "800 km",
                  "value" : 800193
               },
               "duration" : {
                  "text" : "7 hours 28 mins",
                  "value" : 26898
               },
               "end_address" : "8600 Ward Pkwy, Kansas City, MO 64114, USA",
               "end_location" : {
                  "lat" : 38.9720378,
                  "lng" : -94.6055884
               },
               "start_address" : "3871 W 92nd St, Indianapolis, IN 46268, USA",
               "start_location" : {
                  "lat" : 39.91935549999999,
                  "lng" : -86.2276967
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "43 m",
                        "value" : 43
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 39.9197449,
                        "lng" : -86.2277131
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e toward \u003cb\u003eW 92nd St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_wsrFbjhmOi@@S?M?"
                     },
                     "start_location" : {
                        "lat" : 39.91935549999999,
                        "lng" : -86.2276967
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "75 m",
                        "value" : 75
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 39.9198003,
                        "lng" : -86.22684079999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eW 92nd St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kysrFdjhmOAWASCy@?OA[A["
                     },
                     "start_location" : {
                        "lat" : 39.9197449,
                        "lng" : -86.2277131
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 600
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 93
                     },
                     "end_location" : {
                        "lat" : 39.924596,
                        "lng" : -86.2287389
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Michigan Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wysrFvdhmOBe@Kk@WHgHpCiDpA[L_Bp@}Bx@IBE@GBYJEBIBqCfA"
                     },
                     "start_location" : {
                        "lat" : 39.9198003,
                        "lng" : -86.22684079999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2384
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 118
                     },
                     "end_location" : {
                        "lat" : 39.926926,
                        "lng" : -86.2558454
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eI-465 W\u003c/b\u003e toward \u003cb\u003eI-65\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "wwtrFrphmOJn@VrA|@~EF\\Jl@Hh@@RBR@DBf@Df@@h@@v@FxC?@@V?`@@n@@lB?P?l@@b@?d@?jB@dA?J?N@JLt@HxQBnG?Z@tBAbAArACp@GtAInAIbAGn@CNIz@CLSxAERi@`DUxAKd@W|AcAjGa@~BABIf@o@tDGb@SfAo@|Dq@dEkAfHUrAUrAIh@AD?BKh@?@Ox@]tB"
                     },
                     "start_location" : {
                        "lat" : 39.924596,
                        "lng" : -86.2287389
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "17.7 km",
                        "value" : 17668
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 625
                     },
                     "end_location" : {
                        "lat" : 39.7845276,
                        "lng" : -86.2706147
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork to continue on \u003cb\u003eI-465\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "ifurF`zmmO_@pBWvAa@zBe@bCc@bCCJUnAAFKj@G`@Ml@AHADa@|BYvAIb@UjAI^Mj@CHGPK^IVKXKTKXGLEFKT]l@i@|@k@`AYf@]l@OVKVKTA@IXITCLELCLAFCNCNEVCZC\\CZ?VAD?Z?J?N@^@ZBXBZF\\DXFZHXHV@DHT@DDJHPJTDHFJLPDHFFLPHHJJPPPNRLRJRJRHNFB@NBDBTDTBNB@?X@J?H?D?H?F?RAVCl@IrA[xBi@tA[d@MRENCHCRCTCRAPA\\CTAR?L?N?B?H@d@B\\BRB\\D\\H\\F@?hB`@`@HVFhCj@vBb@J@LDPBLBJBJBFBJ@^HfCb@xBXnBPd@Dh@D~AFB?nCDdC?~B?z@ArA@lDAzF@|F@zF@~@?J?@?@?^?B?lB@bIAzC@xA?xA?vE?zO@dFF|B@v@@fA?hF?~GAb@?r@?tGCh@?zBEtBCdDE|BEdCEnAAbFKxJQzGMVEJA`BE|EI|MUp@A~@CzDEJA`@A@?h@A@?P?^AxFIzFIjBCbGMvFExCInBCzGKvCCp@A|CCP?T?T?Z?\\DTBNBP@ND^BRFXDZFXJRDZHVLRF`@P^NVN`@Tf@Z^V\\TRPLLNNLJPLPRZ\\NLNPLNJLHHRVj@l@NLLPVX?@DF|DrEl@r@LP`FfGb@h@|@fAdBnBRTNPLLLJJLJHJJNJNLLHNJLJB@DBLFHD@@FBB@TLTJRH@@VHTHPDPFRDTDVFXDVBTBT@`@BV?T?T?TAP?XAp@GbAKJ@PDn@MtDe@^Ej@E|AMhAIVAj@C|@Cx@Ct@CbAAvCAjDCF?X?H?@?TAB?zPIz@BpCAnJEfFCpIGlAAjBA^?R?`DCzBCzDApEEP?dAAd@?b@A`AAp@?D?jDCn@AxAA~GEvBAV?R?bAAnGEb@?~GEdJEdEEv@C|GEb@?hAAb@?b@AjKEJ?@?d@?@?|ECdICjBA~GAr@?hLEdICrKM\\CdBApHEvECb@?vECb@AzFC`IEbCCb@?lAA~@AfGC|@?l@@P?j@?@?@?H?@?\\?b@@dEITAbAAvAElAI^Cn@El@ETCvAObAMrCa@|AWxBk@XKP?~DoA@?pDqAdCcA^OhAg@|HaD|DmAjA]FC|Aa@l@Kb@IvA[n@M`BYzAUbBSvAOhBObBO"
                     },
                     "start_location" : {
                        "lat" : 39.926926,
                        "lng" : -86.2558454
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1691
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 39.769457,
                        "lng" : -86.26888610000002
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eI-465 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eI-74\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "ilyqFhvpmOlAElDIlECvEAb@?T?zCCdA?dAC@@~@?z@AxGApP_@`@AvBOVCb@ENCt@IDAn@IjCa@^G`Ds@vIcC"
                     },
                     "start_location" : {
                        "lat" : 39.7845276,
                        "lng" : -86.2706147
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.5 km",
                        "value" : 5466
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 191
                     },
                     "end_location" : {
                        "lat" : 39.7207485,
                        "lng" : -86.26463769999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eI-465 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eI-74\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "cnvqFpkpmOh@UfH_CnAa@tHcC~Ak@b@Mj@QBAj@Q@AzAe@vIqCf@M`@KHA`Ck@JAJCf@Ih@KpAQFAHCt@Iv@Kx@Kv@Iv@Iv@Gl@EHAv@Gz@Ct@Ex@ErAC|ACxB?b@?b@A~GA`@?jGAfB?fA?x@AhBAL?zF?pC?L?D?V@`@AH?L?B?\\?jBAnC?T?tA?`@?`C?|CArC?lC?`A?\\?`@AtGF|D?@?jC?@?b@?@?`@?fSApDC|AC~AAzAAnA?X?D?r@AvCA`HB~@?`A@@?J?N?B?B?F?@?tBArFCL?~@?`B?vA?j@?dB?^@p[A`A?"
                     },
                     "start_location" : {
                        "lat" : 39.769457,
                        "lng" : -86.26888610000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "220 km",
                        "value" : 219673
                     },
                     "duration" : {
                        "text" : "2 hours 0 mins",
                        "value" : 7216
                     },
                     "end_location" : {
                        "lat" : 39.0982066,
                        "lng" : -88.57804480000001
                     },
                     "html_instructions" : "Take exit \u003cb\u003e9\u003c/b\u003e to merge onto \u003cb\u003eI-70 W\u003c/b\u003e toward \u003cb\u003eSt Louis\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Illinois\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "u}lqF~pomOPJHDLBzADbDHN?dA@xA@b@?`@@X@lEJh@@D?H@P@RBP@LBD@PBB@D@HBXJHBTH@?TJTJRJb@VVRRNBBDBb@ZVPZRBB\\VFDRLzAfAb@ZTPJBXJl@f@d@j@NTLRTf@HPHRJ^BD@DFRH^FZF`@BR@L@N@V@T@R?~@@zB?\\FfLB|A?jA@nABtBBpCB|@Bv@Bj@FfANbBBRDd@Fl@PrAHp@\\nBLr@FXDP\\rA`@`BHVNh@b@pAN`@j@vA\\t@jA`CR`@PVHNx@nAzB`DRX^f@X^V`@VZHLh@r@DFj@v@r@`Aj@v@DF@@v@fAJNX`@^f@@@PTFH|AvBDFdB`Cv@dAPTDHDDDBPN^h@V\\l@v@vAnBJPHJZb@X`@LNJNX^jA`BVZ@BX`@xCbEHL`@j@~AxB|@lAxArBHJRXjCnDX`@`@l@j@v@Z`@pAhBn@`AVf@d@|@vAlCl@xAfAlCRp@HVXx@n@|BdAtERXFP`@hBNn@tB~If@tBXt@R`AfAdFb@tBtAzGJd@h@fChBbJ^~AxBpJb@hB`@~AVdAFR`@~A`AnDf@dBRn@?@@BnC~I\\fAl@jB~AzEb@pAPd@nB`FhBvEzCxHx@xBRf@Pd@Rh@bAfCrAxDn@nBRl@BF@BxBpGnDpKn@jBz@fCNb@v@xBb@nAl@dBdA|C@BLb@BDnAxDrBdGnA~Dr@rBjBpFh@|AdBdFFRBF?@tA|DfAfDXx@z@fC`AxCFRFPFRb@pAh@fBj@hBt@dC`A~CRv@\\jAlLfa@`AfDjAbENf@HXFTx@rCn@vBBJHX@@Lb@J\\`AfDl@tBNd@^nAHXDNVx@Pt@`BxFDLXbATv@r@fCJ^r@fCX~@@Dd@~ADNx@vCz@vC`AhDBH?@h@jBp@zBDPbBvFJ^V|@dB~Fx@rC\\lAJZ~DnNpCtJxD|MFRHXL^Tx@p@lBXt@Xr@JTVl@Vj@LVBFn@rAr@lAx@rA`A|ATZ|BrDfAfBdUn^nB~C|C|E~@xAhAdBRZt@nAHLNTXd@`@n@R\\X`@V`@Zh@^l@RXLR^n@T\\d@v@hBfDPZ?@~DnIb@hAjAxCr@nB@DRl@d@xADLNf@`@vAh@nBrHnWBDlAhEbClIxK~_@jBpGbAnDdDfLnAnEr@bC|CtKpArEdB`GTt@FPj@lBZ`AVt@p@jBXv@`@bA\\x@`@~@fAdCn@|AR`@zBbFLTnBlERd@\\v@pEbKdHxOpClGnArCxAdD|A`DjA`CRb@Vd@~@pB`AhBT`@@BfCvEpBpDpA|BnDnGXd@?BxBxD|@~A@@P\\FH`AdB@@hArBbElHpBnD\\n@n@dA?@jApBnA~BpBjDlC|E`BrCrDtGtBtDBD^r@nA`CbAtBpAnCRf@L\\Zp@f@pAhAvCn@lBj@dB\\hA@BLd@HV|@bDh@zBhAbFBJBHH`@Lj@r@dDNp@ZxAnAbGZtALn@r@dDpAbG`AxEJb@h@fCf@`Cb@tBLn@Rt@dA`FjBxIpAdGhFjVnA`GR`AfA`Ff@`CLj@v@tDfBlIv@nD@FlAzFNr@Hb@`DdOPt@Z|A^~Az@xDp@rCbAbEZnANh@Pr@Nh@V~@^rAf@hBRp@Rv@`@pABL@?Nh@h@hBTz@\\hAd@zApB`HHZDNrD`MbB|F`AdD?@J\\b@zAfArDzAhFNf@nAfEdB`GDJJ\\n@zBnBvGNj@tCxJJZtHrWv@lCRr@VdAf@rBRx@Pv@f@~B^jBLt@ZbB`@bCZrBt@zFtDf[p@xFh@nEZ`C?DFf@@DHj@X`CJ|@p@|FHr@F`@z@dHPvA`@hDDZ@P@Fd@tDt@lG\\hClBbOJn@h@zDJt@Fb@Jt@D\\`C|Pb@|CdBhMt@nF|@tGdCxQZxBL|@dAtHb@dDBPDX`@hCZ`CRxAh@tDjAxHZlBbAxFv@nEJh@@@xAbIFXvAtHdCzMxBpL|CnPNx@jAjGhRjcAF^b@zBLn@vCzOv@nE\\pBZfBDRDXHj@Jj@\\vBVdBHj@DV^fCt@bFp@pETxAx@xFHj@BPd@~CHj@xCjSLt@rAbJFf@bCjPHl@PfAfB`Md@zC^bCLx@DXJl@TlAZ`B`@nBn@hCZhAZbAf@zAZ|@f@tA|@|Bl@|ADJt@dBb@~@BDzAbDzErJn@pAXn@`FbKtF~K|A`Dd@bADJh@jAb@bA`@`A\\~@^dA\\dA^hA\\jA@FXbAT~@V`ANp@Nt@^jB\\nBV`BVdBNrABZBPJdAVfCXrCh@vF`CzVh@nFx@zIzCl[hAlLLxAFn@VhClAhMrBhTFj@~F|m@b@rEtE|e@bAxKrC~Yl@pGf@bF`B`QPjBZ`D^~DFj@fCzWRpB?@@Hb@xDNhAPxA@DZ~BLt@\\zBLr@TnALt@lB~JJj@d@bCVtA|BtLz@nE`@zB@Fd@bCp@lDLj@|@xELj@VvAd@`Cp@lD?@d@`Cp@lD?@FVvCpO`A|ElD`Rl@dD\\tBVbB`@jCPlAR|A^`DvAxLjA|J@F@BD\\n@pFpGxi@|BzRpBtPfAhJ`DlXp@tFf@lEPvAPvAPzAR~Ad@`EVzB\\zCfAdJdC|SxG~j@t@rGHf@Hr@n@tFf@bEb@tD@H`@jDBNVtBRfBLlAJ|@RzARfBv@xGNrAJ|@HbANfBR`DPlEBp@BlA@\\?l@?l@?n@?jC?l@?l@?l@ApDApEAhFAjC?l@?jCAtB?nAAl@?^?L?n@AdCAnB?ZAxD?HA|EA~D?fCCvGAxDAzD?dD?jCAfC?@?l@Al@?l@?bBAzA?|A?|AArBAxDCvOAhFAl@?xDCfIGvW?|AAvGAl@AhF?zAAvGAl@?zDE|QAzA?|AAxDAjC?n@AxD?xDCjGClO?h@?BAjC?l@?|@A|B?|A?xA?@BnA@h@@l@@P@\\@N?DDz@B^Bd@JrAH`AJx@L`A\\jCd@jDxBbP|CdUHl@p@|Ed@bDf@rDHp@lBfNFj@xArKL~@bAdHPpAr@fFHj@PtAVdBRxAp@~EpArJn@rERxAtA|Jl@pE@Bd@jDBPD`@F\\L|@h@zDRtAf@rCHb@t@rDdA|EpGhY^bBbEvQjClL|BbKfC`L`BhHH`@BJr@`DPt@HZVjAZnAXjAZlAPt@d@hBj@zBT|@b@hBl@~BNl@XhAn@dCd@fBJ`@Lh@HZJ\\FZLf@J`@BHDTDN@D@HJ^Lj@\\|A^lBd@hCX|A`@xBRnANv@\\nBDTTrATpATnATrARjAJd@Jl@`@~BX~Ah@~CXxA\\rBVxA^vBv@pE@B`@~BVvAn@nDb@bC^vBX`Bf@lCV|An@lDTrA^lBLp@@DThAVnAFRH^Nt@FVPt@Rt@Jd@J`@Tz@Rz@Tx@BFPr@d@fBNn@Rr@ZnALb@V`Ad@hB\\lAb@bB\\pAZlARr@ZnAZlAZlAZlA^rAXhAf@lBXfAd@fBh@rBBLn@`Cx@zCn@bCZnA\\pAl@xBBJx@~Cz@fD~@pDd@fB^fBNn@H\\@DDTFXLl@H^j@vCXzANx@RlATvAHh@Hf@Lx@ZvBBNpAxI`@pCn@lEDZLv@Jt@XnB`@lCLx@Hj@@Hl@~DBRJl@PhAVjBXhB\\dC^hCfAnH^hCNbANdAXlBTvABTRrAVdBTzA^fCXnBXlBXlBZjBVnANv@^|A@FFTBJFTLh@Tx@^pA@DNf@?@f@~AN`@DNFLFLDLDLLXDJFN\\`Ab@fARj@@Bd@hA?@j@zAJXN^z@zBRf@Zz@n@`Bb@hATj@bBpELZRf@Pd@lA|Cn@bB~AdEfArCrFrNRh@v@pB@@h@rAfAtCHTn@`Bb@fA~@dC`@bAj@xAb@lAb@hAn@`Bn@bBFLbAhCFRb@fAd@jAL\\|EjMFPjAvCDLXr@L^p@bBHRBDd@nAf@pAl@|An@`Bb@fA`@dAp@~AXn@HV@@b@bAVn@Zr@HNBF`@~@Xl@Tj@NXXn@Xj@N\\FNLVLXP^\\r@^t@`@|@^x@f@fAr@|Af@dAXj@P`@Tf@Xj@Xl@LXJTFLRb@`@z@^v@Zn@LXJTh@jAHNVl@Zn@Xl@f@fAf@dAd@bAZp@`ApBfAbC^t@n@tALXR`@Xp@~DpILXn@rAv@bB~BfFv@~AXl@bCjFdDdHn@vATd@JRHPN\\Rb@f@dAb@~@@Bd@bAJVRd@N\\Tl@Tl@Vp@Tn@Rn@Tp@Rn@\\jAZhAPp@XjAVlALh@Hb@Lr@FZBNBFRlAJl@PrA@BD^BLD`@NnAD^BVLpANbBBLZzDb@vEPnBB^RxBb@bFFl@b@`F?@^bE\\zDPnB@NDf@NfBn@|Gn@hHB`@@JDd@NbBD^?FFp@ZlD@FFl@Fv@p@xHVxCPrBDb@@HFn@LvAFl@Dl@Db@RrBB\\Fl@Db@ZvDFj@f@|FBZNzABRNfB?B@HLxALrAFt@PtBVnC^`ELxALrA?B?BRzBFp@Fh@LzAFn@LvAb@bF^`EZjDLzALxAHt@R~BH`ABX\\tDDb@Fv@JnAJz@Fj@?HNjAHl@Db@Jt@NhANz@Hj@TrAXzAJl@Lh@^jBxAbH`BtHjApFj@jC^hB\\`BLj@^dBjArF?@Lj@Rz@`@lB?@zAhH\\|AjAtFn@tCThABLTfAj@hChAjFhAlFx@vD~@nEVjA~@jE~@lEXpAp@tCZnAXdA\\nARl@ZdAr@rBb@pAlAhD\\`AVr@`BxEVp@\\bAd@pARj@f@tAzD|Kr@rBd@xAj@jBPn@Rv@J\\DTHXNp@HZFVR`ALv@Lr@Nt@Jt@Lt@PnARdBNnALpAHx@Fr@Ft@Dj@@ZJhBBt@Bl@Bz@Br@@t@@t@?nA?t@?jBCxB?XCjBExFEpEEpFGlG?FGlH?NAt@AdAEhEIdKCtBA`BExBCtCC~BKxNIxI?`@A\\CrDEhFAhAEhDChDCfDClCCrA?\\ApAEbEGxGCpBErECxCUfWC|BAxCAT?VG|GClCCnBApBCjCCnBClCArBAV?v@CrAAlCARA~@GrHA|@C`DIvHAtAAjAA~@ArAArAAtACnBAhBCtBAx@Av@ArAAv@?v@Ax@At@?x@Av@AT?`@Av@Av@?x@AZ?ZAv@Av@?v@Ad@?PAx@Av@Av@?p@Av@A\\?`@Av@AjAAx@?v@Av@Av@ArAAtAArAAv@AzAAj@Af@?FAjAAhBAtAAx@At@AnBCtAAnBArAA~@AlAArACrAArAA~@AhBArAArAAtACnB?PAl@CdC?v@CnBArAAtAAzAAlAArAAv@@v@@x@@f@@Z@R@^BZDt@Dp@D`@Fp@Ht@Jt@F`@Jl@@JJh@FXNt@Nr@Pp@L`@DPTp@Rn@j@`BtB~FDLj@~A`BxEb@lAd@pARf@Tn@`ArCdBxGjAvF`AfGDb@Hp@n@~FLxBFp@@t@Dv@FrABx@?X@\\Bx@@lA@|@?^@rB?hCA|@@lG?jG@j@?vJ@dI?rX?n@@zA?l@?pF?vN?l@@v@?vW@~h@@nI?tJ@bP@vR?rC@bDBxBDdCDfB@d@FnBFrBJhCTtEJvAJvAbAhMd@jGzB|XJrATpCRpBLxAP~ANvARxARpAPtAFZHj@BJTtARnALj@Hb@RfAPx@Np@XnAVjARt@Nn@Rt@Nl@Tt@Pn@@DNh@@BRr@Rp@Rj@Tt@^fADHXx@b@lA^fA^bAb@jABFh@xA`@fA`@hAf@vAb@nAXr@^bA`@fAb@pAN^d@nA@FRf@Tn@j@|Aj@|Al@bBv@vBh@zA`@fAVt@l@~Av@vBJX^dAl@`Bj@~Ah@zAl@~An@dBv@vBv@xBHRzBjGv@xBzCjI`@jAfDdJbAtC`@hAZjAZhAZlAVlATlATnAPlANrA?@NnALdBFx@NjDDbC@fA?~AA`AGlCKrDGxBq@~TChAAP_@nMG~CCjAGzCAhACfBAl@C~L?|@?t@@|A?bEApJ?@ArLAvJ?l@AdHApB@zA?hCAnF?~A?Z?H?dC?l@?l@AtA?~@?jIA~F?|C?~DClR@x@ArRApMAvOAvl@CfPAtSAx\\?rB?vA?~HAtF?n@CfF?l@Ah@AnBQrNEhBChBMtJA\\GrEEhDEpCSvMElCAhAA|@Cz@?`@A`@CpAArAEnC?|@AZ?fB?JApA@vA?z@@fBFhG@jBBhBBbBFrHB|BDpB@xABxBDxDDzD@bADhD@~@BhC@^?^DvC?@?l@?DDdC?P?BBtB@l@?l@B`B?H@d@BzA?Z@P?N?PDnD?H?FBxCD~C@n@?HD|DB|B?H@d@BrCBnB?PB|ABfC@p@@n@@~A?n@?\\?XAdACt@A\\GrAK|AIz@CZKz@Kx@ShASfAQr@Ml@Ol@s@xBGRQb@O^m@xA}@zBUh@y@rBQ^KXIRcAdCq@bBsAbDUj@INKXs@`BEJcAdCIRq@~A?@]z@IT]x@OZSd@GLEJGJCDQ\\IRm@hAy@~Ag@x@[f@ILEHKNKN}@rAU\\QTGHCDsAbBUX[\\q@t@k@n@cBhByEbF{DdEc@b@[\\[\\[ZEDkCtCeDnDONOP_CdC{@|@g@h@EDUVA?gAlA{@|@}@`Ag@n@UVOTW\\QVCBEF?@EFKNCFA@ABMROXQZS^Wf@Yl@c@hA[x@Wx@M`@Qn@Qn@K`@UbAMp@O|@Kp@Kp@E^Gf@CZCTEf@C`@C`@C`@AXCf@Ab@AZAR?XAV?~@?dA?rE?r@?~B@|CAj@@vF?~B?`D?tB@nB?bD?zE@dN?fA@fA?nF?rJ@xD?zD?l@?rJ@zC?~C?fE?rA@hA?f@?t@@rBDlBB`BJnC@XFtAB`@HvADbALdBFn@B\\BRH`ABVBTBVBVHx@@@D\\@L|@jHVfBHr@f@|DtBdPBNNhAThBNhAThBNhAh@`ENjAx@pGf@xDx@pGj@nEBLD^f@xDHr@D\\RxAPxAHl@Hj@Hj@LdARxAFj@Hl@F`@?@Jt@Fj@Hl@PnA?@Jr@`AxHL`ATdBR~AF`@J|@Fb@^pCXzBBRLdAPpANlAFd@Ff@Ff@Dh@Df@@@Bb@Df@Db@Bd@Bd@Bf@Bd@Bf@@d@@d@@^@l@@f@@h@?f@@|@?|A?@?f@@\\?V?R@V?JBd@Bd@Bb@Dd@Df@F`@F`@Jp@BPFX@FH^H^J^FTBFJ^@@Rt@JZbAhDBFJ^J`@FP^tAZnAT`APn@Ln@Nt@RfALp@Np@D\\RhA^dCFd@PhABVXxBrBzO?DHp@Hl@NlAxAdLl@xE`AtHrCtTPvAn@|EVhBVrBDTJr@Lv@DXLr@HZDVPt@FXFXPr@FT@BHVHZRn@Rp@JXHVHVFNBFVp@Vn@Vl@d@bALXJTLRLTLTLTNVb@v@JNd@r@p@~@xAlBjA~AX^rD`FnCtDZ^r@`AX^X`@hA~Ap@dAR^pA`C^v@~@zBN^Tn@j@hBh@jBn@lCDNTlAJp@Jj@DTb@lDRvBHhADp@?F@XB`@Br@@R@v@@f@@P@l@?z@?^Ap@?ZAt@Cp@?HAZAPAd@Ev@IrAGv@Gr@Kz@Iv@Gh@Gb@Oz@Gb@Kj@Id@Kf@Or@c@fBWdAIVg@nB[pAOh@I\\m@`CQx@GPOr@Mr@Kj@QbAQjAOjAUfCI~@K`BEtACt@Al@Ct@?j@Ad@?N?J?n@@h@?^@n@@l@@^?L@D@V@V@b@Dl@Bj@BZBf@D`@@JDj@Ff@Ff@?DD`@Hb@D^DZHb@Lr@Hh@Nv@Nt@VlATjAjAbGhAzFn@bDl@~Cv@|DP|@Jh@Nv@Lp@Lr@BRF`@Hd@Hj@Ht@Fd@Fb@Fd@D^Fr@H|@JjABX?JHdADz@Dn@B~@Dt@@^Bv@?^@T?V@b@@l@?b@@T?vA@nB?pB?x@?J@`@?vD?@BtJ@zE?dF@vB@pB?f@?vCBzK?DBlJ?`@BtL@vABzLBdPDvN@~B?jC@xB?T@lE?Z@pA?rA@|E?t@?^@x@?V?\\@X?X@\\@Z@Z?N@`@@b@Bh@Bb@D|@Bb@Bb@?@B^BZDr@Fr@Fn@Df@Ht@Hr@Ht@L`AHj@Fb@BNDXDXFXDXDXHZDVF\\BL@FF\\@BDRHZLl@J`@DRNr@p@xCp@vCVlAv@pDLf@z@vDBPH^FXJh@DPPbAN`A^fCJt@DXNnAD\\BZNvABTBXBZFx@Bn@Ft@Bd@Dv@Bt@Bx@@\\Bx@@v@@t@?j@@h@?j@?h@?vB?hBA`F?VAdG?~@?|AAfFAxA?~A?bC?FAzD?pCAfC?vA?^?NA~B?J?hCAfCAhF?b@AhJAlG?`CAbC?v@?t@?h@AbD?X?^?zAAnB?`@AhB?Z?jC?r@AhB?f@?rA?j@AjC?@?dB?d@?hCAzA?D?L?X?~A?dA?TAl@?NAz@?hAAb@?^?HAp@Ap@AjAChAG`DA`@ItCGtBIhBQ~EOzCATIrBKxBC\\A`@GhAAXGjA?LEbAMhCI|AOrD?BQxDCl@OjDEz@GzACf@?DI`BE`AAXAZA\\A^?^AP?R?d@?`@?b@?H?`@?n@@\\?^@X@N?N@`@DdA@R@N@\\Dd@?FDd@Dl@?FRhCDt@\\zE@BDh@?H@P@PBTBZB\\XxDTfDv@lKBZ^tF|@jMJnA?JFj@Dn@h@jHVlD^fFDf@P`C@`@PtBDp@`@|FP`CLfBFr@@Rd@tGVhDJ|AJ|ALzAHv@JnAFd@@NZ`CPvAXfBRfA`@tBx@vDXdAZlA\\hAFRb@tA`@hAd@pADNb@dAb@dATh@Zp@LTRd@R^f@bAf@`At@xAt@xAb@x@BFrAjCHNt@xAZj@r@xA`@r@Tb@?@t@vAf@bAt@xAf@`A|AxCd@~@\\p@Xh@f@bAbAnBbAnBbAnBTd@PZt@xAt@xAp@rAh@bABD|@fBLV`@v@DLj@dAd@~@@BXj@NVJRf@`Ah@bAb@|@^p@f@`AZl@LXTb@@Dh@bALTd@dA^z@P^~@tBxAxDXt@Tn@^hA^hA@@Nh@L^f@bB\\jAv@xCRt@FXDPFXb@nB^fBPz@Jj@?B\\hBZjBHl@Jj@BRVjBTlBTlBRlBJrABRHfABPHjANhCB`@HfBB^J~B?XDtADjB@hABtB?X@|A?Z?`A@~@?Z?l@?n@?jC?J@hC?b@?\\?N@fF?n@?L?jC?^@pA?pB?pB@fD@nA?H?l@@|@BtBDlBFtBBn@HrBDx@Dv@LnBJtALhBD\\@RD`@LrARjBD`@NlAJx@DZVjBXjBTpARlAj@|C`B|IZjBz@rETvAb@|BFXhCtNrApHR`Ab@fC`AnFP|@r@tDb@dCb@dCz@rE\\hBTnA\\jB\\hBp@xDTnAd@dC\\hBb@dCr@xDPbA\\jBFZH\\X`Bd@dCb@~BBP`@xBb@~BZfB^pBZjBd@`CTnA\\hBLt@TlAd@dCTnA\\lBb@dC\\hBl@`DRlAVnAj@~Cj@~CTpA\\hBz@rERnAd@dCj@~CTpATlAd@dC`AlFb@dCd@fC\\hBd@dCZhBd@dCLr@\\jB\\hBTnATnA\\hBz@vEhB|JtBhLbBhJlA|G~@`FbAzEpAvFxA|FjApEf@jBzA`FpCnIhBhFvB|FpA|CP`@Xl@JXVn@HNp@dBb@fAd@fAL\\Rd@LXrAbDp@~AfAlCp@|Ab@bAn@`BhAlCl@vADHlCtGp@~Ab@dArAbD`@~@N\\n@~Ab@dAb@`A|@xBb@bAd@lARd@N\\JTj@tAZv@JRd@hA@Bf@lAP`@|@vBRd@N^n@|AtAbDl@vAVn@@Bb@dA|@tBv@pBTh@f@lAJTn@|Az@rBjCnGnAxCRd@Rd@nCvG~AxD@@`B|Dz@tBd@fApA~CbA`CnAzC`BzDfAlC|@tBRf@@B|@vBL^Rd@HVLXj@`BDJPf@DNJVBL^fA\\jA\\lA\\nAl@|Bj@~BNv@FRDTJb@`@rBBJLp@Jd@^jBH\\DVDN@Bx@dEd@|B@HXvAH`@Lh@Z`Bf@bCd@~BtA|GFXRbABJJj@TfAp@hDDP^nB@DBJBLBH@DBLBJFZXxAtA|GF\\^fBf@fCj@tC`@nBp@fDf@`CBNRbAVpA\\~ABN^jB@Fv@zDbAbFnAjGRbAf@~Bb@`CFT@Bd@dCFVz@fEJd@F`@l@rCJj@d@`CLh@?@@H^bBf@dC\\fBh@jCd@bCp@`DBRl@vCXtA@@TjA@JH`@Np@XtALl@Pz@^nB?@Jf@ZxAJj@@Dj@pC^jBP|@lBlJtA`H|A~HfAjFdAlFnAhGlA`GVtAf@`Cd@bCNn@Px@Lp@b@tBbAfFP|@^bBr@rDdBrI|A`ItBfKZxAp@|CdAtElCrKzDpNpBdHLb@`AjDTv@f@dBrAvENh@Tv@l@zBxClKTt@rBhHHXnAnEdAtDHXJZRv@Lb@FTRr@Tv@FNFXx@lCVz@Rp@h@dBjA`Dz@xBj@tADHh@lAr@vAbAnBBHn@dA@B|@|A\\h@^h@d@r@V^^f@JNLPTZr@|@n@t@vA`BZZr@v@`@b@RRp@t@f@h@bAlAt@|@v@bAj@v@b@l@^j@PXl@~@x@rAdAjBt@xA^v@HLXl@`@~@d@fAN^^~@N`@\\|@Vt@^dA\\hAZbA\\jAf@jBXjAPv@\\xAh@lCTfAjB`Jn@`Dj@jCb@tBn@|CBLNr@FVDRt@tD\\`Bz@`EVpALj@Lj@Lp@XtANr@b@vBz@bEn@zC@@DVNn@Jl@r@hDFVH\\DVl@rCBLTfAj@nCZ|ALj@Z`BNp@`@lBVlARdAJf@XrALn@H^`AvE^dBBHDRFZNp@FXNv@H^Ln@n@zCv@xDNr@H^|@hEd@~Bh@dCPt@Np@FX@HNl@b@`BPr@HZZhAf@bBJZRn@HXTn@j@`BXt@Rh@Vn@b@jAp@|Ab@bAf@hAVj@Xh@N\\Zl@^r@h@bAj@bAh@`Az@xArA~BbBtCtA`Cx@vAZf@`@t@bDvF\\j@tA`Cj@`ApBhDjLbS?@FHNXDFf@z@rFnJNTJR`CdEtDnGdHxLVb@tDpG|ElIfF|IbHtL`CbExGfLlAtBtIbO`C~D`FtIhD~FjIpNbEfHtDpGh@|@vBvDlA|B@@p@zAd@hAh@pANb@Rj@p@vBj@rBb@fBDTT~@RbAPfATxARrANlATbCLzALpBFjBDzABjA@n@@z@?`A?z@AvPAbI?`EAhS?@AhC@t@@nADhCF`B?@FzAFfAHjABPDn@HhAJ|@PhBHn@Fh@L~@VbBDZVvAXzAXrAVfA?@DNPv@f@jBXbARp@f@zAPf@d@rA\\|@`@bAjApCzAhDJT?@hFtLtB`FFLx@tBdAxC`@pA`@vAXbAb@jB`@lBZzAXbBZpBRpAb@zDTjCJrANnCJrBDjBDvBHjIV|YFfJDfBF`CFvAHtALbBPvBN|ANtATbBNhAZjB\\jBRdAXrAj@`CjAfEh@~AdAzCd@lAf@jAdA~B\\r@t@tA^p@d@x@b@t@l@~@|DzFxB`DnAhBpDjFxAvB~BhDjCvD|BbDvGrJhAbBz@pAv@rAVb@hAtBj@lA`@|@@Bb@bA`@dAj@zAv@tB\\hAj@nBHXPl@DPPv@Pr@@FPx@f@`CbA|F|@rFdAhGbEjVJl@dDxRRpAV~AVhBHt@Jz@LrAJdA@\\Hz@@J?DFdABb@Bd@FbAHjBPxDZdHDt@N~C\\dHFzAHzAFvAt@vO\\|Hf@pKZlG?F?BB`@?FBl@f@rKDz@HzAHlBFpALhCBp@VbFHhBFtAFlADhAL|B@\\\\dHLdCLjBL~ARfBPbBZxBRpATvA^lBF`@H^TdA^`BZlA^nANf@BNHRFTTp@b@pAPd@Xv@LZN`@Vl@JTRb@Pb@p@vANXLT@DHNNVVh@NVVb@PZPXJNj@|@fAdB\\f@?@^j@hAbBNV@@v@jA|@xAb@n@TZtAxBz@pA|A~BdA`Bx@nAb@l@nAnBjCbEpApBXb@d@r@j@z@h@x@h@x@T\\`@n@FJNRZf@n@`Ah@z@|@rARZd@t@~@vAZd@x@nAr@jAFJ\\f@j@|@PZT\\Vb@b@r@x@vATb@Zh@^n@Zl@Zj@l@hAb@x@\\n@tApC\\r@Zn@l@pA^v@r@|An@xAp@~ATh@Xn@d@jA?@Rd@dAlCx@vBz@~Bh@|Al@hBf@vANf@x@fCTr@dBxFxAxENh@Pf@fAnDpAdEj@hBXbAx@hCfAnDjBdGj@jBp@xBf@~Ad@~A^lAh@`Bp@zBh@dBpDnLZ`A~@|C`DhKt@bCdDrKvArEl@lBNh@x@lC|@vCdAfD^jAzBpHxHvVn@rBPj@h@dBh@dB`A`DNd@Rl@Lb@Vz@Vv@l@nBb@vAx@lCRn@ZbA`@rAPf@J^Vz@^jARp@r@zBj@jBp@xBb@rAPj@Lb@\\hA`A~Cd@xArAjEh@dBh@fBt@dCL`@n@vBn@zBl@zBj@|Bj@|Bh@|BXjAx@nD^hBXnA|AhHzAdHrAhG`@dBXtAp@~Cv@lDLl@DPH^VnAv@nDn@tCx@tD\\|AVnAxA|Gz@xDh@fC`ApEzAbH|@~Dx@xDd@tB\\`BVlAH^\\xAr@bDhAjFVhAF^DXrAdGv@nDr@bDzBnK^~AjCzL`@fBVjAb@pBR`AT~@VlAj@fCXrA@BHd@Pr@pBlJh@bCPv@Pz@hAfFj@hCd@xBJd@z@|DjArFJb@Nr@h@~BJh@Pv@vArGl@tCXnArAfG^bBR~@ZzAf@vBl@lCj@~Bb@`BXjA~@jD|AxFXdAbAxDZfArBxHPn@bApDt@vCX~@Lf@`@xARr@b@bBjAhEz@~C~AdGZfARr@tEfQ`AnDZhA|@dDlEbP`C~IxAjFp@dClAnEbCdJj@rBnAxExCxK~@lDnA|Db@rAPd@HVZt@DLP`@L\\Td@N^JVFJh@jAp@nALXbAfBdAdBpCfExAzBv@jAPVf@v@b@n@tB`DvDzF`BdCbKrOdA~AnE~GFHf@v@p@fAz@|At@xA|@lBz@nBPb@f@nAr@rBr@vBl@xB`@xAH`@T~@R|@Jj@Ln@VnALt@^hCPrAPxAHx@LlAJjADl@~AhRLxAJxA^lEVtCPxBR~BV`Dl@fHVfDPfBB\\Dl@Db@`@vEPzBXdDFx@BZFp@r@pINhBLzAJdATvCNpB\\bETrC^jEbBlS~AjRh@zGj@bHz@dK@BTrCt@|IXhDnAvO|BxXz@zJDl@X|CBZh@|GVtCDf@bBnSFl@^pE`@|E`F`m@h@tGXdDTpCN`B?DDf@Dj@LtAb@hFf@fG|A|QPrBd@vFFt@z@bKZrD?@@Lx@dJJrAr@hITfC?@Fj@nA~NdCrYfA`MRhCPnBLlA~AlR`AvK`AnLHr@XdD~Cv^|Cf^Dl@p@|H`@pE@NDZTvCRxBBRz@bKFl@Fl@@TrAxOVdCFbA^dE^fERzBLzAR`CZtDd@nFFp@RzBN~AZtDLzA@JLpANtBHjBBl@Bd@Bx@Bx@@r@@R?V@z@@r@?rA?H?zBAnCCxA?pBBnC@TF`CD|AFdAF`APfCJx@Fh@Ft@BP@RDV@Rb@fDv@zEb@xB|@xDj@|Bp@rC@@f@`CThA`@bC\\|BZ`C@HBT@NBTD\\Dp@|@|Jb@vENpBDj@h@dGTjCl@nHb@hFLzAXvCVxC@LBL@RHfARzBRbC?@DTFl@H`AH~@`@tEJbABb@LxA@?Dl@Fp@NxA?HRvBRhCD`@Fl@TnCDd@Dl@X`DH~@Fl@p@|HN~AXlDb@`FZlDf@xFXfDLxAFp@f@zFPlBNpANrAZhCPpA`@fCBHHj@\\hBTbAVnAd@rBZlAZjAp@~Bh@bBXx@Nf@b@jAn@`Bb@dAn@|Ad@dAh@bAf@bAf@`ALR^p@f@|@\\h@vBdD|@pAn@x@`AjA`@d@NRHHx@|@p@v@t@t@DB~@~@fAbAd@^PPJHnA`AhAz@`BfAlAt@z@f@x@d@f@VnAp@pAj@jAb@RNdBl@\\Lh@P`@L~@V@@pAZv@Rb@J~AZFBbBZf@Jd@JlAZjBb@zCr@~Cr@L?p@Ln@N`FbAxBb@tBb@dCj@B?TFjBb@`B\\bB\\h@LlCj@v@NxBf@tBb@hB`@`Cf@tCp@tAXtAX~Bf@`ARjCh@F@ZF`@HvAXtAVb@HH@j@LdATh@Lz@PB@~@Rp@Nz@RbB^lBb@fAVlE`AB?`Ch@D@@?LBTF~A\\F@jBb@~@R|@VlA^bAZ`@NLD`@P`A^D@hAf@t@\\BBz@`@`B|@^RDBd@Xf@XjAt@?@bCfBTPxAhA\\XnBdBDB~A|A"
                     },
                     "start_location" : {
                        "lat" : 39.7207485,
                        "lng" : -86.26463769999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "124 km",
                        "value" : 123567
                     },
                     "duration" : {
                        "text" : "1 hour 7 mins",
                        "value" : 4027
                     },
                     "end_location" : {
                        "lat" : 38.7534786,
                        "lng" : -89.89353629999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork to stay on \u003cb\u003eI-70 W\u003c/b\u003e, follow signs for \u003cb\u003eInterstate 70 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSaint Louis\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "yjsmFvks{ONZbBlBnAzAnAbBx@hAPTXb@dBrCjArB`AjBz@fBl@tA\\z@Zr@n@`Bl@~Ah@`B`@tA`@pABJJ\\Lf@f@pBDLLh@BFn@vC`@xBZdBP|@H^?BVpA@HH`@Nh@ZbBJf@b@~Bj@vCThA@FDPBN?@@FRbAb@zBxArHJf@Jh@TlAH`@H`@?@\\`BJn@h@nCPv@@FHb@r@tDpAtG`CbMr@nDd@bCt@xDzAbIx@bEbBzIzDjSr@tDJb@f@lC`AhFz@pEz@hEz@nEn@jD`@vBTtAN`AN~@ZxBThBXzBxAnL\\rCVtBRxAb@zCRpA@JH^@LVzAh@pCpAjGXtAb@pBr@`Dh@`C`@hBVnABFLl@FVXnANr@Px@FXXhAPx@J\\Lj@Rr@Rt@H\\Rt@ZdA^pANf@Tr@r@|BhAnD^hA^lAf@`BzAzEj@jBf@bBJ`@X`ARx@l@|BBJLh@Pr@n@vCXnAPt@Ll@?@~DvQ~@nEb@pBp@|CjAjFnGnYNp@XlAH\\XrA^bBLj@v@hDz@~Dp@xCJf@DL^dBLj@Jd@Pv@ZxAZrAt@jDf@~Bv@jDnDjPrA`GjBnIdAzEFRLh@Hd@J^@FFXH^Jf@Ld@zDrQ~@bEtAjG|@dEnDbPnAtFZvA|BnKR~@r@fDpAzFx@~DDTh@|B`@jBbCrK`CxKXpAr@~CbAtEb@jB|@~D`BnHp@|CbApEzA|GdBzHv@lDR`Ad@rBv@rD@FZpAj@lCv@tDv@xDl@~Cf@dCd@dC\\hBj@bDz@xEfAfG@?DZjApGtGp^d@jC`B~I^tBVvA~A|I@FTnAJj@VtAvElWJl@?@Jh@?@nA|Gb@~B\\rBF\\@Jb@xBn@lDJj@Nt@b@bCVrAN|@VtAP`A@BN|@@DHb@DVXxAr@`E\\nBb@bCTjANz@BHLr@Hf@Jf@VvAVtAJj@?BJh@Jn@Hf@Jl@@FH`@BPThAZ`B?@BJPfAHb@@Bb@bCJf@Lt@^tB@Bl@jDb@zB?Bn@hDJj@BPd@dCNv@Nx@d@lC`@vBn@lDJj@rAlHd@dCvDzSl@fDDXBL@DLr@F\\b@|BFZ^nBVnAv@xDf@jCTdA^dBDTj@fCNv@Lj@nC`MjAlFxB|JLj@H^xC`NLh@BJNt@HXhAhFtD|P|@bEp@xC~@fElBvIr@hDLj@zDnQ@FJ`@@Fz@vDbC~Kl@nChEpRdC`LfDjOlCzLd@tB|AfHhCjLnC`M|@dEh@`Cv@vDp@|Cd@bCf@dCHZd@~Bd@bCl@|C\\jBtAjHn@dD@Bt@|DlLfn@lHx_@?BtEnVjAbG|@|E|@rE`BzI^lB^lBv@~DA?Jf@r@vDTjAp@jDVnANv@j@vCLj@p@nDVrAn@dDr@tDh@rC?@f@fCxBjLnAtGDTpBnKJh@DRhEdULp@Jd@VtALl@dGn[`K`i@l@~CBLJj@z@nER~@jEjUxBlL|AbI`EfTbBzIrAvHx@rEdErUrIhf@VvAjAtG`ArFjBnKfAhGdDbRJj@bC~MZhBhAjGt@~Dd@hCd@`Cf@bC?@Jj@`@lBn@~Cx@xDXnAf@bCn@rCdFxULh@vP`w@jHn\\xCfNbC~KhAfFv@rDLh@pA~FJj@ZtAv@nDpA~F@Bn@xCz@zDf@|BXtALh@r@bD^hBr@|CTfA`@lB`@hBZxAVdAl@pC@Dl@rCZzAPr@Px@T~@r@dD`ApEbBxHx@tD`@fBDVPt@z@xDxB~Jl@pC|@jEVxALn@XbBd@rCN`AHj@Hf@^rC\\lC@HXnCLnAJbA@FDd@LbBVdDHbAFnAPzCNvCDlADjA@p@FdBDtB?H?V@J?H?VBvA@x@?p@@|@?jA?fA?fAAvA?FAdA?J?VEdDQfQErDIhHUfUCxCEbDGvFC`CAbA?p@CdA?p@An@KrJGlHATCnDY~VKpKEvBC`DAf@AbBEvDIdGKfLE~DAj@?@ChCGvDAxACvACxDAlAEvCAl@CjDAz@EzDGbF?@GdFCrCAd@ChCCdBEpDIbHI`JGhGG`EApA?RANIlIA`AAl@E~EEjDAbAA`AC~A?TOrNI~GGzFE~DEjEIzHAfAAp@IzHEfD?RAX?RAl@A|AC~AGxFEhEEfEChCKlJGdFAl@?j@ChCI|GChDMnJCjDCpAExEIhIAd@Al@Az@?^GxEAdBEnDEvC?LC|CAfAEjDCnBAz@?JAl@?\\IdHAl@AzA?NCpBKdEGrAEt@MnBQlBUnBCNEb@SrAMx@Mn@UnAQx@UfAi@`C[rAEPKj@CNSdAGb@SrACLGd@EXOrAKjACRCXEj@KrAGvAGjAAZA`@CpAAvAA`@EnNAxBC|DCbIAt@Av@IbVAjCApB@xA?pADhBFrBHpAPhCVtCHt@Hr@\\bCTlAZhB^bB@BXhAb@dB\\hA^hAf@tAHTPb@p@~Ab@`AP\\n@nAv@zA^j@f@v@hAbB`IjKX^lGhILRrAnBfAfB@BTb@|@fBd@`ADFRf@Vn@b@fA^bABDd@|ATp@b@bBXdANh@Lh@hAlEnA~E~AnGXhAh@zBZrAd@hBv@|CxAbGv@zCNj@TdAhGrVtBjIVbA|zA|dGxKjc@pO`n@HXpB`ILh@Nj@pDxNjA`F~@rD|C|LpDrN`BxGnH`Zn@dCtAtFh@rBlBtHlA|E~BlJr@jCbB`HhCfKv@zCv@zCn@bCdBvFjAtDjAlDxAbEtAxDtArDlAfC`AfBn@hAz@tAjA`B~@hAh@n@XZtAzAr@r@|@x@HFr@l@f@`@t@h@x@j@hAr@bAh@x@b@h@Vd@T|@`@pAd@jEvAlAZ\\J@?b@NbAVb@Lh@NVHz@Zh@TJDtAn@?@^RXNd@ZTNb@Vb@Zf@`@fA~@`@^PPNPPPNPNP@@NNPRNT\\b@NTNPl@|@LTLRLR@@LRLVLTXj@LTJTLXx@rBTh@@FTp@HVh@dBPp@FTH^DRPv@FXLr@Lt@Lt@Fj@PpAHbAVbDLrBPhCHrAHhAF`ADr@BRBh@JpAPlCDt@TdDRxCBb@b@nGJzAHnAPfCHhADl@FbAHhADt@FbAd@fH\\hF\\|EB^BX@ZBRHbAJnANvAFr@DZNnAL`AFh@Jt@RpAJr@RpANt@RlAVnAVnANr@Pr@`@fBb@`BRv@x@vCb@vAd@xA^dAj@~AVr@l@|An@`BVl@`@fArAfDJVTj@Xp@JXPd@t@hB`@bA`@dAp@bBb@fAl@|ArAfDN`@x@rBv@rBb@dArAhDb@dATn@n@~AVn@z@xBjBtEn@`BRf@LZLZ`@bAfArCRf@L\\Vl@f@nAFPHRXr@JVJVJVJVVl@Vp@Xn@HTJTXr@Vj@|@tBLXVj@Vn@LXVj@JTNZTj@lAlCrBrERd@f@jALVLXVj@^~@P^Vj@Vj@f@fAVl@d@bALZBFFLJRp@~Af@fAt@bBRd@pBrEJTVl@r@`Bn@xAXp@n@zA|@rBJVJVn@|ALVb@hAd@fAVl@Vn@b@dAp@`B~AzD|@xBn@zAVl@b@fALVx@nBf@pATh@rC|GxBlFrAdDfCfGz@rB~A|DxBjFVl@Vn@JVVl@Vn@JXx@tBJVHVJV`@fAJVHXx@zBFT`@fAHX^hA`@jAJVHVHXJXRn@JVHXTn@jAlDj@bBHVJXHVHVHVTp@JXHT`AtCHXTp@HVj@`BNf@JXHVTn@Tn@d@xAf@vAPh@t@zBHVHTt@zBHXTn@HVJXHVHV`@jA`@jA|@lCPj@Vt@HXHTHVHZHVNh@L`@FVHVHXPp@Rp@HXHZH\\`@~AHZFZPp@`@fBNp@FXNt@Pt@FZDV^hBDZNt@DXFXFXDZFXDXF^DTDXFZJt@DXLv@Jr@DZDZJv@Jp@Hv@Jv@DXVfCJv@BXBZDZBZDZBXHv@DZHt@VjCDXBXDZBZHt@D\\VdCRpBHt@BXRlBNpAFt@Jx@Ft@DXHt@b@jEd@jE`@`En@nGh@|Ed@vEj@vFl@xFPfBb@dEz@jIf@tE\\dDVhCNtAFb@LfANlAPpAPnALr@Jv@Lt@XhBLt@Lt@ZbBNx@Lp@XtAVlAh@~BVlATz@VhAXfAV`Ax@xCdAnDFTFRHTv@fCfAjDjDxKNf@xApEzBhHfAlDhBvFd@zAJ\\Pf@r@|B|A|EvEdOfC`I\\jARl@^lA`@jA\\lAf@`Bx@tCXfAZlAZlALh@J^^fBXrAn@tCXxAp@nDRnARnARpA`@dC`@bC^dC^fCb@lC\\|Bp@hEb@pC`BnK\\xBTvA~@hG@FPnAt@zEJj@vCjRtChRtB~MTvAdIth@rAvItAzIHj@Hf@^fCRlA\\dCNrAPpBBd@HbAFtA@\\Bl@?D@x@@v@@~@?PAZ?x@AtAEtAE`B?DEzACzAAj@?d@ClA@V?h@?@?@?j@@l@?FBxA@j@@LDhAJzAJtAFx@Jx@BRHt@DXF`@Fd@Hf@Ln@Fb@FTHb@DTDLJb@Nn@Pr@J`@Lh@h@|B@Df@pBb@fBj@~B`@`BLj@^~ALh@t@|CpAhFf@vB`DvMzD~ORz@r@vCNr@VhA^jBLt@ZfBTrAPfAL~@PnAPnABVJx@NrALnAH|@HbAHbAJpALlB@TLtBLnBL`BH|ALnBL|A?HNpBN`CFdAFx@Dt@Dl@JvAHrAF`ABRFt@Dv@Hx@Ht@?BHp@Jz@NdADXHf@Ll@Lp@H^Lj@J`@H\\FRNn@Tt@Ld@Pj@Z|@t@tBt@zBlAnDd@tAXz@Tp@BFVt@d@tAj@`Bt@zBz@hCdAxCn@nBp@lB~@pCrAzDVr@zBvGd@rAz@jC`@hAh@~Ab@lA\\bAlFxOZ~@BH^fAp@nBv@~B?BPd@^fAZ|@j@`BXz@j@~ABJt@vBdA~CRj@b@rA`@hAxAhEj@dBd@`BNj@HXZrADNF\\P|@XdBDVHl@Fb@Jx@Hr@Fv@BRB^Ft@Dz@Dr@@^BbA@d@@b@@\\?fA?lA?@A|@CbACx@?PEx@Et@?@En@a@fFMpAANM~AE\\Ed@MvA_@dEKjA?Fc@`FY|CAN?FS~BIr@]~D[rDC\\ANK`AOlBQhBGx@IdAG`AE~@GlAAr@Cz@A|@?^?Z?X?t@@t@@x@Bz@Bl@D`A@b@BZ?@F~@Dd@D^B\\J|@?@Fh@?@Hf@D`@Jt@F\\DRHf@@@BPl@zCJj@h@dCFZj@zCNt@XtAr@jDRfAH\\l@|Cd@~BNr@Px@@JBFFZTjANr@Jd@Jf@FVHZNr@Rr@Pj@Nh@FPHT\\`AL^DJ@@DLJVf@jAZp@Xj@PZFLNV\\l@^l@lBrCtAbBHJJJFHHLJLzAhB|@dA|AjBnAzA~@jAZ^Z\\@@xBlCPRjAvA|@dAxBlChBxBj@p@xAfBLNnHzIrA`B~E`GdBrBLPFHt@~@n@|@f@p@TZNRJNn@`Ap@`Al@~@BDn@fAj@~@@BVb@V`@z@~AbApBl@lAl@pADFh@lAn@xA|@xBl@|Ar@lB`@dAf@xAl@bBv@tBd@rAn@fBl@`Bt@rB`@jAXv@`AlClAhDj@|Al@~Ad@vA|@jCp@pB`AtCTr@j@hBr@zBpAjE@BDLh@jB`@rAFRf@dB?@l@vB^tAFPf@hB\\xA^pA`@|A^vA`@~Af@lBZfA@F^rA~@pD^pAZjAVbALh@Nh@?@Nh@HZ^rAZlAXhAh@nBl@rB^lAh@bB^fABH^dAFP`@nAn@bB~@`Ct@hBv@jB\\t@j@pA^t@BFfBzDhAdC~@rB~@pBx@dB|AhDJRJT`AvBfA~BN^f@dA`AtBZr@Vh@x@fBt@~A^x@\\v@r@xA~@rB`ChFjB~DLVpApCTh@h@hAx@hBt@|ALXrAvCv@bB|@fBLVl@lAtAfCR^j@`AZh@PZx@rA`@n@h@x@x@nA|@pAr@bAv@lAHLl@bAb@r@Xj@^r@\\n@NZd@bAb@`A^~@^`Ad@pA`@fAPj@Nb@\\fADLNh@DRXdAXfA`@jB\\dBNz@P`APhAL|@Fd@DXBTD`@Hn@PbBNdBPpCHrADnA@FFrCBrA@hA@bA?~@?\\AtAAbACbBGnB?FExBC|AEtAAb@Cx@SzJIrEKjHE~HAdB?b@A^?d@?`A@`E?V@fD@nE@pC?l@?rB@lB?H?b@@`G@vC?f@?l@@fD@bE@nD?fE?~A@tF?|MA|ECdECxECrCE~FIlLC`FAzAAz@A`CAnAA`F?H?tE?J@r@?nA@fBBnG@xB?jB@fD@`AAjBAbBA~@A\\GxBC^IfBAPGhASbCY~C[lCQvAI~@OvAQlCIzAChAA^AfAAx@?dABjCD`A?@Bp@FvAFhAFt@@D?@Dj@Hx@P|ADZ@?L~@PhATlAp@~DPjANlANpAHv@?@Fv@F~@Bl@D|@DlAD`B?p@?v@?hAA`A?RErCGjHChDAz@Ad@?|B?h@?`A@lCBrCBpA@n@@v@BvAJ~Df@fP@J?RBl@@LRrGBlAR|FJdD@n@DpANbETtHHxCDjAJxC?BHlC@TDxAFnBJfDHjCPtFR~GHrBJdDJhDHjCJdDHjCHhCFpBDtADlAD|@Dp@Fv@PpBTlBJv@Hf@Hf@FZDTJl@H`@XnAT|@^vADLX|@^fATr@d@jAFNFLRd@LV`@z@f@`ABDLRZh@\\h@Zf@l@z@l@v@@B~@hAr@t@p@r@r@r@v@x@`@`@PPZX`@`@r@r@~@~@p@p@`@`@DD|@~@^^`A`A^`@DBZZVVvAvA@@v@v@b@d@p@n@|@|@TVPNzA|AxBxBp@r@pArAZZRV^d@PRJNHLTXl@x@HJV`@LRLRn@dAHN`@v@@B`@r@HN@BJTLVJVDJNZP`@Tj@JXDJTl@Nb@Nd@DLVx@n@tB\\jA\\lATr@@Bl@tBPn@DNjDnLNf@n@vBr@zBzClKd@~A\\nANn@J\\BJLh@FXDNLp@P|@Nv@@DHh@F\\V`BHp@Hj@BVBTJdAPhBRvCRhD^pGDl@@JVdE@PxAvUDl@Bl@Dp@j@hJ\\dF?BL`Bb@pHBZ@Xn@fK@FBj@B`@@Jf@`IL~BRnC@JB^Bl@`@pGFfA@N\\dFHvAHvAR|CNbCPtC^bHBZLfCNlDLjDDhAFzA@`@DbBBn@HfDDpAJvE?RJzHBhD@hC@nB?dE?hB?|@?n@?nBAvBA^AfCCvAAdB?BExBKnGARGhCE~A?Bg@rPC~@Cr@C|@Ch@?FCx@Ct@CpAAdAClA?BAf@?v@Al@?NCxC?f@?`A?f@@lCBvCFpDBlA?H@l@Bx@Bv@Br@B`AD|@HdBFzAD|@@DBf@@JB`@@TF|@HrAFt@H~@Fr@Fv@Df@JfAFn@Fn@LdARnBD\\Hj@NpANfAL`ANdAPnAJl@Jp@Jn@N|@PbARfANv@Lr@ThANr@dAdFt@lDdA`FLj@BPj@jCThAt@xDP~@\\jBTpAP`Ah@bDHn@H`@Hj@PfAZzBRtA\\jCVlBFl@ZfC@FLfAJdAD`@Fd@Fj@Hx@@N\\pDFj@@PZvDRfCDj@Dj@@LHnAJzAFbAH~ABVBd@Dx@FtAFnADz@N~DBx@HdCBz@Bx@JdEBnBFbDBpE@xA?J@`@?bC?pEAtCCpDArC?L?HApA?l@IhOEdICfF?ZAt@ArDAbB?dB?n@?z@@z@@nBBjCBnB?H@b@?HF`DBr@?N@XBp@JvCB~@LtCBd@D`APrCFvAHpANhCDl@Fx@L|BDh@Dj@NdCT~CPzBTfDFl@@X@BP`CJnA@HDl@BR?@p@jIx@vI@TDj@LnAPvBB^BTDn@"
                     },
                     "start_location" : {
                        "lat" : 39.0982066,
                        "lng" : -88.57804480000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "47.8 km",
                        "value" : 47767
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1656
                     },
                     "end_location" : {
                        "lat" : 38.7597291,
                        "lng" : -90.4293467
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eI-270 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Missouri\u003c/div\u003e",
                     "polyline" : {
                        "points" : "g`pkFritcPH|@Hv@Db@Df@HbAH`APhBNlBRdCHv@Fv@PnBJrAXxDFt@Dr@FrAFjABz@?FDxADbA@hABfA@f@?v@@bB?t@AnCAn@An@C|BAH?^Ad@E|BApACpAAx@AhA?PAhA?tA?`@?d@@X?J@p@@`A@|@@t@LtDBb@?PD|BDnBDfB@d@BpAFvBBlABpAF|BJpEFvBBhABlA@h@BxA@~@@jB@zB@xAA|A?|A?^Al@AzAAl@A~ACxAGzBE~ACj@AXMfDCh@?BMtCGlACl@Cj@C|@GjACz@Ez@_@lJCl@IbBKtCM`DOhDI`Ce@jLO~DE|@GnBGbCKlEMdGC|AEpBErAGxBEdAGtAGpAEbAKbBIpAG|@CZCb@IbAYdDWxCOnAYnC]jCMt@_@tCg@jDa@dCCJQdAKh@Ov@e@xBMn@s@dDc@tBq@~COr@O|@CLO|@OlAUjBAJMvA?BEh@Ch@Cp@GbAC~@Er@A~JA`D?h@An@?`BAvAAxC?xCAjGAzD?BA`@?pC?n@AjC?h@?h@@~D?j@?@?l@?B@zABdE@`C?TH~T?@BvD@vD@x@?x@BnF@l@BvH?D?DBhH@tA@jA?n@?B@hD@j@?J?\\?N@xC?\\@L?h@?b@?D@lCHrRB~F?h@@|B?^?L@h@@lC?Z@tA?h@@hA?@?H?nA@j@@vC@bBFrK@zA@zA?BAdI?\\AhE?rAAzBAzA?VAfC?@CzAC`E?J?tBAT?pAAnACnCCtEApCGbNClHCzFAh@AbCAlE?z@I`NEjN?HAt@AvA?^?\\Ybn@A^A|ACdEChEAbC?bBG|LApDIxM?l@EnIKpTG`QGtHKtMErPIdRChC?F?f@?z@CdECvD?Z?n@A~@?dCExCAxC?|@?|AAxA?JAl@AhDAhA?b@CdC?z@A|@AbFChHCbD?`A?^AlBCtDAbB?D?F?p@A\\AjBChHElKGdL?B?l@ChC?zAAd@AhC?|@Az@Ar@?BA\\AP?@Ar@E|@AHCj@Er@AHC^I~@QbBS|AE\\Kr@Mr@I\\EXGVOt@IZYlAe@fBi@nB}@dDMh@ELg@nBOf@YdA_@rACLi@lBOh@CJK\\m@zBYfASt@m@zBELYfAMf@ENm@xB?BK^a@zAIVc@`BQn@CLU|@ABOf@uAjFMb@?@CH?@KZ?@CJCJMb@U~@_@tAGTEPa@hBGRMj@CJGX]xACJWpAWlA?@WrA?@CJc@bC?DI`@?BGZCN?@QdAAF?FGZAJABE`@Mr@OpAQtAOnAOrAMfAGl@ATAFAHSvBARKjAAH?@?@Gl@C\\G|@CXEn@AP?LKhBCVATAXCV?@ARCf@EzACVC~@ExAAJ?RAZAp@A`@CjBCnA?X?HAlA?t@?FA~A@xC?dBB|B@b@@`A@`@?VBdABdB@J?NFlDFnC@z@@b@?h@?B?L@l@C~A?b@A^EnBGhCAz@?H?tA@`CBp@@r@@L?T@N@t@DhB@r@@t@@b@@P?N@b@@r@@t@@r@DdCDhB?^FvC@^BrA@\\FzDHzDDzBBhABpABx@@fA@P@Z@t@DbAD`ADf@@VBTBb@HjAJfANlA@HLfANdAPbARrAThAZxAVdA\\tA\\hAZbA`@lAb@hAZz@P^Pd@BDXr@HRBDb@bADJp@`BL\\b@dA`@dA^fAL`@Nd@Rp@@BXhALh@BLDRPx@DTTnAPnANrALnAFr@Fv@FnABl@Bh@?NB~@?J?B@bA?lBCtACpAARCd@Ev@Et@E`@ATIt@Gr@AFIr@Id@Ih@YhBQdAG^{@`FKn@WvAYfBQbAm@jD[fB]vB]nBO|@YdBMr@}@pFm@nDsAzHWvA]pBs@fEeAfGo@zDUpAiArGUvA[|A?@Mv@k@nDk@dDOv@Ij@Mj@QdAOv@CLIh@]xB]xBCHIj@Ij@M`AIt@Ir@CXCZCl@AFALCr@EhAChA?^?pABtC@lAFtDBbC@t@BjAFdFRrP@v@XpUDjDB~A@XJ`IB~BDnD?v@?b@?~ACjAInCElAInAGv@CVC^Iz@]lDAH[hDGp@Gn@UfCGj@Gl@El@Gj@Gl@[rDGl@WtCg@lFGl@O~AGl@OxAGj@CZc@jEq@bHw@jIY~CY~CMfAUfCQbBAH[dDOrBIpAC`@Er@Cv@Cj@?DCdAC|A?d@AzA?hAAbA?jB?dB?bF?rF?^?H?@AxE?hCAzA@l@?\\AvA?rC?dF?l@ApD?nA?zA?pA?rA?nAA|B?`B?dA?bA?`A?nD?`@CdB?pAAl@?~@A|B?L?P?RApG?BAtAAnC?l@A|A?d@AbB?p@AnDEhTAhDElRAbDAfB?t@C|@?tA?j@AnA?r@ChH?v@CvHAhC?~AC`G?jA?D?BAtACdICdIAhD?J?ZApCCxC?vA?`BC|CAxA?j@Al@?l@CtCEfFAhCChCAhCChCAhCC|B?l@?LCbDCzA?l@EjEC~CAlBCjD?^CtFGxIAl@EdFAzA?l@ElBApA?f@An@EfC?@?ZAPC|BGbCKdEIlCMjEEdAIrBCj@MfC?NC\\EfAM|Bm@tLOrC[rGAVS|DIfB?DATEl@Cl@SfDWvFm@`MObD[tG]rGS~D?@Q|CS~DOlCAPU|ESbECl@IbBCd@CZG|@El@aA`SEl@EbASrDOjD_@pH_@lHSjESxDS`C@V?T?X?TCp@?JAlAAX?R?FAtDAj@?B?PA`B?RAt@?\\?VA\\AB?DAd@AXAV?@Cn@AR?BEn@Cj@AH?BAHAPGx@Gz@?@YnCA@MrACVOlAMlAa@tDA\\Ab@KzAAJOzCEr@K`Cw@tFShBMhB_@nI_@zHE`AClA?pA@`A?l@?V?^Ax@IvBCx@ALKnBEj@?BAVM`CKzASrCIhAI|@e@zFGf@APCPCNUbCShBYvBALE\\QnA[tB[tBY~AqBxK_@rBGZs@`EgBhKI`@WvAKh@Mn@i@|CCNc@`CUnAIb@Il@Kl@EVGh@E\\E`@ALCVGt@?ZANEr@Cn@Cp@Ap@An@AZAnA?v@@Z@rA@\\@Z@\\@TD|@Bj@B^Fx@JpANrABNHd@Hn@Jl@@JF^BJ@HJh@R~@HZNp@ZjAd@|A@@FTL`@JX@B`@fAvClIZ`A`ApCf@tA~AtEPf@d@nAz@fCL\\L^@BRj@BD@BJZZ|@^dAjBnFPf@Tp@Tl@Rl@f@vAFPh@rApCjIPf@Pf@LZZ|@b@nAt@vB\\`AVt@nAhDJZhA|CNd@p@fBXx@jBnFDHlBrFh@zADLPf@Pf@nAlDdB~EFNh@zA\\dAL^Tp@Nf@@@BFL\\^fAl@dBXv@Pf@HTz@dCl@hBJZjCtH`AnCDLd@lA`@lAn@fBFNj@~AfA~C|@fCFNfA~CzAdExBlGjBlFjBnFTh@Xv@Pd@j@|AtA`EzH|TBF`@bAPf@DLf@rAZz@HVXv@`@hA"
                     },
                     "start_location" : {
                        "lat" : 38.7534786,
                        "lng" : -89.89353629999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "361 km",
                        "value" : 361083
                     },
                     "duration" : {
                        "text" : "3 hours 16 mins",
                        "value" : 11769
                     },
                     "end_location" : {
                        "lat" : 39.0572311,
                        "lng" : -94.4859168
                     },
                     "html_instructions" : "Take exit \u003cb\u003e20A-20B\u003c/b\u003e to merge onto \u003cb\u003eI-70 W\u003c/b\u003e toward \u003cb\u003eKansas City\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "igqkFl~|fP?Z@F@D@F@DHVHTJZLd@r@xB`@nANh@b@vAHXx@fCL`@FPJ\\Tv@HTJ^?@BFBH@DHVL\\JV?@Ld@?@Nb@Rn@FNHTPb@@DHRL^HRFLFLXh@Xl@HLR^BBT^LP\\d@`@h@d@l@f@j@b@^PNDBv@n@|AjAZRZRZN^PJDB@JFNDNFTFLDRLd@NHB^Nh@Pl@VPFPF@?TJRHTJn@TB@j@Vx@l@b@`@d@j@^l@Th@JRDJ\\hAJd@@@Db@DRFn@BZ@\\@x@?^?RAb@@b@IlAEZGn@GZEZABIb@GZETCLKp@ADA\\_AhDyAtF_@pAMh@Oh@g@pB]rA]rA]rAGVUz@}@fDgAbEABg@dBcBrG}@hDcDxLm@|Ba@zAGTGTELIZc@fBwEdQq@`Cm@zB?@Mf@A@qBrHuClKg@hB_BfGk@|B_AjDiAfEYdAk@vBi@rBc@|AMh@W~@[jAk@xBg@`C[rAEPg@vB[pAOl@{AxFMh@wApFUv@s@nCOh@}@dDOh@{@fD}AxFyArFMh@Oh@Uz@c@|ACJe@bBg@lByAnF{ArFSp@e@xA{@~C}AdGIZCJELGZYdA]nA[nA]rAa@zAo@`C_B~FiB`HOd@Mf@ADMb@m@tBAD_@pAy@rC_@pA_AdDo@zBCHi@fBo@zBQj@k@hBUp@Up@Yx@K\\IRO`@Sh@MXMZ[r@Yl@Q\\Yl@c@v@_@r@aBpCINg@z@[d@qAxBGHgCdEeBtC_AzAc@t@oArBwA`CaBlCMPEHg@x@[h@}AjCa@r@o@dAWb@eAfB_@r@i@`Aa@v@Yh@c@|@a@x@EJ[r@MVIPIRSd@ITa@~@a@bAKTCHCFIRWn@CHKRGPSj@O^Sh@?@IRKXELWp@Sj@ABITELQf@M^K\\ABEPK\\ITK\\Mb@Sr@Ql@Y`AW~@Kb@ENIXGTEROh@Mh@Mh@GTQr@}@|D?@WnAYtAG^CHKj@Kj@G`@GVMv@O|@QjA?@CHG^EXOhAObAKt@]xCEVAJE^?@MbA_@rD_@fDCNEf@A@Gh@?BGd@In@m@`FOrAI|@s@nGo@~FaB`O_@hD_@hD_@jDW~B_@jDGh@Gj@s@nGu@zGW~BOrAU|Bq@bGGh@g@tEUxBE\\UrBGj@QjBUpBAHCZMjAIl@QvAS`BWfB_@dCg@nCOv@Ol@UbAA@YhAW|@Oj@Ob@ITADGRUl@O`@GTUt@k@fB_@hAIT[`Ag@zAi@hBUt@GRU~@K`@CFMh@GTERi@~Bu@lEOv@CNIj@Gb@Ib@ShBKjAERAPCTCNCVGf@OtA[lCa@pDSfBOjAs@jGsAvLc@zDu@tGIr@AJG`@K|@OpA]dDKz@KjAQtBMrCG`AIxBCnACzACnEA|BGjMCdE?`AA|@ErGE|GCnEAl@Gr@CvD?`@AxDE~H?@CtDAlB?f@ChD?l@An@?TA\\?B?@ApA?VAPA~A?H?HATC~AKdFE|A?L?ZCx@?\\Cl@m@zQMxCEjAQbEM`D?@Y|Ha@nKCf@Cr@WdHOhDCn@IfCQpEQ`ESfFMzDK|J@vDDjD?DBf@@f@DdBFnAJbC@LHnADv@B\\RvCN~ADf@Dl@@RFx@HjB@h@Bv@DxC@rBAxAA^EvBC|@EbAKrAAjA_@dEEj@ABiAzMAPWnCEd@Ej@Gp@SdCOzAIjAIv@Gt@OjBQlB_@pES|BEh@gAdMEb@Eb@s@xICX[vDQvB?HCTEh@ObCCf@ALCl@CTEz@?HCl@El@Af@A@?BE`AAXA^A^AZIfCKrGEzCCbCAdBGzEAzACnCAn@Af@An@EtEA`AEdD?PCdCE|DEdFCzA?TAdAE~CAfA?BAh@AnBCpEAdC?~@?n@?NAbA?jC?rA@L@fCBlC@f@@j@?l@?F@j@?@N|LBjABlDN~KFvG?b@H`I@|@HjIJ`KJfL@h@@h@@vABpBDnE?n@DdCD~EDbDBnA@lA@~A@bA@z@@fA@|B?F@l@?zAAxE?d@Av@CvDAfCC|A?V?P?LAv@OtUObRC~D?RCl@?RAf@ChDUjZAnBE`GC`B?b@Ap@CvDAl@?@ChD?LAj@?n@EzEAlAI|JAbBKfMElEEbGAbDCnACvBAnCAdAE|DAvA?RC|C?HCnBCrEAh@AvAEdGInLAn@?BAh@?bAAdA?BAh@Av@A`C?B?b@ARCxDAjA?BAh@?LAtA?d@?BARAlB?D?@A`@?H?BArBClDAl@ApA?TAn@GvGErGGtGCdFAl@IpJ?l@AzAChCAzACrBAfBAdBExD?D?DElGCdB?r@Ap@AhBAdA?F?l@ChEEdFGtG?NAvBCzCA^ErFGpIGxF?^ClACvBAFGzEShMOzIQjL?TAV?TCzA]bS?FSpMAlAGvCUhPQ|KE|BAx@CvBG|CIdFCl@Al@CtAEvCKtG?JIrEC`BAdAG~CCpACfBCzAEfBA`@?JIxE?l@E~AAjBSzLCnAUlMAx@CzAItDAn@K|GGxCAf@?PElB?d@Al@CdAAd@EvCC|@A`ACnAE`C?HCrAEhCCpCEtEAbDG~FEfF?h@?j@?jB?x@?l@?V?F?bA@p@?dB?J@xA@~ADtB@bABt@@~@J~GHjDB|A@~@FzDTxLFbEDvBDjC?@D~BAh@@J@h@DdCDpCN`IDjB?R@RFjDDbC@t@?PBbBD~A?P@L@hA@j@DdC@NBjA?z@?X?\\AZ?B?XChAG`ACb@Cj@Ix@CXKr@Gf@CLE\\CLId@Ov@Kb@Mh@IXENEPQj@Ob@Un@Yt@Sb@Wj@S^INU`@W`@MREFW^W^QRq@z@a@f@[\\?@c@h@W\\Yd@MRWb@CFOZQ^MTITO^Qd@Ut@Of@K`@ADADSz@Mr@?@Kr@G^CXGf@Ef@Ez@ARAF?BC`A?R?f@?lA?j@@vD?l@@rA?~@?pA?b@?h@@vG@`E?d@?x@@`C@h@?RDnAB|@Dn@JrAFv@NnAPnAVtAFZFXPt@XhABLVx@Tr@d@rAzDhLl@fBDNDHZ~@L\\b@pATp@@BPf@JZTn@FP\\`Av@~B^fAp@nBX|@b@rANf@Lh@Rt@Tz@ZnAPz@H^Hb@Lj@Lp@Lv@Lr@F`@Jr@BVPnAJx@BVJz@Dh@Fn@Fl@Dj@Bd@Bd@@L@DDt@@\\D|@@XBf@Bx@@T?V@\\BjA@tA?d@?b@?bA?t@CvBAr@CpBA\\Af@EdACbAG|AK`CCj@Eh@Cb@G~@Er@C^QrBATA?Eh@MtAGt@Gd@?D[nCOfAGf@Ip@Ij@{@rGcA`IM~@c@dDg@vDsAfKg@lDe@lDcCbR{@rGYtBg@lDg@tDcDhVIl@Kl@Kx@SpAIj@]tBqAtHIb@CH_@xBCTiJdi@uAbIgAjG}BnMiL~p@YzAi@nDOz@g@rCi@`DSbAGd@YjB[~BMnAQ~AAHEf@AJEl@Gr@G~@El@A^Cd@Cn@M|DCbACh@Af@APCt@SbHGdBE|@E`A?@EdAG`AEv@GdAGfAC\\Ef@GbACZA?Er@KdAIx@CXGl@ARGh@MlAOvACNGj@If@?BKv@OpAQlAUdB]fCi@|DMdASvAIj@?@e@nDIj@?De@fD[dCa@zCy@hGm@lE[|Bk@hEu@vFy@jGy@rGm@pEWlBEXIj@QtA]hCSvAIj@OfAa@`DStAYzBcAtHEXs@nFYtBYtB{@zGe@fDi@bE[xBGf@g@tDIl@[bC[`C]hCIj@Gj@_@lCa@vCS~AKv@Ij@YtBa@dDg@vDSvA]`C[fCYnBABId@ETKj@Qr@Or@Md@K`@IVGRM^Up@Qd@Sf@a@|@uAbDWp@Ob@Sf@ADOf@A??@Qh@I^CDKb@ADKd@Mh@ADKh@CFO|@Id@Il@In@K~@I|@Gz@ANEjACd@?F?B?DAd@Aj@Ad@?P?\\?`@?P@Z@x@@^@Z?L?XBlAD~CFhC@l@BhBD|AFhDDnB@fADhC@HD|B@n@@l@@r@D`B@l@DxAFtBBx@DlAFtADdAFjATfEBd@JpBBVHdBDr@J~AJhBJzBJlBDt@@RJ|AJnB@PTnEPxCFpAJtBThE@F?@@X@H@HBb@D|@D|@H|BBfAB`ADlAB|A@dA@V?V?ZAd@@dEAjDAZ?b@E`GAl@AtAAlBAn@?^?r@Ad@?P?j@Ax@@rA?h@?V?t@?@@t@@r@?^BtABp@@d@Bz@Bf@@FBx@FlA@FDr@F~@F|@?BRxBXpCFp@Jz@LfA?BFXD\\BPBNRxAPxALz@NdABRFd@@D@BPrAHj@D\\BRPpALx@NpARrA?D\\zBZdCXjBXxBHj@DXZdCBPRvAHj@Z|BT`BFj@Jl@bArHlA~IhBlNRvA^pCPpAPpAL~@NfAVhBVnB\\dCPrADXFj@Hd@NlABNFl@?@NhALrABRLxARfCD\\LpBLnBNjCNjCRdDb@rHHrAJzABl@BVFbADr@HrABl@Bb@LnBNhCNlCf@lI@LRrDH|AJdBRjDDr@RfDHvADr@X|EDj@Bj@JhBRhDLlBl@dKDz@HpAJnBN~B@PLnBDx@HpAFnAB^JvADt@?H@JDv@HbABd@?FDt@Db@FhAHtAJnBJbBHvALlB@N?FDj@Bf@?DDf@?D@JRxDDdA@@?BDzA@v@@xB?D?j@?tD?B?l@?hC?h@?B?`I?tH?`G@vG?xE?tB?L?l@?lB?Z?lA?L?l@@ZA~@?bA?VAN?^?RA^Cl@Ad@Cp@IrAIz@E`@?@E\\AJA@QnAE\\Kj@Mr@[tAGVGPmAxE?Bu@~COt@A@Ib@e@~BgAjGA@ANCRu@hFM~@Mz@APGb@Iv@MnAAFALO|AS`CKlAEd@KlBKnBGdACh@GxAG`C?HCt@Al@Al@A\\EdE?fC?tB?@@tA?r@@V?@?T@l@@T@bA@n@@ZBv@HlCFpAHvA?@FrABTBl@Dj@B\\@NDl@@RFfADv@JbBNhCJ`BJdBJjBHtALpBDx@PnCHpALxBPxCVhEPhDZ|EVfEHvAVzED|@H`CB`A@RFpCBjB@xBBzCAR?l@ApBArBCvAEvBGlBKpCIjBGfA?@Cj@GpAAHCl@Cl@El@?NGfACl@EfAARCl@Al@EbAAdAE`C?FAhC?XAbA?p@?h@?l@AdBA~B?|D?NAhC?n@AzA?zA?l@?PCtB?@ApAAv@?@Cj@ALAZCh@AFEl@CZGj@Ix@Kt@OdACLKh@Kj@EPEXGXENOv@YtAOl@Kf@ETSbA_@bBSfAYpAg@`C?@e@|Ba@jB_@lBKd@c@rBg@dCCL[zAg@dCI^GT]fB_@hBS`AABQ|@_@hBu@nDS~@_@hB_@fB_@jBMj@Q|@S`AS~@SdAKd@_@jBS`AS|@UdAYxAYlAYrAUfAU~@i@|B[jA[jASr@_@lA]jA]hA_@hA]`AEJUl@a@hAUn@o@~AYp@Sh@s@|AEL]t@Wj@Wj@MXKRWh@k@fAYh@c@x@cAhBi@z@i@|@_@l@W`@o@`Ak@x@i@v@IL_AnAOROP}@fA_AfAo@t@_AfAo@t@Y\\SVoAxA_AhAoAvAg@j@uAbB[^m@r@gApAw@|@i@p@[^C@}AjBiAvAiF`GsCfD{@`Ao@v@aAjA[`@a@d@c@j@_@d@m@x@oAlBMPo@fAKTCBEFKLS^{AxCmAlCu@hB_AjCaAtCqAtEcA|Em@fDk@bE[hC]dDSlCMbDMfDIfFDjKBvM@|A?hD@rB@jC@rHBzG?xA@vD@hC?jC@hC@~DBhJ@dF?D@rB?lB@lD@lC?bB?fA?rA?v@?P?n@Ax@Cv@Av@?LE`ACp@GlAC`@GjAANKpA?FC`@AJIzAADUfDY|DGz@AJGhAKpAEp@C`@KxAMfBEf@_AjNSpC?BANIfAEj@?DIjAGv@Ej@?DAHIjAMnBIdAEl@?BARCXEb@Gn@It@EZAHIj@?BMp@Mt@UnAI\\?BMj@a@nBu@pDYrAGZMl@ER?BI\\eAdFId@i@dCEVCLu@jD?BS`AgAlFo@|CYnAQr@GVIVSp@_@hAIVKVWn@Wl@GJEJKTABs@pAc@x@ABWb@o@lA_AbB_@p@uClFeB`DaBvCmCbFoClG}@fCmArDOl@AHg@fB[pAMd@G^Ot@i@pCw@~DUnAELOx@_@rB[zAcAnFe@`CETu@xDAHENs@zDYzAGVEXiAbGMl@ADm@`DKj@Kl@WnAc@zBShAsA`HUpAUfAGZQbAe@~BAFo@jDu@xDY~Am@~C[`B_@nBgAzF_A~EI^w@jEUfAWrA_@tBADMp@A@Kf@oBpKMn@gAvFGZm@|CgA`GShAGZ]bB[dB_@jB[dBCNUlAMj@Mt@kBzJCF?@I^Kj@Kj@Mp@CLSdAGVAFAHABCPGb@Mv@CTG`@Ih@ALETEj@C`@C^AXAHAr@Al@?H?`@?`@?D@^@X@^Br@Ft@BX?FBTFd@BPTjB^fCPnA@LHh@XxBBLh@`E?DJr@Hj@Hj@BND\\L|@DXBLXxB@DVjBJ|@BL?DJt@Jv@D\\DX?DD\\Db@H~@@H@RBj@?F@N?T@f@?H?v@?j@?HAZATAb@C`@En@Gn@It@G^CPGd@GVAJCFQx@YhAMd@_AlDIX_@rASt@w@tCg@dBQp@K\\IZMh@_AdDc@dBMd@YbAOh@[jACFOh@K`@kAjEi@jBc@~ACNs@dCOj@CHe@dBmApE{AtFIXQl@mArEYdAmCzJkDhMa@zAGR?@CFk@tB}AvFy@|CYfA]tAMh@{@zDMh@Ib@Mf@YzAa@vBCLe@hCc@dCYbBI`@UnAQ`ACPUjAOr@Ot@Sv@GXQn@KZIXITIVc@jA}@tBkAhC_AvBQ\\m@vAKTWl@KXKVUj@e@nASn@i@~AELEPITK^Of@[nAUz@UdAk@fCmBpIs@`DcArEwBpJaAnEg@zBSx@UdAKb@q@~CSz@Mh@a@fBq@`Dm@bDm@~C[dBADa@zBI^e@hCMn@_@lB]hBKj@Q~@u@xDSfAo@hDuBbLQz@cArFGVk@~C{A`I}B`MAFUlAeArFeArFkAlGEVKj@w@bEETWtA]hBUhAg@nCSbAKh@s@vDyA~HqAbH_@nBABaAfFG\\Kh@Kj@s@rDUnAKj@u@`EcAnF_@nBCRo@fDMn@Kj@o@hDu@|DG\\s@vDOr@w@fEq@tDi@pCu@|Dw@fEKj@q@lDQ~@w@bEc@`CEVI^[bBOz@e@dCw@`E{@xEKj@Mh@Kj@o@lDIb@[|AKj@aBzIY~Aa@vBs@rDWtAOz@Ib@Gb@SvAIh@?@Gd@Kv@Gt@Ix@Ef@Ch@CVAPEh@E~@Cl@ANQlEOfDOfDIbBAP?@Ct@Y`GCl@Cl@UdFCl@KxBC|@El@Cl@KhCUbFi@jM{Bhh@kAxX}Ap^qCpo@G~AGdA[rHQdESlEcA|Uc@vJWdG_@bJQvDYrGc@vJCr@QbEYzGo@|NEt@EdAEt@G|AKpCUzEMlCGtAWnGIjBE|@GvAIjBIlBC~@EbB?DA`@Ap@Ax@?v@AvA?rABpD?^@n@BtADtB@RHlBBt@@PBb@FlAJ|ALvAJpAH|@PhBRfBJp@NnAFb@Hh@PjAF\\Jj@@HJl@Hb@BNb@zBLl@Rz@`@hBJd@ZrAb@pBb@hBr@zC|@`Ef@vBZtAz@tDf@vBXlA^dBVdAd@bCJv@L~@R`B@NH|@Dl@HtAFtAFlBFnBFnB@Z@P@TDdB@LDbA@l@DbA@JBdANjEDhADnADlABhAH~BFbBDnA@d@HpBFnBDbADzABd@?FBl@@l@LtDBn@@`@@JBn@FzB@JJvD?@JlCFtABv@L~BBd@FtAFx@BXPjCTjCh@dGJdAXfD@Hf@jFDb@LxAFl@BT?BBRDj@Fl@Fj@Dd@@FFl@Dj@@HDb@Dd@@DFl@B`@DVDl@Fj@JdAFl@PnBBVLxAJjABLLxAD`@Hx@LxAFj@B\\H|@NxA@HJnAFl@Fj@LxABPJhAH`ABVTfCHz@JjAD`@JdAZjDXxCRrBd@lFD`@BVRxBD`@LxA@JD`@TfC@H?B^`E^xD?D^zD\\zDBLBb@D`@D`@NhBJ~@PjBPjBPpBLtARlBPlBJnAJhAD^PtBPhBHz@BZDZD`@@LPrBHr@@LRxBHt@JrAFh@LzABPBX`@pEBNFv@~@`KBRFl@Dj@Db@`@jEJlAVpCRpBB\\PdBZhDTjCFn@F|@B\\Dp@B^@X@\\?N?JBr@?X?\\?`@?X?XA\\Cv@A\\A\\Ch@GfAAZCXIt@Gn@EZKx@W`B[vAKd@_@zASp@Sn@Yt@_@`AWn@aBdEq@`BkCvGiAnC_A~BmAzCgApCWl@{@vBQb@g@nAkBtEuAjDiBpEm@|AuAdDO`@g@lAYv@aB`EkArCO`@EJO^iAnCo@~A_B`EA@KVEJu@lBc@fA_A~Be@jAa@`AeAhCgDpI}@vBmAxCQf@Wj@kGvOeAjCq@`Bc@hAa@`Aa@fAa@hAIXIT[jAQn@Op@Mn@Q~@Kp@EXMt@Iv@Gt@Gv@IpAEr@A`@Ar@CrA?XCfDAjB?~@At@?tAGvJApBCzIIfO?jAAnBCjC?nBAfCAx@CfEArAA|EElHEdLAbBAdEC`EAjDCxBApC?L?VAv@Ar@A|D?b@?Z?v@AnC?t@Av@A`C?b@AlBC|ECzFC~CCtH?p@A~@CvGCdFAT?rAArA?\\AdDC`DA`C?PAbAAfCA~CC~D?\\CpD?^?LA~@CpH?D?N?N?^?J?`@?Z?^?PC~B?p@E|KAPAbB?n@AbC?p@AbBAjAA|A?v@Af@?j@?b@ArA?|@?VAX?Z?\\Ah@?J?b@?RAv@?v@?ZAv@AhC?v@CjCAhC?tAApA?\\GhJ?j@?@?H?`@?@?\\An@At@A\\Ct@CZAXAVC\\CXAPAJGp@Kx@Kv@Kr@E`@}@~EERiBjKaAjF}@dFUlA?Dc@dCm@dDI`@u@lEgDfR?@{@|Em@jDUlA}@`Fe@jCi@~CaAnFi@rC[fBm@hDY`B}@hF_AhFETs@dEk@xCq@|D[~AYfByAfI{AnIs@zDc@`Ck@fDMp@ABIf@QbAi@tCQ`AEZGXG`@GZKl@Ot@CPAHOt@Mr@EXG\\UnAGXEZGZGXEZGTG^UnASnAOv@ShAOz@e@fC_ApFGXUpAQ~@g@vCUnA[dBWrASpAUpA]jB}@bFCNGZEXG\\Mn@G^UnAMr@UnAMt@e@fC]lBk@`DMr@Mr@G\\G^Mn@EZGXGXCRAFGZAFCPGX?@Kh@AJGZGXEZGXMt@GZGXEXGZGZMt@GXEXERAFGXMt@Mr@Mt@GVEZOx@UpAc@dCOv@[hBs@xDUpAY`BI`@}@bFCNMt@UnAQdAKh@Mt@Mt@Ox@UnAUnAMt@y@tEc@dCUlAOv@q@|De@dCc@dCMt@Ot@Mt@UnAq@zDc@~B?@SbAY|A[bBMr@ABG\\G\\m@~Cw@lEWvAMp@ERs@|DUpAMv@Ot@CPCLKl@{@vEKl@u@dEm@jDmBtK_@vBUpAeA|FMp@ADMr@G^Ov@UrA_AhFk@`DMt@_AlFKj@CJi@vD]pCALe@`FGj@Gl@g@`FCR]vDO`CGx@KnBCx@Av@Cj@C|B?b@?L?lA?h@?tA?H@d@@r@?N@h@BlADr@Bz@HxA@RB\\BZ@Z@P@HDb@@JB`@Df@TjCH|@X`DTlCX~Cf@xFZbDPpBXbDJnAb@zETdCNlB\\tDJdATjC@JXzCZnDBVB`@VbDFz@Bz@Bp@BfA?r@?x@?\\Ar@Cz@ErAIvAEb@KhAE`@It@MlAKz@OnAQ~AEb@SpBOnAOpA]bDSjBOpAIt@It@WfCKt@It@Iv@It@OpAIn@G`@EXMt@Il@Oz@UnAUnAMr@UnASfAOz@ShAUnA]fBk@~C[hB]jBc@bCe@hCUhAUrAaAlF[hBc@bCc@~BOx@UhA]nB]jBMp@[hB]hBUnAk@|Cc@bC]jB[hBMt@c@~Be@fC]jB[fBa@~BKp@G^E^Ip@Gt@Gv@Gz@A\\Ct@C\\Ap@ApCAl@?`AAn@?|AA~EAnBArD?l@AfB?DCnH?j@E~J?fAAz@EbNCjHCvHCpJAzA?fAC~C?D?tAApBA~FAZ?~@AxDIpWAr@?l@AtA?|A?RAfAAvA?jAAnCAxEArCElMAl@AdF?n@ApAAdB?l@AhC?n@ArA?bB?l@Al@?BAlC?f@AjB?rAC|F?|@?TCfD?jAAfDAz@?lA?D?f@AlAApBAdD?z@AnA?J?P?N?x@AvA?ZAjCAhC?^A`EA`BAxCA~EAtA?@AfDA|@?fA?v@ApBAhC?p@CdHA`EATAdGAbEAn@ArAAx@E|CMzCIjBGfAGr@C`@En@Gz@CXGh@K`AO~AAHIj@UdBE`@AHId@QhAO~@CNShAa@tBCFQx@_@`BSx@Mh@m@vBQr@a@nAi@`Bu@zBGNaAtC{@bCGNaArCeAzCEJkAhDaArCM\\gClHmApDABuClI_ArCe@dBS|@Mn@Mr@QdAKt@In@Iv@IhAIlA?JCp@Cv@AJArAArA?p@?xD?j@@~AArH@fE?l@?xD?~C?tg@@h_@?jD?jE@jH?rB?dE?vH?rA?`G?zF?`E?lC?xA@jG?bV?dD?pJ@hF?HAnB@bF?n@?x@?nA?hBAvB?dI@vA?jA?vG?|F@fJ?dK?nB?|G?jG?xH@zG?hF?|C?jC?pC?dF?jC?bI@`G?xG?|E?tB?jB?zE?h@A`CAjEEvGC|EExGG|FAfDE~FEzGEfFG|KCbFGvGC~EChFE~EAxCAzAGvHCbEAnBCzFGjKAtBCbDCfDChC?tACdEC`EEfEC|EChDAjDApAGzIGhHAbDCrCEvG?nAErFA`@ArCCnDGdKCbD?l@ClDE|JGdOCdFA|@AzBAbC?DCnEA|FCvDAhB?nAIlMApDAfCEtGEfLArCAbCAX?RAjC?XIrM?bA?PCnC?dC?D?X?vC@^?L?`@?vA@~@?l@@nC?^?l@@dB@pG?B?f@DnP@pA?n@@zA?tB?p@Af@?~AChCA^?j@At@?F?J?@ExEEdDCtBAvAC`BAd@AdACv@?^A`BAz@?`BAb@EdEGzF?DAx@ApAAv@ChCAn@?TE|EA^AvAMpLMlL?T?\\?XCvAArA?X?@ElCA|A?PAX?\\?ZAv@At@AZAvAA\\Ar@Af@Ab@C|@G`B?HGnBADEpAKjBGpAItAGt@InAGx@Ep@CXCPATIx@Gx@MhAIz@AHK|@MpAMfAAPWrBg@`FaAfJeBdPi@xEGb@?BEZSjBGr@W~BIr@Gd@WhCGh@YfC?@c@zDu@nHSlBIr@SjBQvA?@Gp@OpACZCZCXAJALCXABEr@Gv@AZCXAZGtACv@Ct@AZA\\AXA^Av@?f@AdBCpBA|@ChCAjCAXClCCfDAxAA~BEvDC|CAzACfCAnBAH?f@?DAp@?ZA^?XAdDApC?J?\\?pA?pA?jB?l@?JAp@?^?v@?`D?@?Z?nA?~D?t@?lA?t@?r@?^?lBAtA@h@?d@?rA@hB?rA?@@jB@lB@jC@fC?h@?r@BpE?P@nBDdK@T?PB~G?~@@bC@pBDdJBrF?fA@dD@~@?r@AZ?z@Ar@Av@Av@A^Ab@APCx@Et@Ex@Ex@C\\Y`EMlBGv@El@Ef@i@nHU~CEh@ABEj@CZARC^AJYxDWpDARCT?@?@AXMlB?@CZ?JABEdAE~@?BA??RATMpCM~E?@Aj@?@Aj@?@AJInI?dD@`E?hABjI?~@B`F@nCB|F@bD?d@?@?F@hC?d@?@?D@hCH~X?@@~B?v@?l@?fFAbIAvBAvB?j@?RAb@?~BAtAAbC?lBAvCAbC?LApD?NA`AAx@AxAAX?FGdEANEdDG~DEfCEhCEpCEnBApAKrF?\\G~CAh@CtBC`AAv@OfJEhCIrEEhCQ~Ki@h]EdDM~GGfFErBE~CO~KAh@C|ACnAEdCK~HAf@ExBAf@CvBCtCEzACpAEjD?JCnAEvC?^Al@Al@Al@EjC?FCrA?HA`@?NAPA`@Cf@IjAOhBA@Eb@E`@Kr@AJId@Ib@SdASx@Ol@Qr@IVCJK^Sf@Qh@?@w@lBSd@yAnDMZWr@m@bBi@zAy@rCa@|AK`@EPK`@EPa@bBWjAQr@ADKb@uA~FMh@WfACL]zAgArEKb@[xAYnA]hB_@nB]|B?@WdBSvAE`@Gh@MrAKz@KrAKpAAFG~@GhAEd@?FE|@GjACl@A\\?NCj@CbAAXAh@?BAl@?LA^Al@?@CtA?BElB?\\Cv@EfDMzGEhCGvDEzAAh@ChCAd@C|AATE`DEdCCp@Ap@IrEKrGCrBOnIE|BC|AEbCKbHI|E?FAd@AFEhCC~AUfOCn@An@E`DEzC?DAlB@bC@h@@d@@V@P@j@@h@Bn@D`ABb@@VB`@Fz@Fp@Hx@Hx@Hv@Ff@@LHp@Lt@@LHf@Lr@Hf@TjAH`@ZrAPt@FVNl@Rp@@HRl@Tt@Ph@L\\Tn@DHNb@x@nBJXP`@Vj@Tj@Tj@x@pBz@tBBDf@lA`@dAf@tA\\fA`@|A@DPp@Hd@Lr@?BDTDPDZHb@Fd@@DB\\BRBVBP@P@PBX@N@LBZ@XBX@^B`ABz@@bAAT?^?XCpA?@A^ALALA\\Cj@Et@Ef@CZEZOnAGb@Gd@Ib@Mt@Kj@K`@Oj@Sz@YdAQr@eBtGq@bCGRMh@wAnF_@xAKb@Oh@Oh@Mh@Oh@k@xBQp@u@pC?@Mf@A@AFYnA[tAKh@Mt@M~@OlAGt@Gr@OnC?BYtFC\\QpDKzBEf@E|@Et@MbCQrDIzAGnAAXCn@CVEjAEn@KzBM`CCd@IzA?BAPAVMrCCb@Cf@EtAInCADMdFGhCE|ACl@QrGIvCClAGfCKdDGhCC|@QxG?@GfCEtA?DE|AAl@Cl@EvACvAQ`GGhCIjCGtCA`@EnAAt@Ap@?FCpAAtA?HCjAArAApBC~A?N?\\AtACjCAB?l@An@?NEhCApBCjCCrBElCAbBGnFExGCvBCfCCpDIbIIbIMzNEfFKbJG`HExDAdBE~CCjDA|@GdGE~DArAArAAVChDC|BApAA|@Av@AbA?BAnBAbAAt@Ap@ArAEtCGrHIxI?TCrBEvD?n@ChCAl@K~KGfFGrGIbIK~KM|NOzN?l@Al@AzACjCM~KIzJIbIeApkAIhIAl@Al@MpNCdCMhNWrXKlMG`G?P?NAj@EvDChBKnK?b@AjAIbI?b@E|CEpD?d@AR?VAlAAxAAfBCtBAj@?h@Ah@EvECzA?H?DEpDClCClDCbBCpDGrGIpGCfD?X?z@?x@?lB?v@@x@@x@@t@?B@J?`@@H?@@h@Br@@f@Bz@Dv@@\\Bv@Dv@Fx@@ZFv@Dv@PbCD^Hz@JfAFh@Ht@XdCVjBDXXpBRpA^jBVrAf@hCh@`Cn@bCRz@fAtDbBhFTp@DJHRPd@Vp@Zz@NZf@nAbAxBl@rA`AjBP\\LTLVNXVb@h@`AbAhBt@rAz@|AtCjFjBfD@B~@bBR^T`@Vf@n@fAhArB~C|FhEvHjArBrBlDLRR^JRh@|@r@lABHd@v@p@jAh@dAf@|@LRFLJPf@|@R\\xBtDBDJNBD~@fBt@pAp@nAr@zAh@`Ah@`A~BfEt@tA`AfBfAlBTb@Tb@dCnE`AfBj@dAFJ~@dBXj@LRzAvC|AxCxB~DrAbCfB`DpA~BdCpEBD`BxC`@t@Vb@Tb@`CfEt@rAvAhCnEdI^p@rAbC|ApCh@~@@BR^`AfBDFPZ`AhBDH@@rAbCxAhCTb@PZ\\j@hDjGxAlC`BxCj@dA`BvCZl@^v@\\t@Zv@Tn@Z`AX~@Nl@Nl@Pt@TnALr@R`BNtAJnA@VFdADxAD`DJdNBpDBvFFzJ@l@@zABrEDbHH~L@dC@nA@fC@zABvCFjI@nD@d@@rABxEBzEBxBB|EDfH@jADrG?l@BvD@@?l@?l@@hA@^BjE?Z@v@?H@fA?dABpB?dB@d@BrCBzD@hC@l@?d@@dB@`ABdD@hCDdF@rB@rBBlE@hBBfCDpE@zC@xA@~A?j@BlBFdJB`FBnD@nCB|B@dB@jB@pABpC@fEJrOBpBB~DBfDB|EBlFT|]DbFBtFDjFBhB@bEBnC@jC@nBF~GBzD@nB?\\BjCDxH@H?`BBdD?J@l@@hDLxP@l@?d@@nB?b@?l@DvDBxD?h@?BBvD?H@b@BjDB|DBtC?lBBnBFrIDpJ@b@?l@BvA?~@BvB?z@@fB?F@fABpDBrDD`FBnF@bBBrC@rA@l@?b@@dB@dB@rA?PBdD@hC@n@D`E@|A?l@@jA@nB?NDfE?|@B~B?l@?J?H@b@BdF@`BBpD?@@j@?@?jADzFDtG@bA@nB@Z?p@@`@@fB@jA?xA@j@@x@@dB@fB@bB?DBpC@zC?TDxD@|BB`C@hB@rC?F@b@BvD?D@rBB|B?tAJjOHdLDbFB~FBzCDjFBtFBpB@t@BzE?jADbGBfD@jABvB@zA?z@@nABxB?|@D|F@hC?@@l@BhD@xB@XFjLFlG?f@?bABnBBpB?|BBbB@zCBjC@`DBnCD~G@r@?b@D`E?b@@zA@|A@fA?R@l@?v@@j@@pD@|BLxND`H@zA?`@@l@@rA?fA@l@?p@@h@@vA?l@@j@?p@BhC@fC?@DfFDrGBzC@xA?lAF`H@nA?n@@tA@`B@^@hC@z@BpC@tA?F@d@?D?tAB|B@lCBxB@tA@dCDpC@bEBlC@l@@vB@dB@`@?J?l@BfFBvD@tA?FBtB@`C@v@DzF@jCB~CFfJ?NBdC\\|g@HxMX~`@@xB@`E?tA?tI@fB?n@?vB?pW?xP@lC?`M?`b@@bV?zA?~@?jE?tG?rG?pN?tC@vH?bl@?tG@hPAn@@`C?nC?~O?T?hM?fD?nC?bH@dV?hS@pL?`R?`M?~K?jC?vD?bI?jC?vD?hC?|SBnf@?fF?~BBtCBfFFpJ@xDBhCF`LBvDBxDBnGD~G@|@FnK@l@Pr[@t@BxDLtT?l@FpJDdF@hC?@BvDJhP?|@BhDJhPH`LJbRBjFBlEB`D?DDnG@r@?p@BnD?p@D`F@`BB`F@`B?\\BtC@p@@jCDrEBrC?H?l@@f@?|A@hA@l@@|A?l@?FFjG@vD?@?l@BfC?@?b@@H@hC?@?X?RBlD?VDbIHlNDbE@hCFbIf@fz@HhPFbIDbIBtCBjC@~A?x@Av@?fAAr@Cv@Cb@Cj@IrAIx@Ir@It@EVADGd@ADO|@ERG\\CJMh@?@GVEPELIZCLK\\_@hA_@dAIVMXKXMTMXe@~@OVUb@e@t@W`@q@~@m@x@m@z@k@v@mAdBm@v@QTGJeAxAEFY^W^U\\CB]d@s@`AGJa@h@a@j@GJcAtAIJaAtAIJs@`AORW`@A?m@z@u@dAGF]h@KNWZW^CBm@z@s@`AW^EDW^c@l@{@lACBEHIHEFW\\_ApAe@p@Y^Y^kA`BkAbBY^EH_@d@m@z@_@h@]f@CFY`@[j@Yj@[j@Wl@Uh@CDMXSl@Qb@?DMZOf@Mb@Uz@CNYpAMn@Mr@Kn@Ij@Ih@E`@Gv@Gt@Gv@Cf@Cl@Cl@Cd@Cx@A`@At@APGjCKhDCb@?@Ah@MbECn@?\\Cj@GvB?PANAZEnAIbDGlBKfDQvGANAl@Cv@EnAM|EWbIA^Ar@ADGfCGjBChACl@IzCCfA?@Ch@OhFAf@Ad@MfEAR?LKtDCl@AZC|@?NEjAChAEnAAh@GxA?VKjC?HAb@GjBIlCAb@CxACz@InCE~@KvDAl@OfFOdFMdFOdF{@jZKvDKvDoBrr@?F}@b\\u@hXAFAd@?De@bPAl@EzACl@EzAa@zNe@fP{Adj@StGQrG]jMKzCGlCE~ACl@k@tSQzGSxGItC?H?FAVKhDExAa@bOA`@KhDCj@E|AG`CGnCCf@A`@Cv@MtEANCjACl@?NCl@UrIWdIEtBEdA?TCl@GtBAf@KdDCfAGxBMfEARQxGKdDAd@W~Is@fWQvGM~EMxEGxAK`EEnAElB?@KdD[~KEvAAf@EtA?LCf@ClAEjA?NALWfJEbBEzAIhCEfA?L?FAVATQrGErAErAC|@Al@OzEMhFAFAl@AZIzCE~@ChAAVAT?NEjAAl@C|@[nKAl@Cz@IzBAl@AVCx@Cv@Al@EfAEfB?FCl@IhCGhCAX?FALAl@IhCCr@EtAAr@QlG_@lMAVKlEABEvAAp@EbAC`A?BEvACp@?TE`AAp@K~CCbAInCIhCEnBUfIGhBE|A?@EpA?DIjCAl@SzGAd@AL]|L?BAh@?BEpAGnBGpBItCKvDWdJWhJC~@SfHw@bYMjEAP?DQrGCdAIrCMbECdAG~ACx@EjBKdDMdEK`EC`AKvDM`EEpACz@CbACbAAZGnBA^Ad@G`BCnAErAO~EIhDCj@E|AK~DEhA?HCl@E~AClACv@?@I|B?DAd@AJG~BEdBEpACn@Al@Cv@QzGCv@SxGGhB?FAd@EdAEbAIdAMvACVCVIp@QdAMv@_@jBEPGVYrAg@`CQv@YvAYvAa@lB]~A_ApEi@bCg@bCa@lB_@jBMh@GXYrAeBhIGZ}ArHi@fC}@jEyGp[UjA_@dBCNIZI^w@tDk@tCOp@a@jBYvAUhAABKh@Kf@G^Mr@ETE^Mx@QhAAHOpAIp@OvASpBSzBSlCOfBO|BG`AEl@Cb@GjAGfAIvBGnBEfCCj@Ad@EjCGtCOfGKlFAp@MrG?@GtBI|EIbDAn@E~BAHGjDIhEEvA?HA\\?DAl@Ab@AHEtACfAGjAKxBK~AQpCQfCAXM~AGz@C`@c@|G?DKxBIbBAj@?BCz@EtB?DATMbK?DCbC?DEjCG~GC~BCzAAnAEjC?`@?FA~@CjB?BAf@?d@AN?FC`C?TAj@?RADCzB?`@?FARC`C?DA^AX?BA|@Ad@?FEfDE`DK`KCzBC`CChCInGAh@Al@?BAp@EvFGpFOhMClAEfEy@lt@w@~r@CfCAp@EtD?BCvAAzAOnMAj@?BAh@GfF?n@Aj@C|A?l@C|AAj@ChCAn@OlMAv@IxH?HItG?b@QbPAt@C`CAl@?HAb@Al@An@At@AzACjCCzAChCItGM|KA|AGpFAL?f@ExDC~@?l@CnBAl@CdCCdBAb@CzC?VCpAChB?BAjAA|@GrFGpFEpC?R?\\?^AJ?P?JGfES|R[zXUbRSbSOlM?BY~XC|AUxQCfCChCClCExDM~KKdI?j@K`IAl@GfFGvDCnBMhFAVKfECjAA^ChACn@A^?LM|EEbBCbAOlFGlCAl@AJg@rTa@dPKrDQrGKhEAZAp@e@tRSfICt@GhCEzAE|AMtEk@xVSzHChACt@?JChAC`AAn@CxB?@CnB?pA?ZCdB?r@?z@?j@ApBAhD?r@?X?zAAbA?pA?l@AL?t@?H?L?J?V?H?J?hA?bB?n@ApBAbCApE?~AA^?hBClIA|BAz@A`AC|CKnIS|KAn@?b@Al@K~FObK}@|m@OhKGpD}@do@i@z]?TC|AE|BE~BCxB_@bWIfGe@b[CzACx@IlBGxAG|@KtAKvASrBUhBSbBUnBsDnYc@rDkAdJw@jG}A~Lw@jGaCpRQvAIj@?@Ij@eC|RIn@AJCL]lCa@fDqAfKM`Ae@pDE`@G`@CTIj@K~@s@rFS`Bw@dGi@lEGh@Ir@K|@Kz@Q|Aw@hHk@pG_@tEUnCMfBUdDC`@a@nGOxCSlEGnAOrDOnEOrFInEG|CG|EIfFY|RG~Dm@bc@g@n^cAlt@i@f_@KrHEtBIjCE~@Q|COrBoD~]qCbXWfCU|BUrBI|@EZAJQxBCXM|BMdCCZCl@u@`REz@EjAEhAKhCE|@IlB?JC`@KpCMpCU~FCj@SzEkAvYUvFWrGCx@GjAOvDAPMdDK`CQvECl@M~CEdAI|ACf@Cp@SnFK~Bq@pPC|@IjBAT?RAb@Al@?bA?`B@f@Bv@@ZDt@?D@JF`A\\bE@J@JPnB@JJpAHt@B`@l@zGD^Fx@Fl@LxAD`@Fx@Fj@LzAB^Hx@Fl@RfC@@RdCj@nGNxAJrANzADj@rAhO@Td@`F?@H~@PlBJpA@NHbAJnAB`@Dp@HrA?@Dl@B^HhB?DBf@Bj@FpADx@Bl@?FJnB?PDl@DjAHjB?BLjCDz@HhB?HLhCF~ALhC`@nJBl@LhCNvDPvD\\|HJhCLhCNbDZlHJdC?DFhC@f@@dA@~@?r@?\\ArA?V?z@CpAAj@EdAEtAAZCt@ErAEtAErAANEzA?@IdCQbFG~@GhA?@Et@Gv@KpAGd@Ej@OpAIr@Gl@AHSjBCNKz@Iz@]tCc@fEMdACRe@jE?@Gj@CT]|CADEd@Ix@IbAOdBIpAEx@Ex@C^Cp@CtAA\\ANA`ACrA?b@Al@?x@CdEChDAnBCfDC`ECfDAvA?@AlAAz@AzA?NAxBAP?\\AhCArBClCCfD?b@A|A?j@?@?RAXAnB?ZAj@AdB?r@CrBCtEA|@?z@?NAfBAj@AjB?bAAHC|ECxD?l@AzAArACbECnB?TGdJEzGOtWApA?N?RAjCChC?l@AjCCpCK~RAhCAxBA~@EpJCfFCvDCfFMtTCfF?l@IbRCfCCpBCpAEvA?LI|ACj@GbAMlB?DUbC?@MlAKv@?@Kz@U`BQfAWxAShAYpAYlAa@dB[jAe@bBq@|BYbAM`@e@`B]hAIXc@vA[bAY~@K`@gAvD}AlF_EdNaAdDi@hBe@bB_C`ISp@YfASr@a@bBS~@ADSz@Ml@Oz@UlAIn@Oz@Kp@Kx@Kv@AJGh@Ix@E`@ANEd@Gj@Eh@K`BEj@EbAGdAErBCd@Av@CrAC`CCzC?BAbCAr@AhFCnEAzBCxD?x@?j@KtQCtEAnCClDC~EIpN?d@EtGCfCAlBAxAAL?ZAl@?REpBEhCCnB?BChAA^Az@AVCrBAPEtBAn@AbAAh@AZAd@ElBGfDAt@?PCbAEjC?DEhBEfDAp@Al@A~@AhAAl@APCtC?P?PAZ?l@?@?NAZ?P?T?DAnAAhB?B?L?Z?NAhDCzH?jAEvPAl@?l@?f@AbBAdF?l@CdI?\\GfRCxMA~DAbDAf@?`ACxKA~DCjIClG?|AC~EAfDCbECfE?h@IhGAx@KbIElCAjAIxFC`BG`FWfQCfCGzDAt@GdFAn@EhCCxBC`BExCEvCCvB?NC`ACbBGbEEdDCbB?@Ad@GbEErD?@CdAOdLG`FKlHIlFIhHK`GAhAUhQGjDIxGMtICpAAnAQjMGdFA|@CnAAXAl@?j@C~AAdACbACzAAvACdAAd@?\\Al@EjDAh@CjB?JAb@At@?T?PA|@EdCA`@Aj@ClA?l@EhBGrGArAGfEGzEKtGKvHIrGKvFAl@ErBMtJ?LCfCCbCCdAEvDG`E?d@GxD?ZAPAl@EfD?PAl@GrEM`KA|@m@jd@e@|]?@Al@AdBMhJAh@CxBAdAEtBClCGfFMxHGdE?b@C`BA`@CjBAn@GpF?@SjOEzB?X?RKtG?BAh@G`GClACtAClBEbDEdDElDATCjCGbFIhGE|CCrAAv@CvBEzCK`IEfCEdDAdAAp@EhCEfEGvCG`FCrBAh@?D?f@AD?n@I~E?D?b@Aj@EhC?D?FAVArACdBCpBEhCAv@CtAAxBEdBAv@Q|NAf@GnFAb@CjAGhEOfJGfDCtA?`@UnMAd@MvHG|DGbEIdFGlDG~C?@EhC?@]rT?XEfCAXEtCAn@EhCChA?PCzA?@ChC?l@ChCAn@AbA?VAl@ChCEfF?l@Al@?l@K`LAzAGtGGbIGbIAlAA|ACpCEfFAl@AhCExDCrDE~D?`@AvAAjA?DCxBAhACxDApAAx@AjAErEAhCKlMGtGA|BC~BKlMEfFCvDK~KEfFEfFEdF?l@AlAE`EEdFChC?HCnEIjIA`CAl@ErEAbBEvDIrGCbCI~Hm@xk@I~F?@ExDChCO|NGdFGfFGrGGhFAz@ApAS~RExDEtDYpW?PExDAl@EvDClCCrAEfEErDKjJ?@?l@C`BC`C?BEhE]f\\OxMC~BG`F?@?@G|E?F?h@?B?@Al@M|KAn@QhQI~HAnBAl@AlA?NAtACvC?hA?D?JAzAA|AA|CAP?F?R?X?l@An@?vA?BAzAAl@?l@?~@A\\?LAlA?zAAl@?t@AzAAnAA|B?l@A|AAzAAfCA~A?l@AhCCxDAvDCfD?@?zAAl@?l@?l@AnBE`GAjCChC?l@CxDAzA?l@EbIAl@EtH?L?l@Oz^?l@AvDCvECfBC|AM|DSbDMfBGn@El@Ix@KnAGj@e@`FUlCc@zEO~Ay@dJGr@Ir@_@hEIv@g@vF{@jJIbAK~@CXGx@SzBGj@CXYzCIx@S|Bo@`HQpB?@Gj@Ef@WlCCPa@tEOpBMjBMnBCVGfACd@CZEz@I~A?NAJCn@GnBCrAKdE?REzCChAIrF[jQAl@An@Av@Al@Al@Ah@Al@Ax@AXAd@?FC|AEhCCzAMbIATInEGnFAZArBExDAl@?vAAl@CxGAJGzNChGAXAlEGnMCdFAxDGlMAxDAzAAjCG~KAfFCdFClD?x@E`EA`BA^G|AGxACp@KjBKdAI|@QjBe@~DW|BYhCYfCYfCEZc@bE]|Cm@pF?BGf@ADQ|AEf@Gf@ADOxAOrAADOxAGj@Gf@ADEf@ABOxAOrAADOxAGl@QxAGj@OxASnBQlBMvAEt@MfBALALC\\ARKzBGfAAX?FOdFAREz@?TCz@K`OA~@EtFCtDAfBAnAE|ECbECdBCnCA|C?LAl@ExEAzAAxACbAEnBCpAOnEYpF_@nGA^QpCEj@e@vHIjAGjAWhECX[jFQnCCt@kAvREl@[zEIbBCb@KbBEr@c@nHu@xLGbAAL]lFeDpj@Ef@[jFIrA?DWzD?@Cf@QlCCf@c@tHkBtZ}AtWy@rN[bFGbAAHEl@Ez@C^MpBAVAT[bFGdAEl@ItAIdAAX_@dG?JEl@Ej@KzAWlEGbA]xFk@lJIxAEj@CZCl@CPy@dNUdEWzDc@xHCZu@`MIxAKzAANKhBG|@GjA[bFe@~Hq@zKS~CGhA[lFKnBO~BEl@IzAKpBIzAG~AEh@IzAC^CZAFEr@YlEO~B[dFOnCIfACVKpBEl@aAhPEl@aAbPk@hJYxEq@zKQvCCd@O|BOfC_@rG_@dGAJo@zKaBvXEl@El@Cl@En@ANUhD?LOzBEx@O|B[bFi@`JEh@Cf@QhC?@ATCVAT_@pGUlDCr@q@`Ly@jNQrCO~BCl@ANEl@El@El@C`@Ef@Cb@AHIrAM`B?DEf@Er@Eh@K|ASvCoCv_@e@pGWtDYtDiA`Pi@vHWpDInA?@El@CPk@|HMbBOvBIhACn@_AdMQjCKpASpCAJInAQfCEj@?@]tEALa@rFU~CCh@OrBMbBGv@s@~JKpAIpAY`Ea@hF?Dc@dG?BEh@?@KvAA@Ej@?@Ej@El@Cl@YvDOnBaA`OC\\Ej@QhCEl@Et@KpAANOxBYvDK|AKzAUxCQfCg@fHQxBWzDOzBKxA]lEMpBUxCY`EK`B{@|LYlDMnBI~@k@~HGz@G|@OhBGv@Cj@Ej@E^InAGz@IbAEn@Ev@Cl@Ex@Ez@GpAMvCEdA?FCf@?@?@MjFEpCARKtHG~CCpBC`BAZErBCbDEhCCrBEtCAl@An@CzAAp@_@`WGlD?V?PIbE?NGjDC~BAL?HAb@ElDClBAb@?JCrBAXAXAdAC~AEbCAlAATAj@Af@AhA?TAb@A\\AlACfAA~@A`@AZ?TAl@CzA?@CjBCxB?FCvACxAA~AEzAAzACbA?HEfB?FCpCGdDAjA?FExBKbHC`DClAAl@AV?TAV?NAD?T?F?NAl@AR?XAR?VAp@C~@?ZAl@Al@Al@AB?h@At@Af@?@EjCAj@An@Al@AlAAL?b@AH?PAhA?@Cl@?\\AN?Z?DAJAt@Ad@At@?N?VAT?LAv@AVAf@Aj@?\\EhBAj@Al@?BCvB?BC~A?HE|B?BCvAAr@AdA?B?B?BC`BA`@?JA^GrDAl@?PAX?TAV?TMpH?ZAj@AZ?@?F?LMvIAj@AhAAp@An@CtA?LA`@ClAAx@Ab@AhAARC|@?@?LAdACdCCdAChBE~BEtC?RElCAt@?@EjDItFCxAC^EzC?FCzAAl@Al@AhAAv@Al@?@Aj@?@Al@AlAALCxB?NCjBClAA^A|@EhCAl@AZA~@ChB?`@Al@CzAEjCAf@CrB?NCzAAT?VAn@Ax@ANAt@CdBAl@APAlAAj@Al@AZC~AEhAGfA?DEh@?BI`AGp@MbAIh@Ih@Q`AQ|@Mf@Kf@Ql@[fAa@pAg@vA{@`CWp@a@dAUj@]bASj@_AhC{BlGaCtGa@jAuAxDi@xAcArCw@vBc@lAe@lA{AhEWp@q@jBQf@EJq@jBQf@Wr@_@`A{@bC_@bAi@zAQd@{@~B_@dAeAxCo@fBELCHELKV"
                     },
                     "start_location" : {
                        "lat" : 38.7597291,
                        "lng" : -90.4293467
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.5 km",
                        "value" : 11501
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 421
                     },
                     "end_location" : {
                        "lat" : 38.9717421,
                        "lng" : -94.5169604
                     },
                     "html_instructions" : "Take exit \u003cb\u003e8A\u003c/b\u003e to merge onto \u003cb\u003eI-435 S\u003c/b\u003e toward \u003cb\u003eWichita\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ujkmF~gu_QKDCBQ^yA~D]`Am@bBMZa@`AKR]n@OZIP?@Uh@ITGNQb@ABIPGNAD?@IRCFA@ELGRCBOf@KRQ`@?@SVSPQHA?YD[AOEIAUQAAUYUi@C]A]Bc@Ha@BCFSLODGVO^IB?`@AVB@?`Ap@^XZV@@ZZRRFFf@j@f@p@FHl@x@j@v@r@bABB|@hADBN@lBjClA~Ap@~@`BxBhChDv@hAdCfD`AvAlAxAb@f@d@f@n@p@l@h@p@f@\\Xt@h@x@b@l@XzAr@x@V|@XVHb@J\\HPBLBF@`@FLBh@HN@LB`@BZBj@B@?N?fBDT@X?|ADp@BZ@F?T@z@BxAF`B@`FHX?jBDb@@b@@t@@n@BtEJ`DHP?~BDr@@jCDjDHnCFpAB~CJrFHjADp@B^@n@@xABb@@vBB~DDj@B\\Ah@@\\@\\@`EH~ABnDFnCFRBxCFpBBhBDtCDHAr@@lBDz@BP@`A?fEJ~@Bj@?ZF\\BrABdA@`A@j@?h@?ZAp@GXEZETEBANEDAPEFABAJCXKl@WPIJERKNIZSRMDCFEPMPOPOPQPONM@CPOPQPQPOPQJKJMRQBCTUPOPOPORMROPKPMRMRKRKTKn@WHCd@ORGf@M^GRELCVCJAHAZCVAPCVAL?P?D?D?L?L?L@P?D@F?L@L?VBTBLBL@TBHBF@XFJBH@LDPDVHZJHDJBJDLFJDJFJDXNNHNJRLNJJFNLDBJHFFNJHHFDBBPLVRLHLJHF^XPNB@^ZVP@@PNNJJHHFLJLJLHJHf@\\^VDBb@Vd@XRF@?PJ^Np@ZLDJDl@RxA`@b@Jl@JZDh@H`@F@?d@BD@f@Db@BX@`@@hADj@Bb@BfADb@@|@Dl@B`@@`CH@@n@@zAFjBHl@@|@DvAF~@Dl@@hCJvAD@?Z@D@@?`@@fCL@?D?`ADb@BD?@?|@DB?b@BB?fBHVBP?T?@?D@b@B^@hBFfADfADF?~@@T?p@AP?NA`@CBAD?zAITCpBSb@EnBSn@GPCzBUdCS@?HA`BI`@?@?bA@lAFr@Dt@HjAPd@Ff@Lv@VD@HD@?n@R?@NDfAd@t@Zr@`@B@p@^p@f@VR`@Zx@p@XZVXx@`Ap@t@pAfB\\b@\\d@~@dAdAlAdC|Cv@~@?@X\\X\\@@Z^X^b@f@PT^d@LNr@|@t@|@`@f@l@t@LPj@n@~@hAJLd@l@`AlAz@dA`AjAZ`@FFj@p@n@x@f@n@t@|@zAjBbBrBlAlANNFF\\XZVlA|@v@f@f@Z~@j@j@^@?b@VXRPJPJVP\\R\\R"
                     },
                     "start_location" : {
                        "lat" : 39.0572311,
                        "lng" : -94.4859168
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 558
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 38.9677309,
                        "lng" : -94.52064009999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e69\u003c/b\u003e for \u003cb\u003e87th st\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ktzlF~i{_QHRBFHFJHd@Xd@Xz@h@d@X@?\\VpA|@TPj@b@`Av@\\XFFn@h@|@v@t@l@TRFDBBNNRRTPLHNN@BFJDRBP@^"
                     },
                     "start_location" : {
                        "lat" : 38.9717421,
                        "lng" : -94.5169604
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2407
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 143
                     },
                     "end_location" : {
                        "lat" : 38.9742164,
                        "lng" : -94.54522489999999
                     },
                     "html_instructions" : "At the traffic circle, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eE 87th St\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "i{ylF~`|_QCLAB?D?H?N?FBJ@FBJBJBB@BBBHDDl@CdAAl@EhB?LA^CzAKzF?v@Cf@AX?p@A|@?^?n@AzA?J?jC?p@AZ?JA`@Cj@Cn@APCZCZ?FAHEl@CREVIj@ABGh@a@bCSrAABQzBG~@CXEbBCfB?J@nB@z@@l@@hA?xACbA?BAn@E~@E`@KxA]fCUjA[tAKd@ABUz@Sj@IPw@nBg@pAmAzCaAfCqBjFEJSj@CFm@|ACFYb@WZMLONWRULIJGV]V]V[TA@UN_@TEByAv@WNs@\\C?a@Lc@F"
                     },
                     "start_location" : {
                        "lat" : 38.9677309,
                        "lng" : -94.52064009999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.4 km",
                        "value" : 5367
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 460
                     },
                     "end_location" : {
                        "lat" : 38.9746343,
                        "lng" : -94.6065576
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 85th St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eManchester Tfwy\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow E 85th St\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by UMB Bank (with drive-thru services) (on the right in 4.4&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{c{lFrz``QT|B@@?H@@B`@@N@R@HFj@Fj@Ff@BNDJBLDNDHFNBTjAlBTXHNHLJTFPFNV|@Fh@HzAJhA@H@F@DNRVtCRlB@Z@ZA|@Cb@K~A?FAX?PAFAd@ChBAxADpABp@CrB?TCrBEjCAv@C~BAnAE~AIhCM`BG`CExDAn@Al@EpBCfAEbCAl@Al@CzA?PAZC|AQlMCzAAl@A|AK`FCzAAl@CzAEjCCzAEdDChCAjBIj@GjCKzFA`A?@AP?v@Cv@AXC\\CTIr@Kz@E^QlBCXDZCt@?XAp@?j@?l@@f@@T@ZB`@?FBXB\\FnBBd@ArAIdFIhFEhCAxAIxDAx@?ZA^Ab@A^OfLEhCGnEGlEGpDEV?RADCtBCr@Ar@?v@GhB?f@CbA?t@ATFl@?TOpJGlEEhCAl@Cp@?ZGjEAxA?n@?zAGfFE|BAzAEzAE|B"
                     },
                     "start_location" : {
                        "lat" : 38.9742164,
                        "lng" : -94.54522489999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 343
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 38.9720378,
                        "lng" : -94.6055884
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWard Pkwy\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mf{lF~yl`QAdAt@M`B_@l@WtAm@vCgBh@YXKFCFA"
                     },
                     "start_location" : {
                        "lat" : 38.9746343,
                        "lng" : -94.6065576
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "979 km",
                  "value" : 978551
               },
               "duration" : {
                  "text" : "8 hours 44 mins",
                  "value" : 31462
               },
               "end_address" : "2777 Zuni St, Denver, CO 80211, USA",
               "end_location" : {
                  "lat" : 39.7576731,
                  "lng" : -105.0158432
               },
               "start_address" : "8600 Ward Pkwy, Kansas City, MO 64114, USA",
               "start_location" : {
                  "lat" : 38.9720378,
                  "lng" : -94.6055884
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1877
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 131
                     },
                     "end_location" : {
                        "lat" : 38.95884240000001,
                        "lng" : -94.5962131
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eWard Pkwy\u003c/b\u003e toward \u003cb\u003eW 86th Terrace\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gvzlF|sl`Q@?FAbBc@tAUf@KbBQfCKvCGzCDbBLh@FN@b@F\\BlADF?x@@@?L?rACLAF?VAB?r@GTCFA@?lAUTGj@QDAt@]z@_@t@e@fCkBv@y@JKNO`AaA`@c@TWj@u@~@qA`BiCP]pAkCLSJUZo@h@iA`@_ANa@HWBGFS?A@ARs@Lg@Lo@Nu@F[BUF]Fe@NyADu@Bm@B{@"
                     },
                     "start_location" : {
                        "lat" : 38.9720378,
                        "lng" : -94.6055884
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1991
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 177
                     },
                     "end_location" : {
                        "lat" : 38.9411564,
                        "lng" : -94.59674769999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWornall Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wcxlFhyj`QBY@IBGDGBEJMX@~CDdBBbBDnABb@@R@d@?b@@f@A^AlAAb@?t@AT?^Kb@@b@@`@?v@@zDFnCJ`@BjCJN?^BbBFT@N@hCHxAFr@Bb@@L?T@f@@Z?rCFR?\\@pBDfABbBB~BD`CDP@\\?x@Bl@@z@@`ABH?T@j@@F@@?^BxA?ZTdA@J@"
                     },
                     "start_location" : {
                        "lat" : 38.95884240000001,
                        "lng" : -94.5962131
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 386
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 38.9394863,
                        "lng" : -94.60057259999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto the \u003cb\u003eI-435 W\u003c/b\u003e ramp",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gutlFt|j`QDDBDDDFBBB@?BBDDDDDDDJLp@Lp@DVFXDRBNNn@Lh@Pj@Vz@@BFN`@pANb@FVJXX`ALb@DHDFJHFD"
                     },
                     "start_location" : {
                        "lat" : 38.9411564,
                        "lng" : -94.59674769999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.2 km",
                        "value" : 13171
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 442
                     },
                     "end_location" : {
                        "lat" : 38.9399827,
                        "lng" : -94.74877529999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eI-435\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Kansas\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "yjtlFptk`QpEnSj@tCRv@FZj@bCh@~B@DJb@dAtE\\xAZvAj@dCjAlFLh@dAfFl@pCl@nCTbAd@vBXdAfA|EhAfFPz@Np@Jd@`@pBZjBFd@f@pDJz@D\\Z~CPxBV`FLhFBtB?vB?h@CfICfFAdIAzA?V?@?pBErI@lB?|D@^?F?@?R?jA@nA?TFfF@V?H?J@V@XHvB?LLfC@V?@Dj@@TFlABd@Bv@?@@Z?Bf@nJ@^@LPvDBl@Dl@@TJrBPtDRvDBl@FlAHzAFxADl@Bl@HzABl@Bl@Dn@Bj@?@PtDBl@BV\\fHFxA?@LhCDl@JzBB^@\\@h@B\\RpEVdFHjCD~B@p@?B?t@@dAAlAAfAA`A?RAPAl@Cz@Ch@AZC|@El@Cb@E|@C\\KrAYlCEj@KfAQbBk@~EE^ALs@fGKp@CVCP?BEZAH?BEXC`@EXQxAYdCYdCGf@OpAMlAM~@G`@Ir@[dCE^i@pE?DOjAGj@AJIn@QvAQzA_@bDALE\\?@AJWxBE`@AJAJGl@Eb@M|AYzECz@GzA?LA`@Al@CdFAdB?TAdAArB?LAlDC~BChBA|BAvAC|@G`BOpHk@xWA`@?BCd@K|GAlAE^E^Il@YhL?p@CbA?JE|AGvBCpB?dC?FA~D?\\?@?zA@xD?j@?n@?pA?@@pC?j@AhA@tF?jE@r@?r@?H?h@?D?l@?pH?dF?xLAzE?hA?dF?xI?rG?fB?X?T?RFvKFbU?T@Z?X?F?D?F?D?B?B?H?F@F?PAd@@`F@d@?p@NfUHhK@zA?l@@zA@zAB`ADvAA~@A~@C`AEj@?PC`@Cb@I~@CTIt@Ir@Gb@EXCPEZMp@Ot@I`@Sv@Qp@[hAUp@KZQd@aA|B?@MXA@u@fBcAbCMZm@vAO^CDKTEJABKTEL_AvBgBdEM\\w@jBWh@o@vAo@vAmAvC"
                     },
                     "start_location" : {
                        "lat" : 38.9394863,
                        "lng" : -94.60057259999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1186
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 38.9426314,
                        "lng" : -94.76168229999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eI-435 W\u003c/b\u003e exit",
                     "maneuver" : "ramp",
                     "polyline" : {
                        "points" : "{mtlFzrhaQ_CrFm@xAQ`@Q`@CHWj@Uj@[bA[dAMd@Of@Mb@KZ[zAa@zBEPG^AJIf@QfBIjAGdAATATE`BA|BAnC?XAnCAfAA`BC~A?DAfB?JAl@?j@Ah@Av@AhA"
                     },
                     "start_location" : {
                        "lat" : 38.9399827,
                        "lng" : -94.74877529999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1360
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 38.9428831,
                        "lng" : -94.77603019999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork to continue on \u003cb\u003eExit 1B\u003c/b\u003e, follow signs for \u003cb\u003eKS-10 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLawrence\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "m~tlFnckaQIZ?B?D?`@Ap@?@?JAf@Cl@KlBMrAOrAKv@?DEVSpASfA?@SjA_@~AYjAOr@a@xAMb@M`@IXIXQj@Wv@Sn@GVUr@W|@W~@K^I^CPERE^C^ARAXAf@DbAB^J~@`@vATv@\\z@R`@@DP`@?@Rb@l@pAf@lAbA~Bn@~ADJL^J^\\hA"
                     },
                     "start_location" : {
                        "lat" : 38.9426314,
                        "lng" : -94.76168229999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1398
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 38.9416191,
                        "lng" : -94.7920147
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eKS-10 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_`ulFd}maQP~@`@zA\\nBVzARhBP~ADn@DhA?@@X?T?B@ZBlA?@Bj@?fA?dABpI?j@?`@?LD|E?J@v@@jA@`@Bp@@f@D~BBjA@ZJzCDnADfAFhC@h@@b@Bv@?N?DBrB?P@Z@r@?P?f@@hC"
                     },
                     "start_location" : {
                        "lat" : 38.9428831,
                        "lng" : -94.77603019999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "53.2 km",
                        "value" : 53162
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1746
                     },
                     "end_location" : {
                        "lat" : 38.9674932,
                        "lng" : -95.3342038
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eKS-10 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cxtlF`aqaQ?xD?l@?`A?hC?bB?tA?rB?X?B?l@?l@?fC?@?rA?R?b@?b@CpF?F?d@AfAEpE?XC|CEhCAfBCfA?^AZ?FAdAAbAA~@?ZCzAAnACnBAt@?PCfA?|@AZ?PAzAAbAAXA`AAf@?D?l@ADAtAAl@AdAA|@?FAl@GdFEzFAbB?pA?n@@tCBjE?X@l@@bA@r@HdI@r@BnA?HD|CR|JDpBDrBBvAB`ADfB?N@ZPvJBv@DzBPlIBfABhB@dAB`BBbE?~B?dD?bE?R?r@?rD?~A?fB?~BA~L?~B?|C?xA?vA?rF?H?t@?zHA`H?D?^@TAH?tC?zA?nD?~O?F?fC?XAT?l@?j@?~@?n@?H?dC?nD?~F?|C?fB?~I?l@Az@?Z?hC?pCArBCfCC~@EhAMnCKjBUlCKjAMhAWrBQpAAFO~@a@|Bg@hCe@pBs@xCIXy@fDk@~BENaAbESx@e@lBq@lCYjAmAdFUz@cC|JwB|I]tA[pAWjAc@lBEL_@vBAHQ~@SvAObAIj@Eb@AHGh@MbAEj@CTGn@CVQfCCh@GbAEbACb@C`AAj@Al@Aj@AT?f@Al@?D?f@?^?n@?\\?d@@nABfADjBBl@@RHdCLpDHlCHnCHdCFbB@z@@b@?v@?p@AjBC|@Cl@Cl@Cf@C`@Ed@E`@Ed@E`@Ed@CNCREZE\\ERCTSfAG\\I^I`@I\\GXGRGVM`@IXCLGRKZ_@fASj@Q`@Uh@Uh@]r@INQ\\[j@mDnGi@`ACDm@fAc@x@m@dAWb@GLm@dAm@fAINCDe@z@[h@KPMVS\\w@vAc@t@Yf@u@rAw@vAKRMT_@n@IPWd@OXYh@OXIPYj@]v@KVk@rASb@O`@g@vAKXELYv@Sp@[bAOh@Of@Oj@W`AOn@I\\ERGTSdAWrAGXGXIj@YhBQnA[zBKt@Ij@It@WjBMbAWhBMfAKr@Ij@AJSxAYxBGj@Kt@Ih@WpBUdBIj@?BYrBgBbNaAtHWnBIj@UhBYrBGf@Gd@Eh@EXCXC\\Gp@ARCPEn@En@E~@A\\Cf@Ct@Al@A`@Ap@At@?j@?dB?hB@v@?|@?`@@~C@xB?zA@|@?`A@fA?lA@rC@rB?hB?J@rB@dA@~E@vD@hB?~B?|C?nB?dD?|A?n@?@?H?H?X?Z?^?jE?fD?zAC|B@jB?rE?nB?vA?b@AhL?hB?v@@pA?~@?fD?P?X?R?tE?P?hA?tB?bA?T?vD?v@?\\?tE?`BAxE?dA?l@AtAApACxBCpBErCC|AA`AA\\CdCC~@AfA?ZAN?f@C~AEdC?RAlAE~BA~AEpBCbCCxACjBEfCMnJ?NAz@Cv@?x@Ah@?VAD?B?D?LI~E?FCzACzAAt@AvAAXCvAEhD?PA^CxAA|ACzAAVCnBA|ACtA?BAl@?JApAC~@AdAAp@AP?N?R?HAT?DA^?^AXAt@?D?FAl@AD?H?\\AL?^?@Cx@?@AlA?H?BAl@?VAh@AL?F?BAn@?H?TAf@?RAl@Aj@?RAZ?`@CdA?`@?@Al@?RAfAAl@CbAA|@?F?PCpAEhD?HC~AAjAAf@AlACjBClBALC|ACzAAx@A|@?\\ANGfFEpDAr@Al@ItGCbACpCEpC?nA?dA?l@?BHxEj@dLBVBVT~BJ`AF`@DZJz@BNXnBJf@Jn@P|@DXFTJh@@DH`@@BT`AZrANj@J`@X`Al@lBBFPl@^fAd@nAf@nAXp@`@`Af@bAx@dB`@t@HNXd@JRHJJPVb@d@r@b@p@X`@JPJNJLX`@Z^HLPTj@r@NN\\`@f@j@\\\\h@j@ZX\\Zh@f@j@f@j@h@f@^LLPLJFZTfAt@rAz@TNvCjBdBhAjBjARLtClBf@\\VRh@`@d@^PNRP\\Z|@z@^\\TV^^p@p@^d@RTFHHHFHPT`@f@^d@^h@X^|@rAt@jAVb@d@|@\\l@DFx@bBTd@Tf@^z@Rb@N\\Nb@LXDLVt@^bA\\`AZdAFPJZDN?@Pp@ZlAPp@Lj@VhAFVj@xCDTF\\BLD\\Jp@TzAR~AT`CH~@PpCHf@F~@@^Bd@?FBl@Bv@@l@@TBdA?J@nA?T?dA@P?jA?L?^?h@?BAhC?zB?N?vB?vD?nBAT?B?hC?fD?n@?jB?bB?z@?lA?f@?p@Ah@?`A?r@?v@?J?~@?hD?lB?@?V?l@?bA?X?j@?l@?p@?B?l@AdF?rE?b@?pBAX?n@?nJ?`@?~B?n@?p@@b@?lA@R@\\FpANhC@@Dj@BTHt@@JHl@Ff@@BLt@FZPbAVhABHNl@Ph@Pj@Z|@J\\Xt@n@xAN\\n@pA@Dp@vAt@|Ab@|@b@`At@~ALXLVn@rATf@HPLVFLb@`A\\p@|AbDzAbDpAnCj@hAVj@`@|@h@hA~@nBh@fAh@jAJRhA`CR`@pCdG~@lBz@fBdBtDBDvAzClAfCfFvKhAjCVl@Rf@lAfDBH\\fAn@vBPr@^vAR|@Lh@`@pBP~@Jj@DV@BNz@L~@N`AJz@LlALdALtAB`@@PFv@FhADh@Bf@FjBF~AB|ABfB?`@?lAAhCARAv@Ah@C`AAb@A\\Cf@?JC`@AVAFEdACTEl@?@GbACPGp@AHKnAMlAOlAS`BMbAIn@_@hDi@tEk@~Ec@|D[lCUpBOnAS|AWbCM`AQ~AO|AEf@CPALGj@]jDY`DYlDIdACTCZKlAs@zIEj@Gl@y@dKMbBObBEl@Gn@g@hGGp@Ej@s@tIuAtPGp@?BGx@I|@?DIt@E`@MdBCZANSdCQxBEj@E`@WzCC`@Gj@Ej@KlASpCGt@G~@Gt@Cp@Ex@Cl@GpACx@A\\Al@AVAf@Ap@C|CAn@Av@?Z?J?D?d@ARAx@?LCbD?`@IjKA~BArBAx@CvDCdC?FAnAEjGAl@ArCCfCC|ECpCAtAAbBAt@?^CbCElFInIC`CKvQA|BCvDA~A?f@AR@hA?vAB`A@jAF|AJrBTnCVxCn@zELn@ThAb@~Bv@|Cx@nCp@lBPh@DJDJf@lAn@xA@DtAlCBFLRV`@BFRXBFlAnBV`@\\b@\\f@t@~@bAhAz@|@PRh@f@p@n@|@x@`@`@NNtCtCjDhDRTJJLNd@n@d@l@d@r@nAjBPZ@?T`@DFT^Zl@R`@\\p@Zp@\\x@Td@|@bC@@BFL`@Vr@^jAn@zBT|@^`BXvARdAPbAPfAPnAHf@TxBH|@L~AHnAFfADbABdAD|A@lA@`BAvA?`MAtECpYAjKApBAjAAb@CbAAbAa@zMYzFATSnDa@`JEl@KhCEl@Cj@GzASvDCd@[xGIzA_@pHShEGr@Er@Cf@U`FMvDAZKdB[zEANC^g@bFOdBObB_@jEKbAO|AQnBOfCGfAUhEEvDGtCEjBOvHAl@A\\A|@UfKArBGvEAhA@nA?`@PjEHlADr@Hl@DXJhATnBNx@\\hBx@rDZfARp@dAzCdCnFlAfCHRZn@P\\BFN\\jAbChA|BDH~AbD~@lBT`@~@rB`A|BZz@JPRl@J\\FPTx@`@|A\\|A`@zBPfADXBP@J`@bEFp@FxA?J?@DrAFxA?xD?rD?rA@rA@`EAzH?jC?Z@zA@lF?h@@nB?~C?fGAzAAj@EdB?BCj@Ep@Cj@A\\OhBOtAOpACLIp@Mp@?BOt@QdAQx@Uz@gAtEa@|AaCdJkApECLADMd@K\\AFIVc@~Ay@hDqC|KoBpHMh@W~@GTKb@YjAuFjTq@jCu@xCOh@kAvEm@zBs@rCOh@q@lCOh@i@tBgIr[{@`DOj@Mb@Od@O`@Qd@Wr@MVYn@Q\\]n@Yh@i@|@MPMRIJMPUZOPg@l@y@|@c@`@oDhDYX_GtFo@h@c@b@_DxCOLyAvAkBdB_GxFq@n@e@d@C@_A|@MJk@h@[ZONq@r@[^SVST[b@?@KLMTILU`@U`@MTINITINKT[v@Sh@M`@KXCJELCJABEPENQr@UhAMr@Mv@E`@CLCREf@APAFEb@ALEr@AXA\\?NCl@A^?n@?x@?@?z@?`A?J?jA@rI?l@?zA?nM?l@?xC?\\?l@?|@?vEAt@?VAj@AZAPEl@Cp@Ef@C\\KbA]fDG~@KrAIrAGrACp@Ab@AjB@`A?`B?~@?T?z@Aj@Ab@Cb@AVC\\Gj@If@Kn@EROn@Ur@Sj@GNKVA@MZYj@ILIJOVORa@d@SRIHSRUNURYNQLWN[LYLa@LSFq@L_@Fk@F[@a@@U?MA[Ai@EUCSCa@Ie@Gs@Ks@M[EwJ}A}HmAsAU_HeAsEu@kAQqDi@sCc@aBUgCa@iC_@_AMWEYCs@IWCoAIEAE?wAI{AEm@?s@Aa@@yF@c@@}FDeHFeDBuCBiB?"
                     },
                     "start_location" : {
                        "lat" : 38.9416191,
                        "lng" : -94.7920147
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 449
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 38.971455,
                        "lng" : -95.3333133
                     },
                     "html_instructions" : "Take the \u003cb\u003eUS-40\u003c/b\u003e exit toward \u003cb\u003eLawrence\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTopeka\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "yyylFv}zdQOIQAgAAq@A{@Cm@Eq@KIASCc@Ie@KIAWGo@Og@Ka@IoAWWEgASm@M"
                     },
                     "start_location" : {
                        "lat" : 38.9674932,
                        "lng" : -95.3342038
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "27.8 km",
                        "value" : 27836
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1196
                     },
                     "end_location" : {
                        "lat" : 39.044346,
                        "lng" : -95.6042502
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-40 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "srzlFdxzdQ@zD?F?@@j@?P?dA?xB?xA?xB?N@hB@bB@dC?jEBxD?|B@vD@xDBtG?tB@bA?l@?l@BbF?B?zA?D?tA@jC@zABbI@zA@zA?n@@zA@~C?V@l@?rB?r@?d@?n@AT?nAAx@?h@?l@Al@?l@?@?j@ApB?|@?h@?z@?LAfA?D?dA?d@AzB?bBAbD?z@?p@AvA?^?nA?zA?L?rAA~E?@?JAtAAbCAtG?vA?x@?@?^A|B?v@?B?l@?^AL?NC`@ANAPCZE`@CRCNG\\GXIZMh@ELGPUh@Ud@[d@a@h@g@f@SLEBe@Xm@ZID]JA?UFKBC@M@OBYB[@G?I?S@m@?w@?K?I@aB?K?_B?I?cA?_A?uB?aB?a@?mB@gA?c@?c@?c@?c@?iB@e@?c@?c@?c@?gA?iD?I?gA@gA?qB?]?w@?O?eA?g@?cB@C?M@M?O@I@Q@UDI@IBC@I@WHMDGBUJ]PQJYTMJOLSROPMPSZCBQZUb@_@x@Yn@_BtDi@jAoAvCaAxBw@`B?@Ud@]l@Wd@U^OTW`@W`@Wb@QZCDKPMVMTGPMXUh@?@Sd@{AnDGNSf@Qb@IVM`@IXGTETKf@?@QbAERIj@WvAO`AG\\Gb@QbAIj@Kh@Mz@CLe@nCEVAFu@rEW~Ac@hCa@dCGb@E^EXCV?HALATAV?RAn@A|B?t@?bA?lA?hC?|@?zA?bA?`D?Z?~B?H?d@AP?N?L?D?FAF?PALC`@AJALAJCPAJG\\AHAHGT?BGTGPCJCJEJEHKVEJILGNGLGHEHOVKP?@OTSZYb@Yd@]h@W`@]h@U\\g@v@]j@]f@_@n@m@~@e@t@CFKNQXCBSZOXCBU^Yb@[d@CFSZa@l@MREFIN[f@CDEDKR]f@[d@KPILCDQVS^EFADA?KRMTILCHCDGNCFEJABIVGNCLEJEREPCJADCLCJALCNCR?DAHADAVAP?FAN?H?LAX?R@h@@Z@T@PBTBRDXLp@Jn@Jh@FX@FBNFZDNBPDTHb@FX?BBF@JBL@NBLBNBV@V@RB^@f@?P?X?PA\\?TCVA^CTCZCRG\\Ib@G`@GRENENADGRGNCHGPIPMZABSd@GLO^O^KVELQb@ELGREHADGRENEPENAFCHCJCNABG\\CTGZANEZCRCb@Ed@C\\Cd@CZG~@OvBM~AEr@ADEl@ATEn@G|@Gt@Eh@?FCb@?@C^CXATAR?H?H?J?J?R?NDvB?Z@d@@f@@T@V?ZB~@Bx@@lA?B@X?^?`@?\\?N?L?V?RA`A?NAj@Az@AfAAt@Av@Ap@A`@?RA`@?r@C`A?VAd@Ah@?B?`@AH?^?LAl@Ar@Ad@CrCAb@?@Ax@AnAAl@?FA`A?PAl@?B?h@AP?X?X?l@?VAV?`A?@?f@AdA?r@?N?v@?V?L?^?RAl@?h@?n@?d@?|@Av@?h@?h@?n@A~@?f@?d@?n@?PAJ?RALARARANANCPAHADAHALAHCHCNGTENEPEPGVK`@Oh@I\\GPCNSr@Qp@Oh@GTENK`@IXYdAQr@CJOh@Ux@IXIZSv@Qn@Sv@Kb@GNCJCJGTAFELQp@Sv@GPGXOh@Of@Md@AFGPETA@GTMd@IXGVIVGXGTELIXQn@Qr@IXKd@K`@G\\Kh@If@EZG\\QjAQfAStAGb@GXIp@QbAQfAIh@ObACTABGb@ETCRADGd@ETCNGb@EVE\\GZEZGZEXCNCTId@ETMx@G`@CTIj@Kl@CPEXETCTIh@Ih@Ih@GZIh@EVCTETEVId@G\\CRETEPEVI^EVCJAHAHCHAHETERGVEVETENCLAJENG\\GZI`@GXEZUhAKf@EVCLENCPGXCNADEVG\\ETCTEZCPAXATAD?HATAT?PAJ?R?FAL?RAR?VA\\?NAP?JAL?J?JATAL?@AHAHAFAF?F?@AFCJEZEPCPABCHKb@Qv@I\\?@Mf@?BK`@ETGXA@Ib@GXEVAHI\\Kh@EXGVEVGZCRGTEZGXEVKh@G\\CNCLEXABETCPABERETETIb@If@ETGZGXEXEPAFERCN?@ETETERCPEPAHEPCNAJENCLAHGZEZGXEXA@EXCNABETG^ETAFGZCNENIf@If@GZKh@G^ERCNETCNA@GZWxACJIh@Mp@Kf@]jBMx@Id@CJKn@ETEXEZKt@QzAOfAKx@MbAMz@It@Ij@Kv@Kx@?BIj@Il@?BIl@CTCTM~@M~@Kp@Gf@AJIj@Gd@If@?@E`@Il@Kr@UjBIp@CJQvAIj@Gj@If@E`@Kp@Gh@EZGd@CVALAJANCN?L?@ARARATARALAX?NCb@E|AIfCAh@APAZAf@Cl@Cx@Cv@Al@ARAX?NAV?VAd@?^AdA?t@AbCAbBA~AAtD?HAb@?lAAnA?b@?\\At@Ab@Ad@ARCb@CVCP?BCVGVEZKh@Md@K\\KXITGPGLEJKPIPILIPIJABIJKLMRONIHGHe@b@gA~@e@`@a@^e@`@SPMJOL]ZA?c@`@g@`@_@ZUROJQLWNSLSJOHWJ[LGBMDMDE@MBQDA?G@C@QBG@C@K@M@SBK@M?E@U@G?[@c@?]@i@?g@?kB?W?kB@{@?K?c@?}@?I@iA?eA?O@w@?m@?Y?[?qC@i@?gA@S?s@?U?cB?a@@Q?S@Q?K@K@O@QBG@E@E@OBGBKBODODSHOHQHSJKHGFWRYVo@l@a@`@EDs@t@KJOPKJMPIHMRA@GJMRIPIPO^KXGRGPIZMp@CNALAJABALALALANALAL?@?PAN?J?@?J?LAlB?l@?T?V?n@?P?Z@bB?rA?nA?L?l@?P?dD?fF?bA?t@?v@?`@?p@?N?x@?pD@rG?xA?bE?|E?dF?L?`A?z@?H?pA?X@bA?hC?|A?dA?~C?zB?xCA|A?h@A`E?f@AlBAx@Ad@?XCZANAPAJCNCPCLAHCFCLCJELENELEJITMXCDKPEFKNKNMPONOLIJIFGDGFGDQJIFIDMFOHIDGBKDC@C@KBIBA?A@E@K@E@E@QBQBG@K?W@S@U@W?_@?C?S?O?O?Q@S@K?K@KBM@MBSDMDSFYJIDUJIDSNOJOJOLKJEFIHQRUXA@WZKLi@r@W\\CBa@h@g@p@KNe@l@s@~@A@i@p@ILQRY`@GH]b@q@|@kA~AKLc@h@QRSVOPUTABUTCBQPi@h@m@d@m@d@o@b@gC|A_@TOJaDlBKF}@j@_Aj@e@Xg@^i@`@g@b@g@f@e@h@OR]d@QXWb@OVWf@O\\S`@KXIRITOb@Mb@Mf@Oh@Kf@EXEPIf@Ih@E^CJCZE\\AR?@ATCT?BA\\AVA^?@AR?b@Ab@?|A?F@bD?R?zC?l@?l@?`@ApA?d@?f@?h@Ah@?D?^?dBAvDCtH?LAtB?zAAl@AtG?zB?XAlBAzD?l@?@?j@?n@?vD?j@AX?r@?l@?l@?fF?jC?pAAfC?lBAh@?r@?bC?jB?hAAnC?^CLA^?d@?f@?TAd@?n@?tAA`B?bB@|D?X?|A?N?p@?J@R?d@@B?@BH?vA@|D?|C?d@?zB?R?X@zA?R?hB?rC?r@?tB?nB?`@?|A@xA?B?l@?lA?L?jC?hC?vD?pA@~B?hC?rBAx@?lD?`CAdB?`CArC?l@?`A?fA?p@?j@?B?z@?bA?D?dB?d@AtD?@?jC?B?vA?l@Az@?`@?l@?j@?n@?l@?bA?X?nDApF?pCCD?@E|D?nA@vDCjG?d@@lDA`D?T?~B?D?l@?J?h@?pD?X@fCA^"
                     },
                     "start_location" : {
                        "lat" : 38.971455,
                        "lng" : -95.3333133
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1130
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 39.04038080000001,
                        "lng" : -95.60542359999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eKS-4 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-40 W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ezhmFpuofQiD@W?[?KAK?GAGAOAIAICA?KCMCGCGCEAECGCECEEEEEEEEEGGICEAEEGCIAECEAGAECKAIAIAI?I?K?M?O?K@K@IBMBKBKFQDMBEFKFGDGFGFEBADEFEHCHELCNEPCRCRAL?LA\\?V@VBt@FRBH?f@Hh@Hn@NVFPFb@Ll@Rn@P`@FRJj@Vl@\\d@ZFD`@X\\ZVV\\ZXZZ`@f@p@Zd@f@z@FLTb@R^@BV`@"
                     },
                     "start_location" : {
                        "lat" : 39.044346,
                        "lng" : -95.6042502
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 321
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 39.0385572,
                        "lng" : -95.6083029
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eI-70 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKS-4 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-40 W\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kahmFz|ofQJZ\\n@LTHLLT@B~BjEpA|BZl@j@|@"
                     },
                     "start_location" : {
                        "lat" : 39.04038080000001,
                        "lng" : -95.60542359999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "869 km",
                        "value" : 869049
                     },
                     "duration" : {
                        "text" : "7 hours 34 mins",
                        "value" : 27233
                     },
                     "end_location" : {
                        "lat" : 39.7797398,
                        "lng" : -104.9760798
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eI-70 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-40\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKS-4\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTopeka\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSalina\u003c/b\u003e and merge onto \u003cb\u003eI-70 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKS-4 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-40 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow I-70 W\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Colorado\u003c/div\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "_vgmFznpfQPb@`@t@d@z@b@x@t@pAl@jAjAtBdAlB\\t@FJVj@^|@HTb@nA\\jATt@Pt@@@Nt@P|@RhALbA@DFb@Df@Hv@Db@@J?F@H@DBJBP@RJjBVpEJxAFpABb@F`AN~BPhDLjC?BBl@JtCDnABr@@^@FBr@@p@@lAB|@?XBpC?z@?lE?XAl@?F?dAC|E?VAdBCp@?x@CrD?H?`@?JAzAAdC?nBAF?|A?tA?xB?`A?p@?T?N?HAzA?P?ZAzA?l@AhC?`@AR?\\?p@?TAtBA|AAjC?t@An@CrGClE?X?RAdD?l@?l@?@AnB?V?TAtB?@?RAdA?l@?l@Ap@?r@?p@AnAAbAAV?d@AVAl@A\\G`BEjAEt@Cb@APCXKxAMvAANADARCPCRCXE\\QrACXEZCJIj@QlAG`@ER?@QdAe@lCSnACL_BfJoArH]pBIb@G^Mr@GZERABg@|CIb@Ib@UrA?@Kn@w@pEc@hCKj@CTEPCP[dBId@ETMv@Kl@SdASdACPI^I^ELOl@IVQn@Of@CHSl@O`@KTCDEJGJABc@`AQ^GJUd@OZ[h@UZABCD_@h@a@l@c@l@cBjBMHSPKHMLi@f@WTa@Vi@\\QJk@ZGBYN_@P[LYLWHMBUHk@Nq@LWBi@D]@M@a@?C@g@ACA]C[Ac@Ge@Iy@W_Bi@u@Uk@SgEsAEC]Kc@O_Bg@uE}AaA[yAe@m@QAAe@K_@MeBg@kA_@{@YCAgA_@SIICwBq@]KECe@O_@M]GOEUCe@EM?S?K?M?O@Q@QBI@]DQBa@LODOF[LOHSLMJA?MJIFEDMJMLQRGHOROTKNU`@Uf@O`@Mb@Sx@Kl@Id@Kj@A@Kj@WbBYbBKj@Kh@s@hEIb@AFIh@IZEXGTMf@GREPSl@KXGTO^O\\Q`@U`@Ub@MRILU^CB?@EFMNW\\iApAg@j@gAnAs@v@[^UVs@t@_DlD_@`@CDWV[^KJy@`Ae@j@WZ[b@U\\i@|@MTg@jAc@hASn@K\\Ol@WdACNENCRAFyA~JIj@_@jCKp@ETCRADCPKn@QnAU`BObAQdAa@hCU|AEZCTG\\ALEZSpAMt@Kx@WfBIj@YhBk@`E_@hCW`BUrAMbAUhAG\\w@jDMf@EPq@hCaBnG_AtDYdAQp@I^Md@Kb@g@nBADWdAELe@bB[tAERKf@O`AEVIh@[fC?@Eb@?HC`@E`@Cf@Ev@AX?HANCnA?rA?r@@x@@`@Bl@@h@B`@@VBZ@NB\\@L@FB\\Dd@NlAJp@Hj@Hb@@HNt@Ln@Lh@V~@Tz@d@bBV~@j@rBx@xCb@~A\\rAVpALz@BRDVBN?B?@Ht@Fx@DpA?j@BtA?v@@X?|A?H@dA@xA?P?v@@T?bABtA?F@j@Bn@BbADbADv@@LFfA@NL~B\\dFF|@Dz@F`ADn@Br@Bl@DhADnB@~@@\\?N@zA@nA?~@BrA?BBl@Bn@Dj@Dl@D\\@HFl@F`@DVDZJj@Jh@?BLj@?@@BBFHXBLJZDRRn@DNL\\BF^`Ab@fAFPx@pB?@~@bCBJVt@L^Rn@Vv@ZbA\\hAJZFNJZFN@Fb@hAJZBDd@bAf@fAh@jAZl@DFh@bAn@dAfAdB`BhCdA~A`CtDfBnCzA~B?@@?@BRZdAhBXb@pA|B`@p@n@dA`AjBp@hAT\\bAfBJNb@v@j@bAt@pAN\\n@pAR`@d@hATf@\\|@p@dB~@rCX~@`@lABJJZV`Al@lCj@rC^tB?@FZXjBHr@Jt@\\|CLrALbBHxAB\\FxA@NDlABr@@h@B|A?T@~@?F@~A?b@?x@@n@?V@bB?f@?lA@hC?dC@xB@bD?|A?~@@tB@hC@rC?n@?N?\\?l@B~K@`@?bCBrL@N?pC?N@t@Hb`@@Z?l@?l@?L?z@@t@@hF?vB@pD@pB?B?|D?H?jB@fA?@?tB?T@X?J?@?B?X?L@@?@@lA@v@@N@j@@p@?@?D@f@@XBjA@L?B@`@@f@Bp@@h@FbB?X@JB`ADnB@f@@B?@?F?D@\\FbC?@?DBl@?F?F@Z@l@DvA@V?\\@LBhADvA@t@@NBfA@h@DhA?X@F@`@@l@@h@@X@X@n@LbFLfFDrA?BBxA@DDzA?H?@@X?B@VDx@FbADj@Fl@Ff@Fh@Hj@@HFb@Jj@DVBLH\\XnA^~A^~ALf@BHl@hCp@rCLn@Jb@Jj@Jj@Jj@Fl@TlBH~@@J@J?B@R@F?F@B@ZB^?@?XBZ?V@n@@T?T?j@@tD?^?B?l@?t@?^?N?T?L@bC@zE?F?N@lD@v@ElE?h@AJEzB?XAVAZALAl@Cn@ATCXAb@ADAVCl@Cj@El@Cl@AD?L?DAH?NCX[xFCVA^?D?BEf@Af@ADA\\APEl@?@C^GdAARCj@ARAZAJ?DCZIzAAPAZ?FCXEx@?J?DGhAAJEp@Cf@C`@?FAJCb@E`@?HGl@?FA@Eh@ANE\\?@Eb@MdAK~@E\\ABCN?BAFO`AAJIf@Gb@CJIf@ADERCTCJI^G\\CJI^Kh@ELERI^CJCHAHK\\CJK^AHK\\CJIZM`@GTW|@CFUr@Qf@K\\CJc@nAY~@GPAFYz@cA~Cs@xBOf@Yz@s@zBs@xB_@lAGVOd@GRUz@EPGPIZ?@Oh@GTGRMh@?@GRS|@a@hBABERETGRKh@?@Kh@ERGVQ`AETKh@ETETETETIj@Kj@CREVERMdAG`@E\\EXIj@Gd@CVET?DCLSpBGl@Gl@Gf@El@Gl@Ej@Gn@CXAR?FEd@GbAEh@Cj@El@AVAVAD?PAHAP?LCp@Ev@?JC`@?JA`@APC`AAl@Aj@An@Aj@Al@?J?`@Aj@?p@?RA|A?bA?L?x@?R?P?P?TERDhP?r@?hA?tA?`A?l@?~A?vA?n@?lA?fB?`B?zF?d@?~@?nE?l@?n@?l@?^?tD?|@?p@?bB?|@?fC@rB?xAB~E@~@?nA@`C?d@DfJ@xA?dA@bA?d@@fB?dA@fA@zB?b@?H?|@@vC@dB@`B?hBBpD@jA?nABbG?h@@fD?nC?dAAbAAl@A|@?V?TAT?BAPAf@Al@ATA|@Av@C`AAfAAPCpBCzAAHAh@Ab@Ar@At@?LAhAAtA?F?^?PA`F?@?p@Al@?zA?dBAnD?j@?@?PAxCClLA~F?fDA~ECdKA|JApEAfFCxKAjD?N?f@AnB?n@?l@?l@?l@Al@?l@AnI?p@AdEA~D?zAAlC?b@?^?r@?HA~A?xBAlD?vDAfB?vAA\\?xDA|DApC?lDA`C?dB?v@AnD?l@?`K?xB?n@A|E?hNAjF?vJ?bJ?j@A`@?^@`CAvI?jIAdF?nA?`B?B?B?vA?nA?xB?rA?TA|B?jE?nC?`B?vB?~A?zB?fDAfD?lD?tA?bB?lDAjE?vGAbK?~I?z@?bBArE?jD?nAA|B?d@?rA?zB?V?fB?lCArA?bB?pC?`AAhH?`C?nA?pDArD?fD?rB?rBAjK?rE?pFAlA?zGAvD?rB?nFA|@?dC?jC?~A?bB?`B?nC?ZA`E@pEA|B?x@?~CAl@?N?vE?nA@hB?rC?f@?`BAxC?tC?b@?|IAbA?P?B?p@?V?p@?rK?B?jDArNA~F?t@AhAAdC?d@AtAEjCGtE?b@Af@I`GAl@CjCCzAAl@?l@ErH?TA`A?bF?zAAL@@A\\?z@?bC?dB?h@?h@?|D?nB?pB?hE?bC?dBAdG?vI?vI?XAfC?Z?jC?fB?b@?lC?`A?|@?fA?b@A`B?vD?|A?hD?z@?v@?J?`C?vA?hA?nA?x@AjA?z@?Z?J?~C?lJAtG?l@?jG?jC?z@?xA?jB?d@?xB?lC?z@?pF?n@AjE?`D?p@?tB?R?jC?d@?pC?pC?xDA|F?xB?|H?bD?vLAtA?|D?nC?V?nL?hC?n@?`@?fB?l@?@?vD?l@?|A?zA?h@?B@tB?bA?l@@fF@dF?p@BxK@jA?H?D?nA@~B?H?|A?vA?BB~K?@@tD?|A?V?TBfF?pA?hB@l@?tB?r@@zA?bC@hC?dD?R@dA?@@~C?`A@nC?~B?F@lB@fF?`A?V@|F@bD@zE?`C@vE@hEBbKAHBdE?^?L?rB@~F@zA?lE@X?d@AzAA|A?DGpBAd@QlCKlAc@xDO~@]tBS`AYpASx@}AhG[lAWbAMl@YtAM|@M`AK`ACTGr@EdACx@Al@A|@?v@@z@Bp@@p@HjAJjAL`A\\pCNrAL~@^xC\\rC`@`DXvBTlBPzA@HLx@h@jEZjCJx@f@dEJx@Jt@PbBHfA@JBR@LHjAJ~AN~CB`ABdABfA@h@@fA?fA?hB?pB?pE?dE?bD?nB?tG?`A@\\?d@A|A@rA?pB?b@AtD?b@?p@@rA?F?d@?FAt@@~@?v@?pJ?xB?jF?~@?rG?zD?zC?nF@bE?bD?bA?p[?fF?fB?nA@d@AjBCpCGfCEfAEfACb@APAHAPCj@MrAKzAAFOpAQ~AGd@?FABQpAIf@ADIl@Ib@AJOx@Ot@AFADS`AYpAGVYlAABU|@Wz@AF]hAQn@g@bBEPQf@M`@qAtEcB~F]jA]jAOh@Ql@]jAQh@Qn@Oh@Qj@Uv@yCjKQf@IXUx@_@tAa@tAc@zA_@nAe@dB]xAYrAKh@ABQ|@Oz@CHOz@Kp@O`AIh@QxAIl@Ej@In@MvAKjA?JG|@En@C\\A\\AFGrAC|@?FEjA?@CpC?dB?hB?V@jF?lB@pE@xH@jE@fGD|O?fD@zB?j@?r@@xA?h@@|I@nCDjP?bC?lBBpKFrW?l@BxH?tCB~I@lFJji@F`X@bI?dB@dA?`@?h@?j@@Z?x@?h@@nA?nC@rE?H?|A?l@?d@?|@?bBAfH?v@?bBEdO?nBAnA?r@?`AAhA?v@?XAhC?l@AjCAfF?jBCtG?F?F?ZCpKAxCAvFAh@AnG?dAAfFAl@AtG?l@C~KG|R?jCA|A?l@CtJAnJAvD?HCjGGnZ?J?b@CbI@\\?ZAlB?l@AzA?|@A|A?zAAzA?lAAT?|AAdFAfA?fAAjFArFAbD?lC?zA@zH?f@?L?V?P?\\BdV?hC@`GF`k@Dh`@?tG@tJ?tD@vD?nI?jEB``@?pA?fK@tD?fA?xA?tJ@zI?vJ?vB@nB?xD?vDBpZ?pA?jBDxN@n@?b@?r@@nA@vD@~F@fA@tF?fD?~A@`P?zC@|E?bA?nA?tF@hC?j@?B?jC?nD@nG?`P?V?T@tD?Z?xC?lA?`E?rA@tG?vD?n@@hJ?t@?xC@TAX@`C?n@?l@?l@?xF?`A@fF?bE?|@?@?B?dA@tG?|G?vB?bD@tK@pJ?jC?l@?l@@bI?tG@lS?h@@jF?h@?`A?rE@vD?hI?jG?r@?r@?f@@fE?^?n@?@?|D@lJ?jF?l@@vG?`I@bF?p@?jC?vA?B@vM?nD?@?rA?F@pD?D?l@?n@?zA?l@?dA@rB?dFBtFFhGDhCB~ADdCBtABt@Bl@@l@@\\HxCLzD@h@Bn@@l@NfFRpGBn@?@NvFL~DPlGRtG@V@l@LxDHzD@h@@l@BhB@dBAtC?tBC~@EzCGlBGvB?DCf@Cl@El@Cl@KzA?JM~AC\\IlAIx@Gl@Ix@C^m@bGAJMtAQ|A_@fE[`DGl@Kz@MxAOxAOxAOzAO|AOxAGr@Eb@Eb@QdBCPaAdKg@zE?DeArKGj@e@~EkCnXGj@_@tDGj@?FEd@_@~DWjDQ`CO~BUzDI`BKhCK`DExACjAEvAAp@A^?HEdB?ZChBAhD?@A~C?xDB`C?nA@z@HxE@t@HnCBlA@ZHtBH`C@DHnBHzAF`ABl@@NLhBRvC@JRbCNjBBTT`CLxA@Db@zD`@hDHl@ZdCHl@ZbC@Fd@hDD`@D^Jt@tAvKp@rFf@xDPpAtAvK|A`MDRBVF`@n@hFHj@b@hD@HNdABPd@rDZdC@FhA|IFj@Jr@VrBPzA@F^tD@JD^B\\BNLxANjBJzADl@Fp@HzABVFxAH|ABn@FzA?DB|@DjAB~@DbBDzCB|D@rB?pG?fD?bDAhZ?`DAzD?|A?pA?hC?l@?rB?rB?bD?rAApA@xBA|F?nCCV?dD@dH?pJ?l@?nCChC?h@AtBKhGGlCKhESzFGnAKbCW|EAL[jGOfC?F]lG[xFWdFQdDEr@UdEAVUpEG`A]tGs@tMGjAYxFM`Cg@`JAXKrBWvEEt@MbCI`BMrBKhBA`@C^]hGUrEAJ?JMhCI`CGpAAPAp@AV?LEp@Ap@AJ?^AXAh@IhD?LExDAl@AXAp@?|@An@AnB?X?l@?fC@lFDjFDlFL~MDfFJzIBlCJvKH|HBlC?l@BlCBxA@l@@|@@~@@dA?T@fA?T@zADvDDtC@|A@pAF|F@p@@lA?`@BhADrE@hA@jB?hA?vDA|CAfAAbACbAClBC`ACp@EtACh@M`DCf@C\\SpDYrEO|BOtCgAvRO`C]hGEr@Et@ABSrDObCQ~CSpDCl@El@IlAMrCGjBGjBCpBCnAAxB?tB?f@?D?fA@fA?h@@f@?DHtGH~E@l@d@nZBzA@l@DhC@n@DhC@l@DjCTzNJtF@rA@f@@Z@l@@zABbADvB@l@@l@@l@DvCFxD@~@@N@x@B|A@Z?P?X@F?f@@P@l@?V?B@PBrA?h@@D@t@HfFDtC`@fXJ|E@b@?NFbEP~KJ`HBpAJrG?LBnADhC?PFrD@`@JxGNjJ@^HzFPhKJdHFfE@j@@`@@T@d@FjD?J@`@?J@Z?RJpEFnB@`@?J@PBjA@^DtAH~B?NBl@@LB`A@XJjCFjA?LBl@?BBZ?LLhCBl@@\\Dn@LhC?LHzADx@RjENhCHhB?DBX?LDt@JrB?J@JB`@J|BBd@?F@JJtB?Fl@zL?L@LTvE@L@THdBB\\LxC@JFnAFvAHrADdAd@jJ`@rIFlAn@`NTnEf@xK`@`JBb@@R?@JlBBh@B^@l@HvANrCBp@h@~KH`BBZ?JDl@@RFzAn@nMN`DFlA\\nHDt@F`AFtAJ~BJtB\\`HJxB@N@TJxBBf@ZfGFtA?JBTLnCBl@Dl@HnBNvCHnALdC@`@Dj@LdB^xE\\rC@H@?Ht@XjBVzA\\hBBLJd@Ll@ZrA@FJd@l@xBf@dBdBfFrCtGXp@^t@\\p@h@~@jApBnBtCnA`Bx@bA|@dAvAxAf@h@DDBBRPHFpAjAt@n@JHPN@@x@p@\\XHFz@r@RPPLJHHH~ApAdBxAJHPNdAz@f@`@lB~AhDrCpGjF?@LJLJ@@|E~DrEvDfCrBfBzAvCbCHF^ZNLRPdCpBPNh@b@`@^FDtAjAVTh@b@j@f@l@j@x@v@XZfBjBRT|CpDDFvAjB`ArAl@~@l@~@pBdDt@pAZh@|@bBTd@n@rAtAxCrA`DZx@HRZv@Rf@HRv@tBb@jAZ|@Rj@HTN`@d@xAb@pAPh@`@pAp@xBxAbFDRv@rClA`Ff@pBt@fD`@lBXtAVrAR~@?@P|@nAfH^lBLr@Nz@BPh@vCd@tCF\\T|Ab@nC^pCTlBX~BFd@NtARdBd@lEZnCFb@D`@@JBJp@bGNvA~ArN^~C?Bb@nDFh@?Bf@rER`B^`DHx@rA`LT|BNnA^dDHt@PxAHh@BTP`ATnABLHZRx@b@~Af@zAd@jAFPLVN^LVt@vA\\n@\\h@X`@d@n@`@f@Zb@vE`G@?pClDX^j@l@`@f@Z`@|AvBnA~Av@~@dDdE|C|DZ^rA`B^d@zD~EtBlCtCnDdBxBn@z@VZzAlBl@v@t@dAd@t@l@fAv@zApAbD`D`IFNHTJVv@jBbAfCHRRd@d@lA^|@Rh@\\z@FLf@pAFLvApDbBfEf@nAFNFNXp@vAnDpAfDfClGh@pATj@d@jA^|@lAxCBH`CdGn@~AdAhCz@xBb@dAjAtC|C~HnCzG~@`Cn@~A\\x@r@nBj@fB^zARz@TlAJl@Hp@Lz@LpAFt@Db@FtABj@@t@@B@t@?r@?\\?X?lAAjH?v@AzA?pB?zAAh@?D?h@?`@?N?j@?B?h@?B?xA?@?f@ApC?hB?B?dBAtC?pA?l@?VCpCCvBGfEIhC?FCl@Cl@SrEQtDItAYfGUjEEz@?HEr@SfEUzEEbAEv@Ah@ElACjAEbBAz@?\\At@AnAAlE?B?zBAl@?l@?l@?Z?H?v@A~D?d@AtF?f@CbH@jAAbCAxFA`H?L?hCAxB?~AE|TAlHAnF?hBAhA?zDAlE?TAfD?vA?TAl@?~FAlCAxA?l@AvNAjHAdB?bD?f@AtG?DAR?zF?D?PApCA~CBzEFjFFxCFjBBl@B|@@f@Dl@Bx@HxABh@?FHxABZRrCDn@?BP`C|@rL|@zLLnBJnA@HFdAVjDP|B^`FTdDp@zIj@|HXbEFx@XrDJhA@VZdEX|D?@JdAh@jHh@rH@PDf@l@jIRpCXrDh@lHVfDj@~HZrEH`Ab@rFb@dGvArRb@fGTrC@JB^JtATxCHnADj@T`DH`AZjENnBFr@RhCb@lG~@dMJvAJ~AXrDdCz\\?BDh@?Bz@fLHfARlCBb@h@dHh@rH@BfBtVLzAX|DpAfQVlDX|D?BR~BB`@RrCNzBL|B?BT`FD|ADfAFtCDlB?b@BzA@j@?n@@pB?hJ?`IAdK?R?|@?zAAlK@zC?\\AtI?x@?B?|@?T?@?l@?tG?zAAl@?l@?zA?@?dFAlM?tN?v@?bCAbH?F?V?bH?zA?v@?nDA`G@\\?zA?f@AhC?r@BpFFtEJxB@HBj@?FHrADl@LrANfB?@V~BRvAJv@Lz@PbA\\lBVpAZzAPr@XjARv@ZdANj@X|@X|@Xv@L^JXDJLZVn@nA|ChClGxArDdAhC\\x@Xr@JXVj@~@`CN\\zAtDFJp@dBFLJXFLv@nBx@tBLZRf@Vn@@BdAnCN^@D@@zAdEh@|AJVb@jAlCdILZDLNf@Zz@FRPh@h@bBHVFTVx@|@rC@Dz@|CxAhFnAlE|AxFnArE`ApDd@~A^rA|AxFhIjZz@zCBFz@~Cp@bCt@nCp@bCbAnDp@hCv@pCPn@z@|Cd@dB@@XfATv@\\lANh@?@@DvAdF|C`LpBjHJ^Rr@HXDNlAnENf@?@J\\f@fBh@pBNh@f@hBRp@lAfEtGbURt@z@xCBHNh@FPX`A^nANj@?@@@Nf@hBlGHZfBdGLd@vBpHjBlG|ApFRr@Nh@Nh@Rp@V~@b@rA@FNf@d@bBpAlEHXb@zAn@vBdCtIj@rBv@fCr@nCtApEJZvBpHTt@?BTr@vBnHp@~Bn@xBnFdRLb@X`ATx@DLh@jBxAhFt@dC^pAtAvErAvEf@bB`AbDBFHXvBpHfEzNRn@l@tBNh@@BJZlBxGbJj[rBbHhA~Dj@lBb@|A|@|C`@rAbClI|@|Ch@jB\\vAd@tB\\~AJf@Jj@Lz@N|@NbAVfBLlAP|ALxALvAB^JfBD`AFdBBlABhBBlCAjj@@rH@nS?dD?hH?lD?bE?b@?nK?j@?`O?xA?J?J?`A?`@@~B?fD?lM@rG?@?l@?l@?X?l@?x@?tJ@xIA~F@|K?F?fJ?pE?^?l@?vC@zB?V?V?z@BrBBbB?F@\\?`@F~B@l@Bv@JnCBn@Bh@Bh@B`@FrAPlCRzCLzAPnBDd@?FZ|CL`A?@BVTpB`@xCL~@jAdJJv@xAdLp@~Er@rFXxB`@xCRzAn@|EHj@?@f@tDNlA@H?@L~@^xCPnAJx@PrAT|AJz@pAzJPpANjAd@nDRtATfBLz@RzAJz@PbBP`BJrAH~@H~ADj@@ZBd@@d@H~B?f@?@@j@?@B`BBrA?@?j@BdB?d@BnCH|H@tBFjE?n@@n@BrCDlDDdEDjFF`GBlCDvD?n@H`I@t@?XDbE?HDbDDhFBlC@l@DpEHnH@hCHhID`D@~@@j@DlABz@@PDdADbADp@Fv@B\\BX\\vDh@lEFf@Jn@Hl@DPJj@\\nBDR`@hBLh@Lj@Ld@Ld@d@bB\\jA`@tAJ`@Pj@n@zB~@dDNf@?@Nf@v@pCbEtNRv@dAjDl@tBz@xCRr@DRNd@f@dBHVNh@d@bBHVNh@Ld@@BRv@d@jBLl@DLF\\Lh@@FBJHd@XxARrAPjAJx@Hf@Fn@Hl@Hv@Fr@Fn@Db@Fx@H`A@^Dl@Bb@F|A@t@@H?@BfA@r@?@@Z?\\@L?j@?V?v@?zA?@?`@?l@?F?pQ?xB?p`A?lI?`@?|J?l@?l@?l@?V?nB@`D?dC@pBNrj@?|ADjN@zB@xDD|M@rE?~A@xE@J@pJ@tCLfd@@~CHvYDzN?n@@dF@l@?jC@l@?l@FfSDhPBpJ@hC@fF@hC?l@@dD@nB@hC?l@?n@@hCB`J@jE@xA@pB?rBBxD?l@?`AB|IF~RD|M?f@?dD@v@?V?d@@rE?l@?|A@hL@~K?X?BBzN?bE@`L?l@?jA@hO@xA?p@@dT@tABvA@t@?N@X@h@Bd@DlA?@D~@Fz@?LFr@Dt@HbAJfANpAP~Ab@~C`@~BVvAZ~AXjADPf@vBHVLf@V|@h@dBZ|@Xv@Rj@Zv@Rh@Zr@LXDLTd@n@tA^r@|DfH@DzBzD`B|C\\h@Zj@`@r@fBzCrBnDfCpEdAhBxEjIn@hAT`@Tb@nAvBh@`AVb@b@v@d@x@HPJN\\j@xAjCp@jAh@|@d@z@pA|BdB|CR\\pA|Bb@v@nAvBhBbDx@vAT`@`AdBn@fAz@xAR^\\l@vAfCNVp@jArA~Br@pAb@t@`AlBh@fAb@|@Vl@Th@Vn@r@jB`@lA^hAb@tA\\jAd@fBTfAT`AR~@RbARnARhAVdBTdBN|AJ~@H|@JlANzBLjCBhAFhB@nA@|A@hF?zJ?bF?bK?zB?hPBv\\AdD?B?nD?`AB~m@?|T@|H?r@@bI?J?dE?xCD~FBbDB|B@d@@tA@ZJ~GHfELfIDvC?HFrGDjO?P?L?V?~C?l@?zA?`@?n@?t@?jC?hC?b@?l@?dB?bB?fB?P?~@?pA?v@?vD@nF?lE@~O?nT@vE?pA@|BDrQH~b@?tD@bB@r@@jD@dD?hC@l@?V?`F@|DFxV?zB@l@BvQ?l@@tG@nA@|A?b@@nG?rABnCBjAF|ARvEZ~DNbBHr@Jx@XfCZvCZxCd@pENxAZxCr@fHz@zHNbBr@jGl@vFNxAHz@Hr@Jl@Ff@Hp@zAvNz@fI^rDHj@JbAXfCTrBZvCdA~JF^@JFj@Fj@Z|CDVFj@BRXpBTtA?@N`A^jBP~@FTRz@T`AT~@Nh@FTTx@j@nBp@lB@BfAvCfBzEfBvE|AdEvB|FhB~EXr@vAvDpAhDfEdLXx@Nb@Rl@N^N`@Ph@HPl@zARj@jDbJRf@tCzHfDbJjBdF\\|@`@dAh@pAn@fBNb@@Dd@lAz@bCHTTj@`@dAh@vAP^HT^z@hAzCd@lAbAnCfD|I|ChIb@lARh@fAxCN^L^L^N\\JTN`@Nb@\\x@HRf@tAHRBFLXdBzEPf@xBzFDR\\~@j@xAt@rBTd@DVN\\f@rA^`ATl@P\\lAjDv@rBl@zA`EvKfCzG~@dC^bAVv@Tp@L\\r@bBXt@vAvDVt@\\`AZfAr@nCR~@f@vCVbBNlAPbBFt@Bf@Dx@Dl@@X@R?HFjBVlL@`@@h@JfFDdB?@?BDzANjHDvBFpCHxDJpEPjIXnMBt@@j@@l@Bv@B|ADpBBhAHrC@h@BdA@l@@l@Bl@BzARpJBl@HjE@X@l@@l@LdFFjCJdFT`K@^LfGJvD@b@@z@XdMP~ITrKDvAHfD@z@DdBR~IJdFF|BBhE?pCAj@Al@Al@Ad@CbAE`ACr@AZEl@CZEr@IjAI`AGl@m@fGWfCg@`FGj@Gj@Gj@WhCYbCYpCe@rEAPCTGl@CTCRoAzL_AhJk@jFObBEZSjBOxAKhAk@pFUtBUbCQjBG`AEp@CVAPCh@Cd@Cj@E`AGzACxAAnAAp@?pB?dA?bA?r@?j@?~@Az@?dE?`D?~A?tB?x`@?`B?fJ?fE?vJ?xJ?vB?|F?|J?l@?bA?`C?|B?J?jE?fE?xG?`D?j@?lB?\\?bA?zA?bA?zA?bAAdA@`D?fC?bA?bB?~GAbZ@zGA|W?pA?tG?zB?fD?fD?dA?fB@rGAtG?xD?bE?|Q?rG?|X?|A?zA?vD?nE?hD?tJ?fB?l@?~F?T?l@?dF?z@ApJ?jI?`I?pEApE?tA?fC?zJ?dDAtE?J@pEAr@?@?r@?|A?`F?rCAhB?nE?v@?b@?l@?~EAdF?~GAlm@?`L?nDAp]ApSAjZ?fEAbW?zC?vB?hC?`@AhD?~C?bE?fD?vA?fD?tB?dF?`F?|@?|@?xD?jAAlB?pG?nC?`@?nAAhC?rBAhC?pB?bAA`A?vEAt@?D?x@AjDAbEAxECxJAzE?vAA`GAlE?hAAj@AdCAfD?jFCxE?fFAbC?pCCrFAfGA~KAN?\\AjFChPA`FAvDArFCzJAzC?jAAbF?hAAlBAhC?^?xCA~ECvJ?zEApFAdDAxFE`WAxCAlF?N?V?V?h@AfAEvFAhAIrEEhCK`EErB?HCzAGbDC`ACx@?@Ax@ObHIhDGnCGpD?^E`BANEdBAb@GlDAr@CbA?jA?p@?j@?lA@|AB`BBl@@\\@l@FjAFjAFfADn@FbANrBJxAF`ALrBPfCPdC@XJxALpBBVDl@HtAF`BDh@?BLhDFbB?DDjBDrB@r@@`ABbC?fA@l@?F?b@?bAAbA?fACtBCjEC`D?x@C|BAz@?`@AdCAp@?JC|DErEMfR?n@EbFAhCEnFAzAAl@?d@AdBAzAAv@ApBChCAnB?ZC`DATC~CCpE?VAfBC~C?LCzBArBCrB?bAAfAC|B?l@AlA?bA?f@?r@AlB?Z?P?tB@fCLlT@rABnBLhUDlEBpEDvF@r@B|D?FB|C@fA@p@?^@zA@fA@xABfC@tA?v@@pB@rB@f@?tB@nE?jJAl@?F?|K?bH?|J?hB?zBAhC@pBAf@?bB?rB?bA?r@?~@?fB?t@?hA?vA?|A?|A?t@?x@?j@?f@?v@?zA?dB?nA?zF?pC?~A?fJAj@?B?l@?Z?vB?pB?pB?hA?hA?hD?Z?f@?X?V?n@?R?^?L?l@?l@?b@?d@?z@Al@?x@?j@?z@?|@?z@?j@?N?z@?p@@vA?P?N?l@?\\A`A?P?t@?jB?^?z@?lA?hC?x@?pA?r@?v@?r@?jA?jA?nA?bA?pA?bA?L?^?`@?l@?l@?zC?lA?fA?F?J?H?`@?J?z@?TAfB?B?^?l@?f@@rBAhA?~@?f@?v@?b@?fA?vC?hA?|J?n@?xA?X?l@?h@?n@?j@?hA?r@?P?R?nA?N?H?F?V?L?@?^?b@?^?h@?X?B?J?H?b@?H?l@?l@Al@@J?J?DAd@?\\@R?H?H?d@?Z?P?D?h@A^?R?J?l@@tFAxA?nE?bA?jB?nF?b@?t@?l@?n@?`A?V?vD?fD?J?`@?zC?p@?X?l@?J?|B?l@?x@AlD?J?D@TAr@?P?bA?j@@pG?nB?dB?|@?Z@bABhA?ZBx@@VBv@@XDv@Bl@@H@J@T?J@LJvA?@Dj@D^?@Dd@@DFl@@LHx@Ff@Hx@N~@?@N`AN~@NdAPbAN|@NdABNHd@FZHj@PbALz@Jj@Jn@PjA?@TnA@FHj@Jj@Hh@FZ?DHd@F^@JJj@F^BJNbADRJp@Hd@DZNz@BVPbATvAN~@Jl@N`AHf@BNFZ?BTxAFj@Ff@Hl@JdABPFh@Fp@@JB`@Fv@?BB^Dj@Dl@FjABz@DbABdABbA?V?N@^?X?`@@fAA|A?vA?pBAjCApB?dB?DApC?`AAbD?nAAxD?tAAjGA`C?tAAnB?r@?fA?d@AZ?~@?L?R?n@?fA?ZAj@?hBArA?z@?j@?V?P?D?T?V@T?T?V@V?VBj@@b@?F@`@Bd@Bh@@X@LB^Bh@@L@LB^@HH`AFp@BTHt@BVBJFb@?FHh@DZHf@?@Hd@@D@FBJDT@H@HF^BFFZH`@@FDTDRBJH\\Lf@@BJ^DRBHLd@HXLb@@DhAvDDN@BJ`@Nd@Rn@Nf@Vz@V|@X|@Lb@@@Ld@HXh@fBf@bBPh@FRBJBDNh@L`@FTRn@HZJ\\DJNf@Nh@Nh@Ph@X|@\\nAX|@j@jBb@vAPp@^lAPl@Rv@HXBNh@rBh@lCXbBXdBDVL~@Jt@Fb@Ff@LnABZBTFn@?@JjAJbBFbABj@Bn@Bb@?D?F@N@T@l@Bn@@t@?b@BbA?dA?bA?vA?~A?lE?hA?h@?V?Z?\\?\\?P?`@?j@?dA?hA?f@?`@?rA?h@?@?p@?P?~@@d@?n@Al@?x@@bA?x@?t@?V?bC?vBAtB?Z@~A?|A?x@?r@?x@?J?v@?fA?r@?~@?v@?n@?T?N?Z?T?j@?j@?p@?p@?h@@t@?j@@l@@n@BX@l@NnCF|@R`CJx@XrBLx@BJTvAb@lBXlAX~@Ld@Nh@|@dC^`Af@hAHLP`@^t@^r@b@t@FHHN^l@r@dAx@lAv@hAT\\d@p@t@fAT\\BB`@l@d@p@jAdBPXfD~E^h@bAxAbAdBz@`BVh@JRd@fAf@nAh@xAV|@`@pA@DJb@HXT~@VrAR`AVvAJz@f@bDTvA@B@NDVTrA\\bC^|BVlB^`C^jCJp@Jn@Jr@b@lC@JLx@ZxBH`@Jx@Hl@Jr@Hl@Fj@BXHl@@NHt@HdAB^BZDj@Fx@?JBj@Bf@@HBf@BbA@t@B|@?D@V?P?B@J?dA@n@?t@?H?fA@jA?jA@tA?lA@X?|@?P?T@dA?H?b@?T?V@V?rA?t@?T?@?b@@t@?pA@vA@dB?lA?T@t@@vD?rA@l@?xA@l@?|A?l@@zA@hC?@?J?jABxE@jC@jE?hA@jA?\\@fABdA@n@H`CF|AF`ADn@Dv@JjAH`AHr@JdAPvARtAL|@Jn@N|@\\hBXtAR`AT~@d@dB\\pAZbA^jAn@jBt@nB\\x@\\x@^x@f@bAn@nAnBxD~@fBh@dA^v@^v@\\t@Tj@d@hA@@d@pA^dABDVx@^lAJZ\\nAb@`Bb@lB@D^bBTjAZjB`@lCXbCNvA@LLpAL~AJbBHtABn@B^@d@@B?N@N?R@H@^@v@?p@@nB@rB@`DBdF@bB?l@@tGBlF@bD?lC@lA?B?p@B~J@^?hB@lCDjI@jF?fA@h@?zAB`ID|I@rFBxF@xD?t@@`C@~E?^@T?fA@jC@~C@~C@`DBbI@vDB`GDnI?fD@bA?l@?l@B|HF`OBjJBjF@dF@jE@~CBzD?`DBpE?R@lEBnEB|G?hBB~E@rC@rB@lE@rC?tABnD?l@?l@?^@pBAnA?H?xAC|AClBCxACxAC`A[|K?@IxCIzC?HKtDEnAE`BOpFWhJI|CQrGS`IWvJMvFErDAdBANCrICtOGvREfOCrKCbJEnMAbEAxDAjFClHAhCAlHAdEAhI@|F?pD?r@B|F@nL@jC@nJ?h@@|@?zD@zA?lD@x@@`E?tB@p@?J?F?fB@pI@xB@~D?|E@nB@|D@lK@`E@vF@tE@fC@vE?hEBrG@xF?jB@hF@nA@dG?hB?hABxNBdH@|KFfYDxH?n@JrMj@|l@HrIPbSBzBBrBBlEBfG@fG?hG@rH?f@?D?j@?zN?l@?rH?N?l@?bI?b@?H?`C@dRAfH@|I?dL?nF?xF?V?l@?@?vD?jF?rE?xG@jI?zN?dF?bF@fG?jB?d\\?l@?F?n@?|K?bC?l@@nC?@Ad@?FAxFA|C?l@AxEGfIMfVCbEAzBEzF?l@CzAAjBCvD?^CfEA\\?z@An@A|AAxACdEApCAtACvHEnK?hFC|K?B?h@?XAdNC|JAvH?f@?l@?~DAhDAzH?|@?F?d@?^?dE?F@vA?r@BxBFxD?D@^HfCFjBFbBDlA@DHjCPlEJhCF|AFnBBtA?@DvB@xB?d@?n@?d@?`BAn@Af@An@C~AAj@Ch@Ah@KpCMzBMlCMlCOjCEn@Ct@IfBGnAGpBAXAb@Ad@C|@CfAAbAE~CAjB?jAAnE?dFAX?TAnJ?|AAjE?vDArC@zC?|B@~C?zCD~P@l@?dCDdL?j@?l@?r@@pD?n@?B@vA?l@@xCB~H@vEBrE@~D?zC@fD?d@@f@?zA@nB?~@@|A?fB@~C?\\BvF?|A@`DBdG?V?zB@vD@|B@jB?@@fHBhE?v@?t@?l@@t@?zDBzE?fABfF@fF?zABbF?@?@?l@@hC?j@?@@dH@zA?l@@l@?hC?zA@l@?V?VA|AA`CAbCG`EAl@?BAl@IbGCtBMbHKzGCjAA|@]tTMbHQrKEvAKfDKbCGfAGtAGbAKvAY~DQpBWnCa@xDQxAUjBwAbLCPmArJcAbIa@zCM`AeAtIu@|Fg@~Dq@lFWtBaAvHeBhN[dC[fC_@tCs@tF[rCMbAOvAK`AI~@IbASbCGp@Eh@En@MpBGbAEbAIvAE`AC|@GxAQlGMbEa@fNIlCErACrAE`AChAMpDCfACbAIfCOzEEzAUxHCbAIfCCbAEvAC`ACl@An@EbAIlCE~Ag@~PEvAWjIGdBOtFARAl@AVExAAdAC|AAl@?PAbACnB?^Al@?`@?p@AzA?j@?Z?b@?zA@xA?h@@vD?@@hCJ`V@dF?@BrFBfF?l@@l@@|A@nE?TBxDDdK?R?f@BhF@hC@dD@pA@dC@~A?~@?B@bABvF?Z?D?|@?DBlDF~O?bA@t@?f@?f@@jABrF?l@BfF@~C?l@@jCBtDBfFBdHDzLFjOBfD@fE@jE@hE?`C?zD?lGAxG?bA?`AAfVAnW?pC?nCAfF?tE?dHAhC?jC?bCAnC?b@?HA|BE|CI`FIjEMdHOpIOzHIbFAp@?j@Ah@AdCAt@?F?vBAjE?fE@lT?v\\?fM?nG@d_@?hS?rD?fA?`A?l@?V?~C?n@?|@?lG?nB?rA?D?zA@xD?~E?F@n^?fL?dF?H?|E?bB?rA?fF?hP?xM@~F?zB?lI?|E@~DAvH?D?R?t@?tAA`AEpDKxHO~H?n@Ah@?J?`@AzA?L?F?D?HAZ?fHAfF?DA`F?bA?FA|@@lF?lC?vBAfF@T?jCBzA?F@z@FlELhGHhE?B@j@BvB?rA?Z?l@?hC?d@@bB?^AbH?l@?~KAdF?jC?zA?l@AfFAxNAvQ?zDAtD?l@ArJ?xA?dF?n@?bBA~E?`IAfE?zC?J?p@?xAArG?@?|A?j@A`I?B?vA?xFA|VAlB?jD?dC?tJAnG?hC?D?h@?xE?R?tB?JAzA?dB?vA?t@?JAh@@lCAdC?`B?~DArE?lF?l@?fF?l@A|I?zBAlCAr@?d@@l@?J?X?B?X@N?\\@J@dA@L?J@R?H@X@N@b@Dx@H~ADz@DbAFr@FrA?DBl@HxAFtAF`A@VF|A@RB^?L@^@LBbADxA@fA?lA@jA?bAAbACxAAp@CbAK`CEzAAZ?HOdDAj@GtAGlBCr@?NGpAGhDErI@pKAfD?fE?nB@tB?h@?p@?l@?h@?B?zA?l@?l@@bI?R?X?|A?zA?j@?@?B?p@?n@?l@?L?tA?d@A|@?jA?|@?lA@dF?H?l@@jEAxIErDAp@Cr@QfECPGv@Cb@AH[bD[`CCLKt@Gd@OhAQhAE`@OpAe@zC]dC_@nC]hCSvAWbB_@rCEXAB]hCaAfHeAtHM~@[~Bi@xDi@zDyB`PADk@bECNiAjIg@tDER[bCEXIj@M~@?@Ij@StA?@EVCREVGf@ObA?@If@?@?@EVIj@a@vCM|@CPYpBWtBe@`DOnAS~AOzAMtAKfAK~AEv@APGbAExAE`BC|@CzAAtA?T?pB?rB?rD?jA?d@?F?f@?zA?nI?hD?f@?|@?pK?fF?hJAJ?~@?zA?|D?vG?zB?vB?V?lE?|B?v@?vC?bF?vM?zN?hC?fF?l@?vDAl@?bI?nD?pD?hF?fA?dA?~H?jC?j@?n@?hC?l@?`D?rB?l@?l@?|G?nD?vD?tG?zA?dF?n@?l@?`I?lM?pJ?jG?H?hw@?nW?|A?bK?hL?zZ?n@?rU?X?jF?rE?d@?vA?vD?zB?~C?jT?fB?z@?zB?vA?hA@l@?dA?jB@`@B|CDxB@p@B`ADbABdAJvCd@lLt@pRNvDJxDBlADxA@tABpB?`A@p@?vB?pC@|C?rC?`G@r@?~GBnX?~K@rG@lM?tG@tE?x@?fE?nGBlZ@zN@pJ?bF@zE@nI?`C?nH@~H?~I?pEAj@?dBA|AAX?`AAr@EpDAl@?JKjKCbBGzEAfBCrBClBC~AA|AAl@?j@CvB?X?~A?pAAdH?jA?lE?bD?h@?xE?hB@jD?hE?nE?lEAdF?B?h@?nCA~DElNC`ICbL?X?p@AdAA`FAdDC`FAlE?B?jCC`HA|BEzO?jACdGAhEMld@C`LCtMEzPGrT?n@AjA?|@AvDAxB?lB?@GdP?lBAnE?hA?fA?l@?`@@|A?|@BdC?@@j@?XHrDFnBFlCLhFHrDBl@@n@@TDpBD|A@VH|CDxAB~ABh@PdIBl@b@`RF~BVbJ?`@Bh@JdFDzABz@DhABhABzA@R@^@f@FhCDhA?J@^@`@DtBBn@@\\HbD?NBjA@R@nA@f@?\\Al@An@C~@Cn@Cl@El@El@CVCRARIp@CRAJG`@CTETCTMj@ETYtA[pA_@pAWz@Y~@Qh@Of@Of@a@rAGRa@nAIVY|@?@Wt@GVYz@Wz@K^gAlD_@nAq@zBGRo@rB_AbD{@vCOh@CJYfAOh@[jACDMh@i@rBOl@_@xAOh@[jAy@dDSr@Mh@_ApD{@fDk@|B}B~IENMh@]rACHK^Mh@W~@U|@Mh@CJw@zCCH]tA_@tAeB`H{@fDcA|DW~@YfAMh@Oh@{@fDGVEPeBzGe@lB_BlGSz@A@?BSt@o@bC]rAu@rCe@hBs@pCc@fBU~@ELMh@ADW`Ac@dBm@zBk@~B{@jDU|@[rACL[zA]jBKj@O~@]dCKz@K|@E\\It@QnBIdAGlAItA?DCd@ANIzBCxACpBAxDAjC@J?pAAvA?`@?x@?dB?@?j@?@?F?b@?xB?dC?|A?vAAxA?zC?nA?F?x@?`@?nFAdG?vJ?nA?r@A|E?F?lD?x@A`D?|@?Z?R?nI?B?jBAhA?N@n@?@AdC?hE?`DArG?tA@R?F?B@~CAfEAdCAjEA`BElGOxNAXAl@?l@CzAAl@ExDCzAAfA?REbDA`AAzAAn@CzA?VATAl@GvDAZA~@Cl@?BAh@A\\OtGGpBI|CGzCIbDMbFWjKGnBEjCIlCAl@EzAAl@GhCEfA?RMdF?@ExAKxDCxAIhCAh@Cr@Aj@An@Cl@Al@Al@Cl@Al@EzAAn@MbFM~EK|DGhCCl@Al@KxD?RI~CGxD?@Aj@?@AzA?@?T?dA?h@?B?l@?P@fA@n@BxA@n@BxAD|AFjCJvD@l@Bl@@l@DzA@l@Bl@@l@@RDtBBl@@l@DpBN|FBl@@l@BdAD|A@T?P@X@j@@NHlD@l@B`ADhC@hA@f@?l@?D@~@?hA?l@?T?f@AlCApEGtO?h@AZAtDCxH?|@@bA@bA@p@@~@Br@@h@Bn@FzABVBf@Dl@Bn@^zFn@`K@X@NPhC@VBRHzADl@Dt@Db@NhC?BHvA@V@TD`AFtA@^@`@@x@@\\?NBfA@pB?rB?R?l@@vDDna@?xC?x@@fF?j@?@?X?@?N?@@v@?hB?T?N?\\?jA@xD?`@?lB@fH?lB?Z@tJ?|@?`A@fA?j@@xA?vB?nE@|A?tD@bD?|F@nE?hCBjK@dN?hC?l@@|D@pH?pD@zH?rBAzAEjBExAEdAGxAItAIdAKtAK`AK`AK`AM`AWlBETO~@Q`AWtAWlAAHETGRe@tBY`ASv@Wz@Y|@KZQf@Ur@g@xASl@u@tBuBdG_ApCqB|FqB`Gu@tBIRq@vBGPsB`GKVCHsBbGeEvLiAdDmDfKeA~CgA|CeAzCgBjF[z@Qf@Sj@cB`FiBlFmAlDQf@IR}C`JiBlFeAzCwAhEO`@cCdHo@hB]dAUp@}BvGqB~FQh@k@|Aq@rBYv@a@jAcB~EGPQh@yCvIABCJIRITeA~CEN_AfCu@xBUn@K\\_AlC}BzGaApC[|@[~@Of@e@rAq@nB_C|Ge@pAQh@a@lAYv@]~@i@`Bc@xAe@zAQh@?BUt@Oh@U|@W|@e@jBy@`D[nAQp@CHMh@g@jB[pAg@jB_ArDe@hBg@tBABs@tCIXOh@Qr@aBpGoAbFiAjE?BGPe@jBaAvD?@qAdFy@dDcA|Dq@pCe@dBGZ{@dD]tAKb@u@rCe@dBk@~BOn@Oh@uArFIVAJIZw@|Cm@|BCLKb@Md@EPYfA{@bDAD[lAU~@ERMh@IZq@lCq@lCg@lBe@hBm@|ByBxIsAnFa@~Ae@hBeB`Hs@tCe@fBsDzNo@fCeAfEcA~D_BlG]tAMh@cAzDU~@]rAKb@aBtGy@fDeAfFo@lDi@pDg@jD]|C[zC]jEYjE?NSpEE`AAl@ATIzDC`D?bC?B?dA?rD?pB?pG?~C@`D?x@?|B?hF?j@?dH@xD?Z?lB?Z?nB?l@?hC?Z@lB?Z?`L?P?dF@J?~B?Z?jE?fA?lE?fA@pB?rG?X@zN?L?bB?zA?X?`A@hD?jG?jB?|P?~B?pBCtB?RAl@AVCbAGzACl@IzAKzAOlBEf@EZOzA[`CWdBUvAo@nDQ|@WzA_@nBSlAI\\c@dCa@zBk@zCERETWvAu@bE_@pBg@jC}WxxA{DfTsAhHaAnFm@hD{@vE}BdMk@xC{B`M_BzImAtGeBlJy@xEuAnHgAfGu@|DERmAzGETi@vCq@tDo@lD_@lBkAnGm@nD}@xEk@`D{B~Le@`Ca@`CMn@Kl@o@lDq@nDiG|\\gAbGO~@aB~IyBtLeBlJOz@{AlIaB|IeC~MgCpNeBpJqAdHaDdQcC|Mc@`CmC~NsArHUpAg@xC_@hCEZc@lD_@pDMvASnCKzASzDGvACr@IbCAXG|C?ZAPCtB?zA?`CBvE?j@?@B|CBvD?n@NpW@j@?@?l@F~K@h@FbL?l@F~K@^?h@DpF@xB?H@|H?`BAvJCvGArAALGpGAnAAd@At@EvDCzACxCGfF?B?HAb@EvDAdAAfAG|E?@?DInHA`AAf@GlE?l@Al@C|AExDA^EdFCnACdDAtBAz@?d@?l@ArB?z@?`CAtI?l@?rA?jA?|A?vD?rAApC?pD?lF?|A?vD?lD?rEAdT?fF?fP?@AjC?l@?fCAdC?rBExACv@GjBEpAEp@Ev@IvAKjASrBMbAK`A[xBObAUtAWrA{@bEWbA[rAMj@sIz^oDjOmCfLyCnMc@nBA@EPGXe@lBoEpRk@fCo@jCcBhHm@hC_A`Ec@rBs@jDQt@UjAw@zD_BhIsChOkBnJ]`BUjAa@xB]hBADq@lDKh@Ib@}@tEaAbFKj@Kh@_BhICPaBlIuBzKmB`Ke@|Bm@xCCPERaBtI]dBg@jCu@vDSdASbAq@lDCNmAhGWxAo@fD_BdIuDvRmD~QiC|Mw@bEMj@qAzG]hBq@lDQ~@AB?@SdAeD|P?@Kh@e@`CKj@q@jDMj@q@lDWtAq@lDKj@gB`JGb@wCfOc@`CaAbFa@tBQ|@k@zCMj@Kj@Ov@a@rBKj@Kj@iCzMCHG`@YtAKj@Kf@O|@GZKn@UvAIh@QlAOhA]lCCPGl@Ij@CXSvBI~@UvCI~@GdAGnAEz@GdAEvAEtAA\\C`A?VCzAAl@GtDAh@IhFAj@Al@MlIYrRAj@OzKEpBChBG~DC`CGbEAl@?@[dSAl@Al@?t@E`CAn@IdFAl@]bVAdACdAAP?XAXAP?NAVEhACn@A\\AL?BAZAPAP?FEf@AVItAGr@APGt@Eb@Gv@E`@KbAI`AUnBWlBObAYjBMz@E\\Mx@Ij@ADc@zCSlAALi@hDc@vC?BWdBIl@Mr@M|@Ij@O|@Ij@?BO`AKj@Il@_@bCM|@EX]`C_@bCKn@Gd@CJWhBGd@O~@EVYlBi@hDIp@CHIh@OdAm@fEUxAStA?@Mt@?BSpASvAIf@Kr@Mx@AHEXCLCRADCPWdBm@bE]zBIl@GZAN[rBUvA]dC]~Be@xCEXSrAYpBYhB}@hG_@bCaA|Gi@pDc@tCOdAi@nDYfB?@SxAO`AERIn@EXc@rCIj@_@dCWjB_@bCUxA]`CEXO|@Il@c@xCKn@Mx@c@|CABIl@a@pC[tBMv@G`@WdBG\\Ij@G`@O`Am@fEc@vCIj@}AhKIf@EZETIr@Kn@YfBKv@UzAO|@Ih@?BKn@SrAIh@CTO~@Gf@CJe@bDStA{@zF_AjGw@hFOfAGd@UrAIn@UxAKt@q@rE_@dCSpAo@lEQhAKp@OjAe@tCMx@]`CWhBe@dDUtAYtBCPCNEZ?DKn@MdAAHIj@G^SfBIh@]zCSnBWbCSpBWdCYvCO~AQlB[zCe@bFWdC]pDWbCCXQfBSvBWhCYzCWbCEf@E`@MrA[zCMzA[|CSnBSpBU`CUxBMtAAL?@WhCMpAYnCGj@w@lISvBo@lGgG~n@Gj@}@hJOxAqA~MK`AI`A_AtJk@zFGr@Gj@K`AQfBGj@Gr@[~CYzCWdCIbAKbAOxAMrAg@bFSpBeA|K}@jJGl@Gl@OxAGj@?@]rDGl@Gj@OxAGl@MxAGl@OxAu@zHc@jEYnCQpBcA|JI~@AN]hDSlBGl@Kz@UtBIl@Il@QvAgAfJ{AjMKt@U|A[pCCT]lCQvA?@AF]nCG`@K|@?B?@M|@_@`DEVWvBIp@[hCe@xDGd@[dCi@rEQvAg@dEA@Gj@CP_@~CA?Gj@Il@{@fHuAbLk@vE]lCK~@SbBOjAc@tDAFMz@K|@AHGd@Gd@m@~EIl@?D?@A@Eb@M~@YzBg@bEGj@Y~Bg@xDGf@w@|Gc@hDg@`Eu@dGGj@A@ALE\\S~AOpA?@Ij@Gj@Ij@Il@WvBE^UnBIj@u@lGw@jGQxAIp@Y`CWtB]lCUlBa@fD[dCKv@K~@OfAEb@AFIj@?Fc@jDOpAAFu@bGGl@OhACTw@lGQvAm@~EQtA?BQxASvACRK|@AFGl@[dCQxAGb@Ir@Il@Ij@Ed@]lCQxAu@jGGb@AFGd@S`BiAlJGb@?B?@Gd@AHOjAGd@Y`CK`AGb@Eh@ADALCXGf@IjAIfA?@Cj@APCZ?BI|A?RARCh@EvA?JAl@An@?h@?DAd@?@?n@?`B?rA?@?l@?l@?d@?pC?l@?nE?tD?r@@pB?X?hH?hC?R?vB?f@?j@?|A?bB?l@?l@?rA@dD?pB?|@?\\?V?hA?`@?xD?pC@vBAP@vC?zF?hB?zA?N?xB?lA?X?lD@bC?~B?n@?l@?l@?vD?|A?vD?xA?jC@jC?n@?jB?tG?jA?`B?vA?x@?x@@bH?lA?vC?bD?vA?~F@p[@pJ?^?z@?|A?zA@xI?hK?nD@pJ?t@?~A?j@?n@?|A?H?lA?z@?`@?n@?`@?L?F?rA?l@?DAd@?N?x@AR?j@?HApAAl@A`BErDCzAExDChCMpJ?LKbJ?BAh@?BGpFGvE?`@C`BAzAIfF?v@AFAn@GfGAx@CrCAt@Av@Ax@?lB?jA?dA@dA@jA@h@@l@BpAFzBD`CBbAJlEBfAN|FDhCJlEHpEB|A@lB?R@dA?dE?nC?~AAzD?f@?xAAhE?~EArB?zCArH?P?X?~B?bB?`CAdHApG?jEA`H?l@?jACpLArXC|TEx^?hD?jBAnH?hHAfC?n@AfFAlM?`J?FCpW?jCAjCAtWAfC?l@?nDCxZ?|@AjD?jFAvEAfR?z@A`D?pB?l@?z@?tBA~D?hBAdF?nC?\\AfF?l@?H?tD?bCAnRAnHArF?\\?bDEnEAbBAf@Ap@?d@G|DAd@GfDAt@Az@Al@GtD?DGjECxA?PAl@?BCtA?FAd@AbAC`BCfBAtBAbA?`A?FA|EAdGA~C?rAAp@?B?v@CzNAfD?NApD?h@?zA?DA~EAbB?b@?rBAhC?~B?`BAf@?^?hCC~J?@?tBExVAzC?dA?xD?nB?zC?vC@n@?n@BrT?l@?l@@zB?lC?J?l@@nA?hB?^@hB?l@?\\@rD@tG?~D?jB@vB@rI@hK@r@@~H?b@@rE@zH@`G?dA@`GBvI@bH@lJ?xB@nD?N?jBAtAArA?HAb@ChAC~@Cl@?FEt@C\\I~ASvCI`A?FMhAOtAS|AYlBQdAOz@YzAWpAU`AGTGTETIZa@zAABMb@k@hBk@fBQd@}AdEuAtD}@dCSf@GR]|@}@dCuArDQf@A@i@xAsArD]~@k@zA_CnGWt@M\\m@|AsAtDEHc@lAe@lAe@pAc@lACHa@dA_@`A{@bCGNy@vB_@fAc@jAa@fAWn@u@vBy@vBOb@o@dBc@jAYt@Qd@{BdGYv@{AdEO`@gDbJ_CjGoAjDuC|HQf@yDjKaAjCiAzCm@bBSj@Yr@]`Au@nBuEfMoGdQmChHc@nAg@rAmAdDyBdGg@pAWp@wB~F}@`Cq@lBaAhCc@lAa@dAaCtGKVELw@vBWn@w@vBELUj@CJ_BjEcCvGmBhFuC|Ha@hAQf@aCrG{@zB_CnGiA~Ce@nAsE`MgB`Fs@jBwAzD_@dA_@~@ITIRWr@a@dA[z@u@tB_@bA]z@Up@?@Un@yDhKO`@i@tAy@vBENIRcApCoCrHiA~CQf@eD`JkA~CQf@CFwAxDcAnCO`@cAnCM^_@`AQf@Sf@Qf@ELg@rAiBbFs@lBiC`Hy@|Be@nAQd@Sj@Yt@KXw@tBWt@KXs@lBCFYt@cApCeApCYx@ITe@nAqAnDgAvCq@hBoAjDADo@bBWt@KXc@hAc@jAGNSj@CDENi@tAkBhFwAzD_FzM}AdEiA|CsCzHYr@Yz@GPc@hAKV[z@Sj@eC|GWr@qCtHITwB|FsAtDSf@oCtHkDjJ[z@oBnFYv@_@bAi@xA]z@c@lA[x@}AjEuAtD}@bC]~@cBvE{ChIoAhDsBvFw@vBaAhC[|@_AhC{AdEw@tB]z@Yz@KVYv@a@hA_@~@Od@[x@MZa@hASf@c@pAy@vBYv@[z@w@vBIRiA|CITu@tBIR[z@Sd@Qf@ITYx@KTqBtFg@vAaDtI}@dCcDzICFgAxC}BhGOb@[z@KZEJsApD{@jC_A~Ck@zBWdAk@nCUhAO|@ADYjBEVM~@WvBK~@O~AANEl@IbACb@IfAEbA?DCd@Cj@CfAA\\?@A\\Ad@APAz@?\\?t@AP?hA@hE?Z?tC?`@?l@?nA@rA?|A?bB?rA?dA@jB?z@?lB?zB?j@@zD?jD@nF?xA@jE?xA?fD?`A?dA?RB|N?xD?hCBrO?|A?pB?r@?bB@zB?rB?tB?lA?l@@rA?tG?fC@bA?`B?vB?bC@jB?`@?`A?pA?x@?h@?b@@xE?X?vB@xB?Z?T?pD?`C@jC?R?|B?jB?D@pC?h@?@@tL?vB?bA@zD?jB@tD?zB?nA?z@?zC@bG?fC@zD?lA?zB?l@BfM?fC?fC@tE?xF@hJ@dF?nF?l@@hD?vA?z@?X?jB@nA?dA?~A?zAB`N?xB?dC?|@@zB?nJ@|C?dA@nI@dJ?j@@nH?bD?nB?x@?RA|AA~@?Z?RAj@An@EpBAl@CfAExACbACp@GvAATCn@El@EhAAPEp@G`AAPEp@IdAI`AIbAIdAMtAKdAMpA[|Ce@~DIt@OrAOnAOlAQrAOtAMjASfBUnBMfAY`COtAiAtJAPGd@YhCc@rDMjAKv@CROvAIl@Gh@E`@E^Gb@WxB]vCMjAKx@E`@Gd@KdAEVK~@In@E\\Ed@M~@YhCGj@ETGl@CVCPGf@CZETEb@Gf@Gf@Gj@Gd@K|@EXAR]rCo@rFu@vGOjA?@}@bIs@lGWtBo@rFCTu@pGq@bGoBzPwAbMYdCkDtZg@rEG`@AHE`@g@nEEZE`@AJG`@y@jHAL}AbN_DrXYbC_AhIANEZ_AfI{AzM?@kBjPg@fEK~@MfAK`As@bGCZOxAIv@KbAMtAOlBMtAIxAKxAEn@MjCA@GlAIdCKhCCvAEtBEfCCdCAtBA`G?TCbJAzCAzI?l@GrWK|k@C~I?`BAxD?bCAhCAlCAxB?fFA|BApIAfFMxq@A~CE~Y?pBFfY@tD@dF@vFBlJ@tD@rD@tDBbF@xFB`KB~JHpZ?j@?n@Jx^?n@@zAL|g@@~E?|C?rD?`D?jE?|C?bF?vFAhF?~JAtS@jEAjO?tI?vF?jCAjP?bIAfc@Az^?l@Atq@?l@AxR?|X?jDA`C?vD?xD?l@?jC?~G?|B?nD?bIAx@?zF?|@?vB?nN?lB?|@AvD?dA?l@?dC?j@?^?fI?vB?`A?hG?pC?zB?vF?`A?fJA|E?dM?hQ?hLApD?rI?~G?tB?hQAbb@?ba@?`@?l@?zO?j@?vKIb[AfCGtNEnLCjEAzFGpLCfHAjEGhNOt^E`M?\\?l@Qrd@A|A?l@Al@IfS?xBKvV?l@Ulm@GrM?hAAlBAhCAx@AhCAlC?j@AjC?h@CxF?xE?dB?bA?~C?fC@hDDfl@Dz`@@bGL|uA@rSBfRDzw@@rS?h@?jH@xI?pC?|@Ah@?l@ANAt@Ab@Af@Ab@GbAGdAEj@El@Gj@Ix@Ir@Il@M~@Kl@O~@Q~@Qx@AFK^?@IX]tA_@nA_@hA]~@Qd@Sd@Sf@Yl@Wj@Wf@U`@eAjBe@p@y@nAo@v@Y\\WXGFu@x@_@^gA`Ay@r@g@d@{BlBaGfFq@j@o@h@WX}@t@cA~@g@b@_@ZwChCsD`DuCfCkA`Au@p@A@[V]ZqCbC]X]Xy@t@]XaBvAy@r@iGnFo@l@yE`EQP]XcIbHkGpFuE~DwDdDg@b@qCbCgCzBiAbAmB`Bu@n@]ZQNkB`BwAlAaCvBaBtAk@h@MJc@^URyBlBw@p@]XcIdHwAnA[X]Z{@r@[ZcBvAURi@d@aAx@aEnDkC|By@r@gB|AqAhAuBhB]ZoGrFsAlASPqAfAc@^_@ZaAv@gBvA{@l@]XQJ]VMJ}@l@kAx@mAx@mAx@}@l@}@l@aAp@iAt@m@b@yCrB{CpB}@l@mAx@{AbAo@b@MH{@j@_@VeJjGkAx@OJkBnAYRcAp@{CrBOJoKhHs@d@gAt@kBnAeAr@GDkChBmAv@y@j@_@VOH[Tk@`@IDa@Vu@h@k@^qA~@w@h@E@mAx@[Tk@^q@b@iAx@EBYPABa@Vc@Xe@ZoEzCy@j@}AbA{AdAe@ZSLKHIFSLMH]Vo@d@g@^MHCBOLi@`@SPWRYVQPQNMLUPQPWVMLMJa@`@YXYVo@p@g@j@MNY\\A?oAxAkD~Dw@~@UTa@d@]`@IJORaAfAyBhCA@iBtBaAhAi@l@CDGF[^[\\Y\\g@l@i@l@cBnBgE`FGFUX_@b@k@n@_@b@_AhA_BhBUX]^[^cCrCcAhAg@l@SVa@b@MNKLY\\Y\\OPMJ{AhBYX_@d@_AfAu@z@ML[^u@z@cAjAg@j@KN{@`AwG~H_@\\eBpB_BjBi@l@s@x@u@|@u@z@oAxAkBvBq@t@CBg@h@w@z@oChCgE|DgBtAeClBw@j@}EbDkC`BcCvAyAz@kBfAkDtBiCzAgCxA}@f@}ChBsF`DkNfIcFxCgCxA}A~@_CtA_B~@}BrAyD|BaCrAgBfAqAr@sCbBwCbB{D~BcCvA_CpAy@h@cAl@yAx@_Al@eAl@a@Ti@Z_DjBcB`AsAz@_DrB}AfA]VA@q@h@i@`@mBxAqHzFiG|EEBgCnBiPhMmCrBeAz@sB~AoDpCuFjEsAdAo@f@mBzAk@b@m@d@cBpAeCnBkDnCkEfDiDjCe@^sAdAo@f@oA`AaOhLwC|B{@p@aFzDmA~@eBrAmA~@]XOLyAhAOJoB|A{C~BiBvAmHxFkEhDwErD}DzCaGvE{@n@oCvBGDyAjA]ViBvA}D|Cq@h@eBrAwBbB_@XyAhAEDc@\\QL]XyBbB]Xo@f@aChBoAdAUPc@Z{C`COJ[Vy@n@yHbGqB~A[VgAx@MJ[VoDrCgAx@eAx@{AjAiBtAw@n@s@h@wAhA}BdBo@h@s@j@eBpA{@p@_At@y@n@C@sAdAGDcBtAQLwAhAg@^o@f@o@f@iA|@{BdBw@n@iAz@_@Xi@b@qB|AiCpBUPKJGBCBCBSNgBtAyFlEyAjAmBxAi@b@mBxA]XKHQNKHkEfDqCxBaClBwCzBqAdAiAz@QLKJy@n@oA`AcDfCMJ_At@mFbEcCnBc@ZcClBgF~DkBxA}BfBw@n@yAhAYTo@f@gClBOLiBxAuC|BwDvCw@n@A@w@j@mBxAa@ZsDtCwAfAcFzD_GtE_@Z[V{@t@k@h@i@f@u@v@c@d@cAjAgArAc@j@]d@CBU\\q@`AeA`B[j@w@vAk@dA_@v@ABQ^CD[r@]v@_@|@KTIREJe@nAc@pAaAzCw@tCYfA_@xAIZaAnDK`@cAzD]lA[lAwApFOj@CHIZi@nBeA~DSv@e@hBAFA@IZK`@]pAq@hC?@CFK`@Sr@EPk@xB]pAsAbFYhA[bAo@lBe@pAe@lA_@|@e@jAgA~B}@bBu@pAi@|@_@n@GHGJCBe@t@_@d@m@x@Y^oA|Ak@p@sAvAmBfBUTEBq@l@w@p@e@b@SPi@f@_@ZCBs@n@_@ZiAbA_BxAIF]ZEDOL]X_Az@uAlAwApA{ArAsAlAwAnAgB|AuAnA{@t@e@`@c@`@w@p@q@l@WTiAbAi@d@OLy@r@{@v@gAbAYTkAdACBeA~@CBy@t@iA`Au@p@[ZSPu@p@CB]Zy@p@{@t@w@r@eB|Aw@r@c@^c@^CBMJMN{@t@i@d@q@h@YV]\\KJ{BpBUROL{@t@wApAKJ]XkB`BwBlBWT_BvAkD|Ce@`@m@h@o@j@IH{ArAIFUPWVKJEBg@d@iAbAa@ZWT_@^k@d@w@r@gA`ASReA~@}@v@{@v@IF_Ax@k@f@_@\\e@`@o@j@k@f@{@v@w@p@m@h@k@f@k@f@aAz@mAfAYVOL}@v@s@n@aAz@uAnAq@l@u@p@k@f@_@ZYVIHSPg@b@QP_@Z]Za@^sAjA]Z]Xw@r@i@f@]XeA~@o@j@IHQNWTGFm@h@i@b@ON[X[Xe@`@IFSPm@h@EFw@p@m@f@m@j@[X[X]Xc@`@e@`@k@h@y@r@GF[XGFe@b@}@z@]^u@v@q@v@iAtAg@n@[d@c@j@e@r@m@~@EFk@`Ai@|@o@lAi@`Ac@`Ao@xAm@vA[x@c@hAYv@[`Aa@pA[fAEN[lAQr@YhAYtAYvAKh@CFG`@Mt@Mx@Kl@EVE\\Gb@In@Ix@Q~AK`ACX?@Ej@El@QlCGvAGxACdACpAAdAAxA?xCArD?`B?dC?`F?r@@xEAlE?h@?jE?jC?dC?R?v@?bA?dA?hC?vA?vA?V?vA?^?xD?fA?P?P?`C?b@?jD?~C?pE?F?~A?N?T?x@?D?~@?vCAlB?jC@jC?nH?bA@dP?lB?|E?l@?J@lF?tF?jE?l@?N?P?hB?L?^?N@nB?|A?J?|B?vC?L?lC@hD?zA?jC?L?`@?zA?xC?~C?vB?dB?T?h@?bB?bA?~BApA?dA?bAA~B?x@AjB?fAA`DAzC?lB?bAApEApA?P?v@?hAA|@?bA?v@AbC?p@AtC?|AAlB?~@?r@A|A?B?vAAjD?vAAlA?rCAlA?vA?N?l@ChG?`AA|HA|EAvEArFAbE?h@AtD?F?F?^?LA^?lBAbD?`A?^?^CxH?vAAjD?LArDArA?V?hA?dBA|DC~K?lAA`B?N?nA?x@AZ?vA?`A?Z?F?BA~B?~AAr@?B?`@?|CChGA~C?|AAZ?D?b@CbDGdG?FAz@ChC?PAv@?NArAAb@?h@CbB?^CbB?p@AjACxBCbCIxGCbCAdAAbAA|AC|AC|CAjAArACbBAtAAnAAnACxBAv@A|ACzAC|BCvDAj@?lA?`AAjA@`D?jC?jC?`C?xA?pA@lH?~@?d@?v@@l@?xA?f@@|J@nT?dC@fO@bIAn@EzYAxDAdDCpJAzGAdCGxT?t@C|HAtG?@?j@CdLCdI?XAxDAxD?fACbLAzFCpHAlF?fJAbA?R?H?t@?nCAhF?vE?zD?^Ax@?|C?NAlB?vB?pB?^AjC?jE?dG?`B?HA^?`@?z@AnD?zA?|AAfF?pAApI?n@CxY?B?h@?B?RCrR?vEA`O?`@?vCAvG?z@AnFAfP?zAAvH?n@?J?jC?|B?L?^AlGAnI?l@?|A?lCApB?X?vA?~A?l@AtI?\\AjC?zA?l@?|A?~BChO?l@?~DAhQAjE?l@?`D?VAxD?pIAfJ?jCAhC?zA?n@?tGAl@?l@?dA?zC?bBAtG?lCAxA?|A?l@?zFArE?v@?rA?l@AvC?fE?lE?@Aj@?xD?xDAvD?pEAvE?|C?l@AhS?lO?rL?nE?l@?l@?lE@`K?hE?xF?p@?|@@x@?lCAj@@l@?lB?z@?hE?nF?|I@zE?vC?t@?vB?dE?xB?lB?xF@fC@tBBpBB|ABl@D`AHrBLlB@RL|ALvANxATpBXjBXhBJj@f@lCVhAb@fBZrA^rA\\jA\\dAp@nBv@rBjA~Cd@pA~BfGfBvEdAtC\\z@dBvERf@Pf@~@dCjA|C~@dChAzC|AdEpDnJ`AhC|BhGlBbFh@vA~@dCtApDNb@bAjCxEhM|BdG|@dCf@pA`@fABDZx@~@fCdBrExAxDnEtLn@`Bd@lAHTZv@?@FRVn@tAtDd@lAZz@b@lA`AdCb@lAn@`B`AhCv@rBhA|C`AdCl@`BnBjFZv@t@pBr@hBvAvDv@vBhFdNf@rADJl@`BrAnDf@tAVn@DNf@pAl@~AZx@BFBDBJrAjDp@hBBFFNPd@b@hAPd@`@fAN`@@BN^?BZv@Xv@b@fAL\\@DDL@BRd@Xt@Nb@Zx@Vn@Rh@@BL\\Xv@b@hA`@fARf@Vr@Vn@rAlDzA`EDLTl@Zz@DHFPJVJXLZJXLXNb@Rf@Z|@n@bBt@pB\\|@l@~APd@Rh@@?Nb@b@jAd@lAb@jARh@Pb@Pd@L\\^~@Vp@^dAFN`AhCn@dBZx@^fA@BXz@Z~@Vz@\\pAVz@T`A`@fB@HH`@H`@BHPz@N~@Jj@N~@DTBNJx@Ht@Jt@BXDXFn@Df@PrBLlBJpBBn@FxA@\\?NBn@@j@?l@@|A@xA?`@?b@?dA?nA?J?bA@z@?^?zA?N?l@?\\?zA?|A?lB?rE?xA@fA?n@?vA?N?^?tB?R?j@?tB?dA@rB?fA?P?|A?n@?vA?|A?dA?bA@`B?R?B?X?tG?n@@hC?lF?bF?H?pA?lA?fC?~@@fE?jB?vB?tA?X@hC?xA?dA?zA?zA?jH@tE?L?|A?|C?hH@|F?zB?vE@rD?nB?rB?\\?l@?N?zA@dA?|A?tA?bA?~A@|F?pG@tG?vB?nB?xE@vC?hC?`E?lB?`A@dT@fE?bF@xD?pB?xI@`I?vG@hK?lE@tG?p@?jE@zF?tB?dA?|B@`E?R?pE?pH@bB?|B?hC@|F?hC?lE@|@?l@?lA@lC?rD@hF@|@?zF@dB?l@@`FBxJ@tD?nC@fB?F?|A@dE@dC?dC@rC@`D@vI@lC@~HB`L@zEBlRB|JBzJ?hBBxN@vE?b@?H@tA?vA@jC?|A@dB@pD?rC?v@@pB@rB?f@?jA@zD@jE?bD?P@~A?dA?zA@xA@zLAhC@z@?fG?fU?xD?B@nGAzA?`D@bF?zH?t@?l@?~E?R?rA?tM@dP?lA?bQ?vE?`E@xD?zA?|A?`A?X?xD?N?hD?dB?~E?fA?|H?vD?\\@lN?~@?rJ?P?xK@~C?rQ@tc@@xe@?|D?bV@zK?xP?`F@lE?zA?j@?xK?jE?vD@`AAhC@tG?jA?`A?lD?nJ@xH?zC?jM@pV?xC?bA?fF?fF?n@@bC?~C?|C?jC?vD?bC?lE@rB?dC?bD?nB?zA?fC?~C@`U?bM?dA@nG?zF?bK?fB@bC?pA?vB?rD?bA?zH@vI?|C?bF?rD@nG?xF?dH?pB?fC@|C?fM@fG?~A?lB?tB?zF?bF?xA@fC?rB?`F?lB@xF?bH?xA?ZAjGCpBChEEtDCzCEhCCdCC~CCnBCnBE`FErDCfCCrBCnCChACrCC~BErEAfBCtE@zD?rE?rE?dC@tF?tD?t@Ah@@xF?jG?l@@\\?~E?|B?B?hC@tH?bG?bN@pB?\\?T?\\?Z?V?V?X@rB?zD?nJ?hD@tM@~T?nA?zA?x@@~E?hE?|C?dA@~@@`@?R@X@f@?VBj@BdABl@Bl@FbAN~BPtCRhDPtCJnBNtBNfCL`CLlBLrBDl@Bf@Bb@@N@H?H@R`@zGDj@J~A?HB^BTBh@n@pKJfBJdBN`CHtA@J?@D`ADdA@f@@ZBfA?LBlC@|AAp@AbC?TAXIxCAl@C`@Ab@Cf@A`@Cf@A^Cd@?LARG|AA`@GhAIdCKhCKvCGxAGzAEtACb@Cj@A^ALAj@ABAXGnBInBExAIpBGtAExAC`@KnCOpEEfAK|BGtBIpBGpBGtBA^Ad@CbAC~AAzAAzAAzA?vB?hA?nJ?hC@fV?lC?jC?l@@lM?fI@vAAjA?bA@nHArBAhHArE?|A?TApEAjC?rBCfN?l@AjFEtTAhFAzA?jCArEA~CCtJCpJ?p@A~FAfF?`AAjFAfC?l@AhF?l@?l@AxD?l@?BAj@AtGArEAvGA~IAf@?l@AjG?rD?`F@vF@lI?l@?bE@jJBfM?dB?D?N?L?@?t@?f@@xF?dA@|A?zA?zD@fF?tA?dA?H@|@?fG@nE?bD@bH?xE@fB?tD@|A?jB?zA@hF?hD?jB?l@@|A?xB?lF@vC@bJ?dF?f@?@?d@@zE@jH?tG@bN@hP@jK@|B?~G@|G@rG?d@?vE?`G?jD?`U?pFAfH?zI?lH?L?lA?l@?~@?xA@xB?`@BxAHbF?HDpAFpBHzCJ~CBfAJjDD|A?@DxAZdLJvCPfFRnEDbAD~@BZFzAJnBLfCBn@@TBp@Bf@@t@?P@Z@n@?^?`@@d@AD?l@?T?XAb@CpA?F?JCx@C`@OhDKvBA`@MnCEfACl@Cn@Cn@Af@AbAAj@?x@?nA?hA@|A@xD?z@?L@jA@pC?fA?p@CtA?PAXAr@E|@IzAKpACXGl@ABEb@?BGl@_@rDCTK~@ADAHE`@QbB_@tDGz@G~@Et@ElAAv@?B?h@@h@?D?l@@L@^HpBT~CVbDXpDV~C`@fFHnA@DDz@Fp@Bn@D`ABbA@l@@n@@|A?l@AfA?PAh@Cp@ExAC^O~CMlCIvBI|BCpA?l@Aj@?`@?@?jCArG?dC?~E@|L?pE?dF?vW?tG?X?@?X?dH?P?~N?dG?hS?l@?|C?~L?fV@`L?l@?n@?zB?vF?jR?zR?f@?`@@P?HA`C?l@?`L?t@?f@?jA?bK?|A?xD?D?`FAl@?|A?L?zB?vG?h@?J?zF?nB?rJ?x@?hJ?D?f@?DAhF?bC?|A?D?d@?lC?D?xD?xE?pC?l@?rD?T?jA?f@?jC?v@?d@AzA?V?dA?l@?l@?l@?|@?^?^?f@?l@@n@?`@?J?pA?H?\\?D?J?jA?NAlA?N?\\?|@?|E?lBAnG?nD?H?nD?H?b@?l@AbF?B?h@?N?^?B?l@?hD?J?tG?~C?lA?dC?DArD@NAJ?dA?hP?p@?fC?B?T?pBAfV?p@?n@?f@?D?h@?B?h@?~FA~EExECxD?BAfAGhECnAAbAA`BCzAAl@AV?VK|HM|KCtA?D?@AlAQhMCnCYjTElC?h@E~CChCOnMEtBCfCC|AAnA?NAnC?fB?fB?|@@x@FtGNpRB|EDtF?r@?f@@n@@vAD`F?b@B`DFdFL~PV~XVd[@~@BzADpEBdADnBHpCBZBl@Bp@NtDB`@JfBDx@j@pKBl@XdFD|@Br@XpF@PF|@z@fPNtC@PTfE@J?Pd@pITjE\\jG@P@Z@P@RPzCjAzTBXLhC^`HRzDLxB?B@LHbBf@fJVtEz@bPN|C`@vH`ApQRhDTrERpD?FB\\TfEH~ADx@ZrFPfDN|BBn@D~@TbEBn@f@nJDl@\\rGl@dLLxBH`BDl@Bl@HzADh@Bp@HzAVlENbDNfCJ`BPpDBZBZBf@?DFfA?HTvDNrCFjARtDHdBBZNzCNrCBd@@F@`@@BTfEXhFHvAHrADt@FfAJlADv@@DDl@Df@Fh@JlABVFr@Fn@J|@PbBNrAXhCNrAP~AXjC`@nD@N@DRjBTrBFn@V`CD`@LhAJhAHr@BXB`@Bb@Df@B^Bh@B^@X?D@R@R@XB^@ZBrAB|@@Z?T@x@?j@?l@?`B?vAAh@?D?l@?x@?r@?R?b@?`A?bA@`A?r@@P?Z@t@@f@?^BvAB`A@\\@NDjBBt@Bt@@LBn@?FDv@@b@@DBj@Br@HrAFpADl@@Xb@vHf@hJf@tJB\\XdFBl@RxDf@nJDl@@NB\\HzABl@XjFRpD^tGRtDb@fILbCBl@Dl@Bl@L|BJfBDn@`AtQVdFDl@Bl@HzADl@Dl@HdB@LTlEDj@?@R|DF|@Bl@V|EBVd@`JJhBRtDZ|Fl@~Kb@`IJhBh@zJNtCZbGT`Ej@xKHvAHzAj@jKt@~Md@`J|@nPNnCDl@`@tHNtCHzAL|BZ|F`@rHh@rJXpFXdFTfE\\nGJpBDl@FlA^lH~@|Pd@nIJrBRnD\\lGJjBDr@B\\B\\@TBVB\\Ft@PhBHp@Hx@Jr@D\\@DD^Jj@Fb@Lx@Jl@Hb@BJHd@Jf@Px@Px@`@~APr@XfAPl@DLHXPh@JZPj@DJBJHRVt@JXTl@Rh@Vl@\\v@f@hAFNDHVj@`@t@f@`AJPP^Zf@`@r@jDtF@BPTP\\DFNTPX~CdFjBzCnCnExA`CpB`DhBvC~AhCl@|@BDj@`AjAlB^n@JNZf@V`@b@r@t@nA|BrDh@z@t@lAr@hAt@pA`@r@x@zAt@~Ap@xA\\|@@@`@bA\\`AHTDJ@DHT@Dj@dBb@vAJb@b@`Bh@|B\\bBXpAV|ADVZxBVpBNzAJ~@H`ALdBLlBJxBD|AD~BBzB@vB@bB@jC@rB?jC@rCBpG@fF?B@j@@lD?`@BtF?bA@bE?HC`I@lB?dKAlE?|A?f@?r@?n@AzL?zAAnEAbM?rDAjH?\\?nG?@C`WAvL?J?tEA`B?tDAjLAlJ?fCA`U?vAChR?jD?jKCjRAbG?~HC~b@?v@AxC?@?hDAhTAlOAnOApKAfFAlWAlI@tM@fC?p@?~D@zQ@pM?@@vF?Z?|C@~CBd_@@tMDfj@Bj\\Dxe@@|D?H@vK@jLDvYDdd@@nQDh_@@rJBza@@xD?|@?n@?p@@zA?dD@pK@|E?@?F?bD@`L?L?`B@`F?|F@vA?bA@lC@vN?~@@pA?@@xA@xA?p@@`@@z@@T@dA@T@V@b@?VBj@@PJdD@`@@JFtA@HBl@@P@VJzAB^HpAFhAJvA?HLzAHrAJ|AFhAJxAFrADfADv@D|@BbADdABfA@f@@j@?@@@@t@@`@@f@?b@?R?@@R@dA@zA?B?^?J?bC?D?B?j@?@?\\?bAAd@?B?n@Ah@?j@Ar@Av@GjDCp@Cz@A^C`AGnAEhAMdCEz@Ah@KjBErACh@I|ACj@QbESnEWpF?HO~CM|CWvFSpEIpBEfASfEOtDUzEO|DMzDEdBAXG~CCvCAdD?vB?nD?~D?|C?J@xC?|B?f@?dCAfE@hE?dC?hDAnD?fD?bD?fF?rF@zD?|D?hF?zC?lF?zD?H@jE?pF?|C?lG?zE?fC?nC@lJAlH@~G?pGA~G@jF?rG?d@?jD@vC?dD?jN?`K?xF?hY@rZ?zE?|E@vE?zE?dE?|C?tD@xC?|D?tB?|C?v@?^?pDA`G?pE@xI?nG?tC?bC?tG@t@?`J?lE?jM@nH?dH?bM?bH?vG?bE?lA@jE?fH?hE?tE?pE?B?zF?vB?fB@fI?hJ?~G?jG@vD?zB?|@?~G?tF@zI?hH?pH@xI?|H?dN?r@@xB?pD?`@?zB?rJ?|A?fA?hC?rC@rC@tI?n@?xD?^?@?tF@`L?|F@nFArD?B?tA@xJ?tC?^?r@?jF?d@?B?tG?dF?l@@hS?rJ@xD@t]?bA?r@@vB@rA@d@@z@BnADhBDvA@~@HnCHnDFtB`@lPLfFPfHJnDLfFFlCDxAHdEHdCJ|DHpD@\\B~A?ZBl@@fA@vB?~@@pA?z@?\\?pBApC?X?T?f@?tA?rBAhA?v@?rA?fCA~OAxH?hE?`A?~A?tA?^AJ?fC?p@?lHAnB?lC?hGAxE?rB?r@?dA?LAbD?~@?jC?jDAlE?r@?tBApK?tJCfZA|UAtI?pH?zDCp\\?lA?l@AvDAl\\?lBArJA~F?@?xGAv@A`ICzKAdE?b@?h@?vBAlA?dBA|BAfC?fFA~@?l@?\\?l@AlD?J?j@An@?N?pA?vA?l@AN?jAA|FA`FAxF?nBAvA?lBCjOApC?bE?P?\\?LCjQA~@?zCAz@?jB?F?RAnDAvI?jCAr@?|AAbIAvGAtC?bE?VAtC?dCAnFAfE?b@?fFG|YApHA|ICpNAfH?nDAhE?v@Ad@?l@Il`@?l@EzQA|ACbREfPA|E?|@A`B?F?D?L?F?J?t@AfDG|[?l@Ax@AdEAjG?xCE|OCpM?`@CtG?hBKvh@C`HCpL?rBE~OGjXAjH?Z?fC?`A?V@`DBfDRhVNpQBhDBpBBhD@z@BjCF`HDdFPrSBnD@V@hBDhG@l@?L@l@RvU?L?PDfFH|I`@jf@NpP@tA?d@?^?r@@R?xA?rJ@|D?jM?jA@fZ?Z?T?`G@tA?l@?R?n@?l@?l@?L?^?hD?lB?hC@fF?|B?L?hC?|A?l@?l@?|A?zA?rB?@?t@@pA?B@lA?r@@x@BpA@t@Bt@HhDBbABd@F`B@HDpAHnAFpAFv@HnADt@F|@Dj@JpALpALnAJjA@DZzCZrC?D^hDLjAHr@@HlDn\\LfADb@RjB\\bDXhCHr@XhCLpANpAPdB@@B\\BLN|ANtAP|ANtAFn@D`@X`CHz@P|AD^XnCXjC@FDb@Fh@D^fAjK\\zCRjBLjAHp@Fj@VbCP|ANtAXjCFl@Ff@Fl@PxALrA@JFj@Fh@@NVzB@FDb@NtATrBrAfMb@bEBRDVFr@Hj@^lD?BHn@NzA^lDHn@xBpSTvBBXdAzJRlBfAbKJ`At@xGh@hF?Bl@nFbCdURpBnFfg@@LbB|ObBvOXjCLlAXlC\\bDTjBVhCh@zEXjCP~AP~AVfCTlBRnBRlBTpBVfCRjBLfAJ`Al@xFHt@fA`Kt@xGLjAVbCv@hHH|@lA|Kd@fEf@|Eb@bEP|Aj@hFDd@Fl@TlB|@rIP`Bh@zENxAFl@Hj@VfCLfAb@dEBTDXdCnUVfCr@nG\\fDZpC@P`@dDDh@@HDb@JhARlCFv@HjBHlCFrB@nB@pBCjCAx@CrAEtAErAGpAC^Ev@Gr@Gx@Gx@MlAIx@ADGj@Kx@Mz@CNSxASnAKr@k@pDAHiAhHg@dDo@|DIj@I`@AHk@tDm@xDQhAKj@i@pDKj@AJkBlL?BIf@G\\y@jFIj@EXi@bDG^Ij@mBzLIh@u@|EKj@q@jECPIj@k@nDKl@q@lEo@~DIj@Kj@OdA[jBIj@G\\oAlI_A~FUvAUvAwCjRa@bCmC~PIl@a@`Ci@pDERObAa@dCUvASvAiAjHm@zDKj@AFe@dDQ|AOjAUfBMpA]dDQpB_@hFKxAInAGrAI|AoAnVQlD?HCb@El@Cn@QlDGx@E~@Cp@QjDSxDC`@O|CAXUbEGnAGtAAFGpAEv@Cl@G`AATKtBGdAMbCW~EOfDKtB]nGSbEIbBUlE[vGWrEIfBIdBMlCInBKbDCt@EvACxBAP?\\AZArAArAApA?nBA|FAlK?pE?n@AdCAnI?nG?n@AxD@vG?lA?hF?x@@zI?pE?`@@hG@`F@fE?P?hB@lC?hD@zC@rH?jC?xA@|C?lABxL?T?P?Z?P@tE?n@?N?`@?bF?P?`AAxF?dB?Z?|B?z@?P?xB?P?l@?bB?pI?X?n@?Z?P?`DA~D?P?l@?V?B?P?`L?\\?rD?rB?Z?P?xI?X?Z?PA|A?zA?\\?~@?h@?pA?j@?l@?B?zA?L?\\?@?T?T?~A?P?fA?BAtD?|A?`D?X?xA?l@?`@?|@@lA?x@?B@lA@nB@rB@|@@n@?\\@~@DxD?\\@L@|BDpC@dBDnD?F@l@?l@@dADfDDbEBhD@t@DdEBdD?B@h@FhG?LDxD@l@@~@H`J@f@BpC?l@@z@BhD@fE@hG?dB@pG@jD@fB@~@@|@DrGHrHDdEFzGBpB@vA@l@DdFFhF@lAHnIHrIF|FB|BHhJB~BDnDHpHBzCFfFDrEDrEDzD@jB@j@BjCBnBBlC@ZFnIFzE?@BhCBtBJdK@~AJpJDfF@`A@ZFdHDhDBvBFlGD|DBnCDfEBjB?VF|FBlB@|@@fAHtIDdDB|B@lBBnB@ZBlC@lBD~CBhC@tA@vABpA@~A@zA@b@BjCBlBBtB@nBBlB@lBBrB@VBpC@r@B`EDzBBjEBfCBpBBpB?T@LBdCDtEDfDFjH@l@@l@?XJfK@n@?l@@n@@j@@n@?h@BfCDlCBjDDxDD~EDnCBhDB`D@z@BjA@nBBhC@v@B`C@b@?H@bA@V?h@DdDBbDBpBBnB@nBBnA?l@B`ADbEBfDDrDB|BN`OBdBDlBBr@FlBDjADr@?JJnBBh@Bd@@LDr@BV?JBZ@D@TBZF~@T|CPnCL|ABd@Dl@LzAFjAHbALbCH~A@HBl@FvADpA@L@n@@h@Bj@@z@B^?P@^?ZBx@?L@t@?T@^?\\@t@?d@@n@?v@?V?V?d@?X?h@?\\AV?^?T?PAf@?\\?XAX?V?\\?HAZAr@?\\?\\A^A|@?\\?R?NAL?^CtAIrJCrB?H?B?NAhAAf@A~@E`F?N?ZA`@?J?`@Ad@CrBC`DCbCC~E?f@AxD?|@?nB@pB?L?P?T?\\?J?b@@|@?`@@x@@h@?dABtA?NBhC@n@@tA@p@@l@@pAFrFB`CDnDBdDF|EDtD@r@?l@BdADjFDzEDjC@rBFxE?T@n@BdB?TDxDDrE@nABtB@bA@l@@n@@lB@Z@n@@l@?HRdSBjCFxFD`D?^?L@l@DvCDdFDdEDbEFbFDzDDbEBpBBbDBnC@X?VFdEBbDDdEDdDBdDDhC?RH|GB|CF`GBlCD~DD`ED~DDjE@x@BjBDbDBfDDdDBhCBpB?VBjC?@@T?T@fABpA?\\FrFDhDBrCBvCBvB@ZDzDDjE?p@DjCBlC@nABjCBtA@z@@n@BpB@pADfCD`C?HDvADjBDrBDfBBzADrADrA?RDzABhBBnA@tABrA?XBlBBrB@pA@Z@lBBlB@hAFjE?^@z@@p@BjCBjC@rABjBBbBB~A@tA@t@?t@BpA@t@@rA@l@BxB@zAB`C@N?l@@~@BvBBxA?D@fB@z@BrABdCBlB?P@l@?t@DhC?V?NB`CDjC?v@BpA@fB@F?JBbBBpB@jA@^BrBBt@?Z@XBz@@X?R@NB~A@Z@PBhABtAFhB?DDhBDpBL`F@v@Bz@FjCDnBD`B@T?\\Bn@J|EBlADhAB~A@DDtBDrB@XD~A?P?@DxA@l@@l@@??`@HvCB~A@NDbC?F@zA@lA@x@?p@?F?h@?~CAdBCrCApAGfCAl@UnM?L?L?JAN?`@An@Ax@?pA?l@?rD?X@lB@z@JbK@fBDbD?T@V?TFpE?^LvK?V?V@l@XnXDxCBnCDfC?B?T?V@l@@dADjCBhCBrB@rADdDD~DFhFBpDHzGH`HBdC@l@@f@BxDBbABdD@t@DjD@fABzBBnBBrA@tA@rABpA?\\@lA@`@?P@n@@l@?HBbBBnB?\\@X@tABpB@lA?@?FB`C@l@@X?j@DjC?TDrC?d@BbB@tA@l@?H@b@?JBrCBfA@bABtB?n@@l@@v@@l@@n@@l@?H?b@@\\?N@l@@n@?Z?PBzA?D@f@@n@@zA@zA?@@l@?@@j@@l@@l@?n@@l@@l@@l@?l@@n@@l@@l@?l@@n@@l@@h@?B?l@@l@@l@?@@l@BvB?Z@d@@zA@l@@l@?@@l@?l@@l@?^?L@l@?@@l@@l@@l@?l@?B@j@@l@@l@?l@@l@?@@l@@l@?l@@Z@`A@l@?l@@L?^BzA@fA@nB?B@l@@~@DlCBnB@`B?@?F@d@@zA@PBbDBlB@`@@pA?@@T@~@@|@?l@BbC@b@BnBBrBBpBBnB@R?F@X?J@F@b@Bv@Dv@Dv@FdAFt@HfAHv@Df@BLLrAHl@Hl@Fj@F^\\dCFb@PfARvA?FLp@@PLv@DXL|@?FHl@BVHt@Hx@LpABT@TDb@Fz@Dv@Dx@Bl@D|@Bx@BrA@x@?X@dA@j@@~A@dA?z@BjC@p@@|B@|ABjC?r@@pA@~A?P@v@@dA?b@@Z@r@DtABpAJxBFbBDx@BZDv@Ft@LzAR`CFd@H|@BRLbAJ`AHn@DZDVF^BXF\\Hf@@JFZRlABLBNf@~CF\\DTh@bDLn@TrARnAPfAHb@@FJl@j@lDBNb@bCPfA?Bd@lCFZZjBXhBLt@FXTrABRJl@`@`C?@P`ADT@FFZ?FDPDXJj@Hd@RpAZfBTrALp@`@fCZjBRlAb@hC^bCDVPlAFb@NjALv@NpANtAD\\NvAFn@BZZbDLtANhBFv@LtAVdDLpABZRjCLrAJtATfCl@nHJtATlC`@zEf@jGZvDDh@B^Db@PnBDn@ZtDPpB\\hEx@rJdB~SrAjPLzA`@`FVzD^rGFjBH~BNtFDxCB`C@nD?jECvCEtCAl@IjFI~EKjF_@zTIrEAl@IfFO`Jc@tWANAl@EjCMpHSvKCvBGdDARAl@Az@E|BAl@IrEIlEEtBE`DAj@ItESvLAb@ObIEfCIjFIrEGlEE|AAl@AVE`D?LGhDG`DCdAMdIEtBUvMAx@IlEGvDOzIAr@KdFC|AKjGMhIGnCG~DGvCIpFSxKGzDClBIvDApAC~@Af@GxDGxDAl@K`GCz@AjAAv@?p@?H?h@?r@@bB?d@?PB~@DdBB~@B\\@\\FnABl@HbAB\\HbAJrALlAHr@Jv@BTDT@JF`@NdALv@Lr@RhAXxAR|@Nt@\\rA\\rAHV^rAj@jBTr@^pATv@b@dBPr@Pn@Jf@JZDTJh@Nv@Jd@BPDXDNBTBHHf@BJBPJh@BR\\lCFj@v@|HXlCZpCD`@@Lj@nFxAvNRtBTrBh@jF@DTvBNxAJ`ABT@Bh@dFDh@`@~DhAbL^nDh@`FJjBDl@Bl@Bh@@l@@bA?x@AdAAt@C|@Ej@E|@Gt@AJAR?BIz@EXEVCZIh@Kt@S`AOr@Oj@CHI^Oj@W|@Up@c@jAc@bAg@`AUf@S`@}@bBa@x@Ub@EF}@bBkAzBMT_AdBQ\\g@~@g@`Ai@fAk@fAe@|@CD}@dBwCvFwAjCcCvEwNrXgArBs@zAa@|@OXO`@Yn@CHSf@CFM^CDM`@]~@IXUr@m@zB]vAWbA[dBSdAO|@Kv@Kn@K~@Gh@SpBKfAG`AEn@G|@GnBC|@ChAC|A?\\?xF@xI?|B@`E?jA@jQ@dH?l@?xD@dE@rL?b@?@?N?\\@nC?jE?r@?J?B@rG?|C?z@@nC?f@?l@?@?vD?@?pC@dH@bH?lH@tD@~G?lG?H?hH@dHDj^?bI@tD@|D?lI@|GAn@?TAn@?D?PAt@Al@Cv@Ad@AJCn@EbACn@Ef@GfAOrBQpBa@dDSxAIj@o@zEeAlHw@|Fa@zCq@zE]dCQrAqBxNy@fGADYtBg@nDi@vD]fCUbBYlBqCjSIl@y@fGIj@uA`KYlBy@dGG`@]fC]bCG^i@~Dk@~Dk@bEo@hEG^[rBo@zDY|AYfBe@hCSbA[`BG\\SfA]bBkAxF_@~AqA`G{A|GQv@gC|K}CdNADmApFq@xCIZOp@k@fCIXId@Kd@Qp@o@hCEJMd@_@lAg@`BWr@Od@[v@EL[v@_FtKMVQ^OZOXsFjLwAxC_BhDyE~Jg@`Ao@tAaCdFc@|@k@nA{BvES`@iBvDgFvKoCzFyClGaArBq@xAmAdCc@~@{@hBgA~Bg@fAA?Sb@?@kB|D{BxEe@~@Ud@{@fBSf@Sb@EFO\\i@bAa@x@KNe@~@Yh@U`@ADQX_AbBu@nASZkBvCy@nAw@jAQV_@d@iA|Ag@p@i@t@g@j@W\\[\\k@p@]b@q@v@EDYZgBhB}@~@IHIHKJGFIHOPsAlAaBxAuAjAy@p@{AlAED{CtB_C`B}@j@wAz@o@^k@\\iAn@{BlAe@Tq@^uC~A{BnAuEfC{Ax@}A|@yBjAIDgB`A{C~AeB~@kAn@wIxEQJ_@TSLaCnAgAl@}BnAcHvD{Az@{CbBaBz@kCxAcDhBk@ZsBhA_@RA?cGfDqAr@kDjB_Ah@cJ~EIDiCxAu@`@wAx@IFULYNyA|@qBpAsA|@_@Xq@f@A?_@XkBxAe@^iBxAaAx@o@l@{AxAs@p@k@h@sBtB]\\MNiBrBUVw@`AA@QRGJk@r@IHQTaAnAm@x@OTo@z@cAzAc@n@a@l@wBnDqBhD{BfEoB~DcAxBWj@Sf@KRABELu@dBQb@qBvEGPGJa@~@Yr@u@dB?@EJa@~@[r@g@jAMXCHw@fBELm@tAGNm@vAcA`CmArCQ^oAzCKTGN?BQ`@GNQ^c@dASd@Uf@g@jAg@lAs@`B{@rBcA`C{@nBg@lAYn@Sf@cA`Cs@bBGN{@rBMV_@|@c@`AkAjC_@v@IPk@jAOZQZYd@gBxCA?g@x@GHY`@GJORY`@GHQTg@l@u@~@i@j@EFaA`AsApAMJA@QNiCzBq@h@QLm@b@s@h@yAhAg@\\q@d@g@ZYPs@d@sBlAOHQJi@Zs@`@OHQHa@P?@]PGBYLa@R]PA?_@Pa@P?@k@VUJaAb@A?_@N]PmDzA_CdAcCdAYL}BdAaCdAuB~@_@PE@{B`AGB}Ar@cBt@KDUJeDxA{@^_C~@kBx@eAd@wDdBcAb@k@TiAd@{@Z}Aj@cA\\mA^A@y@Vi@NmBl@aAVgAX_ARc@JeB^yB`@{N`CsCf@A?eOdCk@Jc@Hc@HuF~@]HkEr@KBA?a@FoDl@?@eAPA?gBXA@gBXgAPa@HOBQFA?IB[F_AVA?UFoA\\c@Na@LOFOF]LgAb@k@TwAn@GBSJe@T_Ah@OHoAt@A?]RA?y@d@eAl@_@RwC~AiCvAIDwBlA_Af@_Ah@aAh@_@Ri@Zu@`@_@R_Ah@oAp@q@`@_@RQJMFyBlAsBjAkAn@qAr@}@f@{BnA}@f@_B|@OHOJuBhAKFaDfBsEfCKF_@TgB~@y@d@_@TMFQJ_Al@oAt@eC`BcBlAsAbAu@l@}AjAuBdBg@b@]ZoAjAa@`@g@f@kAhAuArAo@p@GFm@l@eDbDaG~FaC~BGFmAlAiDfDkDjDkDhDkCjCkKfKWTsBpBk@l@_E|DmDhD_A|@kMfMwAtAWVYVs@n@_@Ze@^]X[Tc@\\_An@_@Vw@f@y@f@]P[Ni@Zy@^}@`@eBv@yCrA}CtA}DfBa@RiAf@gChAqB|@{B`AaCfAqAl@k@TqAl@mAh@cBt@gAf@[L{@`@qEpB?@eBt@kBz@cBt@m@XGDoAh@oAj@cDvAoFbCeCfAgBv@}@`@eDzA_Br@oAj@c@RiAf@sD`Bc@R_A`@wAn@w@\\cAd@cMvFeDxAaAb@aAb@_@Ps@ZwDdBaBr@s@Z}Ar@u@\\mD|AC@eAd@{GvC}@^a@PmEpBmClAwB|@A@eAd@{EvB_@P_@PGB_@PSJUHMFWJULQHUJQHYL[Ne@ROFe@TYNSHQHg@Te@Tm@VULIBm@Xk@Xg@V_@Pg@Xg@Ve@VCBa@Tg@Xe@Xe@XIDa@Vc@Xe@Xe@Zg@\\a@Xg@\\UPOJg@^e@\\c@\\c@\\m@f@YRc@^c@\\ON]Xi@d@i@d@_@Z_@\\e@`@QN[Zo@h@i@f@]Xg@d@YVIF{@v@q@j@aA|@a@\\e@`@e@b@c@^m@h@m@h@a@^e@`@_@\\g@`@e@b@e@b@u@n@g@b@q@n@s@n@_@Xg@d@[XSP}@v@_@\\CBe@`@c@`@q@l@URu@p@a@\\]ZQPc@^EB_@\\s@n@e@`@c@`@g@b@o@h@YXKHYTk@f@i@d@c@`@a@^c@^g@b@a@^_@Zo@j@UTQPe@b@[ZKJ]Za@`@e@f@CBYZe@f@c@d@i@l@cAhAc@f@e@h@k@p@e@h@c@f@YX_@b@_@b@e@h@[\\OPsDfE]^k@p@m@p@]`@c@d@e@j@k@p@i@l@w@z@a@d@_@b@a@b@e@f@i@f@e@d@]X]Z_@Xe@^a@Z_@Xc@Va@Vq@d@u@d@iEnCULCBC@C@qCfBqCfB_Aj@{@j@sBpAc@Xe@XkAt@C@OJg@ZWPC@YRC@e@Zc@VYPSNKFe@ZYPGDUNc@V]Te@XWN}BxAQLKFyBtA{A`A{DdCeC~Ag@ZcF`DyDbCWNu@f@s@b@[ROHyAbA_Al@o@d@_An@y@l@u@f@e@^o@b@[Tc@\\i@^e@\\]Vi@^a@Xk@^_@Vi@\\k@`@w@f@{@j@k@^g@Xo@b@m@^i@\\s@b@s@d@i@\\c@XWNg@\\m@^a@Vw@f@_@TuA|@o@`@w@f@g@Xe@Zc@Xg@Zc@Xg@Zc@Z]Rg@Za@Va@Vu@d@e@Ze@ZSLi@ZWP[Ra@VYPg@Zi@\\a@Xa@Ve@Xe@ZWN]Rc@X[RWP_@T]TYPWPQJYRa@TSLSN[Ra@TWPe@ZUNYPQJOJ_@Vg@Xc@ZYP_@TUNc@VYP_@Te@XWNQJwAx@a@Tc@Xk@\\_@RSLWNOHa@V]Ra@T]RYPQJy@d@c@VWPq@^g@X_@TSLsBlAe@Xm@\\c@XeCxAiAn@}@h@g@Z{@f@}D|B_E`CKFcAl@e@VSNkAp@i@XKFi@\\mAr@k@Zs@`@i@\\e@Vi@Zm@^m@^QH_@TIDe@Xo@`@[PSLOHEBc@Xg@Xk@\\a@Te@VWPMFa@VOJMFe@X_@TKFKFSLMF[R]R]RYPID]RYNa@Ve@XULa@TULGDMJQHIFg@Xk@ZEBIDSLA@WNGDYN[RIDUNID[R[PGBKF]To@^EBSLYNUN_@R[RGDYPQHu@d@]Ra@Te@Xc@Vi@ZULIFMFQJGD]R_@Tc@V]Tc@Vc@VOHSLg@XYP]RWN]R]T]PUNC@QJg@ZwAx@YRSHOJc@V[R]R]R_@Tc@Vy@f@SJ[RYNIFEBcB`Ay@d@e@XmAt@eCxAg@Xg@Zc@Tk@\\{@h@s@`@e@Xm@\\s@`@i@Zm@^SLYP_DhBa@Ve@VWNk@\\iAp@{A|@sAv@gAn@iAp@g@Xe@Xg@Za@Tg@Zg@X_@Ta@Ve@XWNgAn@sAx@m@\\i@Zc@V_@T[Pa@Te@ZA?UNkC|AsIbF]RA@_@Tq@`@e@Xy@d@g@Zg@XSLID]R_@TCBcAj@g@Ze@VKFi@\\]Pe@XSLe@Xe@X[P_@Tc@Vg@Xg@X_@TEBm@^s@`@w@d@u@b@u@d@q@^i@\\o@^u@b@}@h@o@^c@VuDxBqF`D]Tk@\\kKfG{@h@_@TyFfDsNnIsBlA_@TqDvBmAt@]RIDa@Vm@\\_@Rc@Te@T{@`@i@Tq@XUJC@MDk@Re@Py@X}@Vs@PUFUFg@La@Hi@J_@HaATo@Lc@J_@H_@Hm@La@H_@Hg@JWFa@H]Hc@H[FYH_@FYHUDYF[F[He@JWF[Fa@Hi@Li@Jk@Lg@Ji@Jk@Lk@LmIdB}Dz@}Bd@_ARm@Le@Jk@L_Cf@gATu@P_@FqAXwBd@]Hu@PWHo@Pk@PA?a@Le@Pi@Rk@Re@P_@P]Ni@TMHi@Ti@Xq@\\[RSJg@XIFaAl@[Pa@Vi@Zk@\\e@Z_@Tc@VA@UNs@b@s@`@WPWNWLUN[PWNQJUNa@Ty@f@[R_@T]R]RMHaB`AsAx@[PSLCBCBKF_Aj@m@\\sFfDaB`A{D`Cs@b@q@`@mEjCeAp@}CjBu@b@WNkAr@SLGDs@b@]R}@h@w@d@uDzBm@^gAn@k@\\i@\\eAn@{BtAmAr@e@Xc@Vc@XGBWPSNk@`@g@^{@p@_@\\YT]Xa@b@[Xg@d@STc@d@c@b@YXcBfB_@^[Z?@IHKJONMN_@^[\\IHWVe@f@MLm@l@A@_A|@OLQRSPST{@~@a@`@UT_AbAYXYXq@r@s@t@WXk@j@_@`@i@h@UVa@`@gBjBUV]^s@t@WXYXc@d@SRUTYZQNo@p@]^]\\g@h@UTEDA@YZ[Xq@t@_@`@k@j@c@d@e@b@]`@]\\aAbASPQRw@x@w@x@i@h@STQRo@p@y@|@u@t@MLUVmAnASRs@t@wAvAk@n@y@x@aAbAcAfAmBnBkAlAYXKJaBdBcAfAuBxBgBfBo@p@_A`Ay@x@q@t@u@x@wBzBs@p@[ZABs@t@QPsArAmArAy@z@m@l@m@n@s@v@i@f@[\\A@i@j@g@h@[\\g@f@k@j@a@b@WXUTm@n@m@n@SREDGF[Za@d@}@~@k@j@c@d@MNwAxAs@t@i@h@iAlAiAjAkAlAgAhAk@l@y@z@i@j@eAfAi@j@c@b@iAjAuCxCy@|@c@d@a@b@]`@_@b@[^c@j@g@p@UX[d@Y`@W`@c@p@i@z@Wd@OV_@n@]p@]p@u@xAq@pAq@tA[l@y@`Bg@~@GNCFAB]l@a@v@Ub@Ud@Ub@eEjIk@hAqAjC}@fBuFxKUd@{AzC}@dBCFKP}@dBEHMTa@x@Ud@e@|@[l@Yl@Q\\ILe@`Ag@bAg@`A[n@[l@e@~@Yj@Yj@i@bAYl@KP[n@[l@Yj@e@~@KRMV[n@Yj@_@t@ILeAtBcArB[l@Yl@[j@u@xAKTABGJQZa@v@a@x@Wf@Wj@Wd@OVkFjK?@EFKR[n@y@`B[n@g@`AYf@Q\\IPOXYl@Wf@]n@cAnBKVm@jAABk@hAm@lAaAlBS`@AB}BrEEHmBxDiBnDe@bA]t@m@tAe@dAg@pAo@`By@`Cm@fBSp@Sn@St@Sp@St@[jAYjA[nAWjAaE~Q}AfHKh@uAfGGZi@bCi@`Ci@dCa@jB_@~AqA`G[zAyB|JENq@zCKj@cApEi@bC{A~Gi@bCi@dCa@fBa@hB_@hBOp@s@~Cy@tDYnAeAzEoAzFy@vDYpA_@fB{@tDy@xDmBtIg@bCsAdGo@vCUbAUlAOz@Ml@Mz@ADObAOlAc@dDe@xD_ArH{@zGwB~Pc@nDeAhI}@nH]hCaAdI]lCi@lEIf@iAbJsAxKADOjAg@`E_BfMk@tEAFIr@WrB]lCWpBKx@Kz@aAxHOpACPM|@SfBYxBAHYrBMr@Kl@AFUrAOx@a@jB[nAQx@]lASr@St@Ut@AFQl@]lAOj@CHSr@i@hB[jASt@K\\]lASr@St@_@nAo@~Ba@rA[lAi@jBe@`BK^_@pASr@]nAq@bC_@nASt@]lAg@hBi@jB]lASt@Ut@]lA[jAIX{@zC_@rAIXc@~ASn@Qp@Qn@Qn@IVSp@YfASn@[hA[fAYfAc@|ASp@e@dBK\\qCzJ[hAs@fCIVSv@Sv@[nAQr@Qv@Ot@AHMl@Ov@Mx@Mv@Mv@SpAQ~@?DSfAa@hCSpAIb@SrAc@jCAFYhBIf@g@zCMv@Kj@AHa@lC]pBo@~DSjAq@bEYlBMx@SlAUrASnAUxA]zBYdBUrAKp@}ArJMx@Mt@Mt@Mz@Mx@e@rCKn@Ih@Kh@[lBMr@Qz@g@lCa@dCUtA]rBg@zCq@nEgAxG[lBYjB]tB[nBi@hDc@jC[pBc@hCStA[nBUtAm@tDeBvK[lB[pBc@lCa@fCUvA[lBc@jCi@fDc@lCa@hCq@fE[lBStAy@bFw@|EUvAa@hCy@bF_@dCq@bE_A~Fc@hCq@fEaAjGUtAYlBStAKz@Iv@OtAMrAKvAKxAIrAA^Ex@EfACl@CxAA`AAn@Ax@?z@?|@?n@@dA@x@BfABnADjAFhAFrAJrAHxARzCB^Bz@HhB?DBlA@hAAlDA~@EhAIbBKfBKvAaAdKABcEjb@g@`F[`D{@vIY|CIx@_CxUe@jEg@zFCLCXGp@_@vDUjCs@jHI|@El@OlBKlB[pFErAOrEO`HGhDAh@A\\K|FK~FAh@?TEtBATGvCErBItDm@tZI|DIlEOjGIlEA|AAtAAbD@fGFvEDtCFxC@TFtCHjDb@jRTdJRpJFnC@l@FzCXlMHnD@j@DvAJxFFxB?RFbD@FLzGDrAZdO@B?J@Z?DRlJD`BVpLBpABzAD|ALxFF~CHpDNzF?@DrBDrB@l@@`A?jB?vAAnBEjBCdAEdBGnAEx@KnAIlAm@jHkA~MAV}@bKCVATc@dFCVCTCVm@fHUjC_@nEMzAGj@El@Gv@AHWlCa@dFYzCCh@Iv@Gr@E\\S`CEh@c@dFANCZ?@QpBCXEh@ABANM~AKbA?BI`AMxACVADEj@Eb@CZABWbDCLAVAF[vDc@fFaAdLg@tFSlCK~@M|AUlCSbCGj@Gz@O`BG~@GfAI`BEdA?LGjCEvBAt@?vB?bDApA?rB?b@?zAAdLAdM?h@?rB?hA?`@?vJAhF?dI?N?x@?L?zAA|N?xG?zC?|G?nA?@?hBApMAh@@tEAhI?zBAbPCp{@ApX?tC?B?d@?FAhU?pA?n@?xD?LAz_@?|D?F?l@AtJ?R?P?fF?`@?lA?fD?~B?vAAvE?fA?vE?~@?zNAzF?\\?zC@xDAfD?`WAvG?fH?lAAtJ?pC?`I?l@?hM?jLA|DAhd@?xE_@xn@KzOArAC~EAlAEzE?zACzB?\\A~@C|E?BEnF?PAn@CxD?bA?JAv@AjCAzAAh@?D?l@An@AxBAt@AvCErE?hAElDClHCtEA`@Ax@?RChFIhK?X?h@?NC`CCxDApA?x@AP?f@CpBAvAIhN?hBGxHClECxFEtHCfDApBIvLGhJA~BCxBAvDAl@?x@CxEA`EAhC?n@CvG?t@?D?BAh@?Z?R?X?R?fA?@A|AA|A?zAA~C?ZA|AEbL?H?^?tA?ZI|R?l@AzD?n@Al@AjC?l@AjC?hAAjCEdIApIAzAC`HC|IGbQQrl@?H?N?L?`@GnQApFGbM?~@AhI?p@AnB?V?xAAtBAhL?R?RAN?N?VAdE?h@?t@AfFApIA~BAxFA|D?dCAzDClVAjEAvE?^AtA?pA@t@?f@?`@@n@@n@@bADhABz@FvA@^BTDz@?BDj@Dh@H`ADd@@PFn@LjAJz@LdAJv@L|@BPJh@BRNx@XbBVrAXzAd@dCHj@@DHd@^nBRlAHh@BLBTDZFl@JhADv@Dd@Bn@Bf@@n@@\\@\\?^?l@?p@Ar@Ap@?DAd@Cl@Ch@G`AOjCIrAGjAOxBOdCCd@KxAWrEWfEW~DC\\YdFYlEYbFKbBQlCIpAIxAGbAMrBOtBCd@Cd@[dFIvAKzAKfBCb@KzACf@Et@Cl@?@CZC~@G`B?ZA^AnACpGBhC?@BjBBlB@jA@T?VB`B@f@BbA@~AD|CBfBJrLBfF?fB?d@?j@?J?bF?zA?hBA|A?@?l@?|ADxQ?x@?`E?t@?b@?L?dCCbO?DCrS?J?tC?vJApE?`CA`O?L?vF?vC@bD?x@@zE@rCAjG?zB?~DCda@?f@A~BA\\?P@l@@rGApC?l@?dCAbB?V?xA?`D?HAdQ@jFAz@?^?n@?x@?~F?fF?@?X?P?T?D?fA?tA?tA?jD?xI?dJ?xA?hBAdAApACr@Cn@Ch@Ep@?PCTCn@QdBEj@[jCa@`Em@fFQ~AUtBU|AOjAEPENGZKb@Sr@KZABGNSn@q@`By@bBe@~@ELmBvDQZkA`CQ\\g@fAEHy@|AqFxKwBhEwDvH{AxC]p@KRUb@iAzBMV[l@w@~Ac@x@wDxHs@rAq@rAc@~@s@rAs@xA}@bBqAhCEHm@lAg@~@g@bAYj@c@fA_@`AYx@Mb@ERM`@iApEq@rCGVOh@Mh@i@~B]tAOh@A@Kf@[lAAFMl@Mf@eD~MW~@IVGXaAxD]tAOl@I\\I\\iAvEiAvEOh@IZUbAkBtHk@~Bu@|C_AtDSz@[lAq@nCSt@?@I\\A@Ib@c@fBg@rBUx@w@bDKd@y@`DsAbFqArFS|@ENw@fDQp@Op@[pAENENENQv@a@|AG\\GRgAtE]rAYjAc@lBqBjIk@vB]vA_@|Aq@nCAFs@pCEPMf@i@tBCJw@dDYhAGXGVABOn@EPKb@m@dCyAzF[rAsBtIK`@kAzEa@zAg@pBU`Ac@fBKd@ERMh@w@jDG`@SfAk@vCETMp@k@hDMt@?@UxACR]dC[zBAJSdBE`@UvBMdAIbAIz@Ed@Iz@AHI\\K`AItAKvAQxCCb@A^Cf@C`@Cb@OvDAXCz@@J?FAPAREz@KnCKxBGfBKvCIfBSfFAJCn@A\\WvGE`AYpHCXAZYhHMzCMdCGbBCd@G|AIfBKtCMpFS`FEtAItBGtA?JAFEdAEpAIdBAPOhEQdEKfCGhAEp@WhHMdDEbAKnDQvE?FSpFOtDIjBGlA[|F]tG]pHGnA?D?FAL?@C\\A^IzBKjC[dIIfBEpACl@IhCGnAALA^ALMhDeAtXAd@g@`MUdGG|ACn@YxGOnDKvCItCCd@Cb@MfD?PYrHMnDKjCSfFg@pMItB?HYtGIzBGzAShFSfFCl@e@`LAn@GnAOpCATUvGa@rJAP?R[vHEz@A`@AJ?JATKvBGtB_@nJa@jLGdFMjFAl@CbDAVAl@?TErAGbC?@?r@?rAEjDApF@jA@vA?xA?vA?B?pAAtFAp@AjD?l@?l@?bBAfBB`E?fA?N?dA?dA?Z?|A@lG?xA?h@?dA?@?bA?vA@r@?l@?@?|C?jA@|@?ZChS?xB?B?hB?^A`CGbEAd@AJCh@Cl@IjAIt@QzAE`@UjBCZAD?@AHCNAJ?D?@a@jDc@|DYfCIp@?BE\\k@bFQtB[tC?DCVMfBMfBA`@A^Cr@Ch@?`A?|@?v@?PDbK?xD?l@@vABhACvEKjHKdEElBCbBArACl@Ax@ItEElAC|@AdBAdB?f@@x@ChA?x@?rD?nA@fB@j@?F?z@@T@zA?H?T?F?J?F?D?^?D?H?T@^?\\?n@@rA@`@?hA?l@@lB@b@AB?JCnA@fA?Z?B?Z@xA?fC@fC?FCpB?bA?n@An@?l@?FAtD?B?h@?DAl@?P?@?T?B?N?B?V?l@?BAj@?B?j@?@?VAxA?V?@?T?V?@?ZA|CD`CD`CJfDJfDZ|H@pA?N@Z?@@r@H~ERbC?f@DzA?B@v@?P@??\\@R@rA@b@JzDJvDBr@Br@D`BBbB?f@F`D?HBxB"
                     },
                     "start_location" : {
                        "lat" : 39.0385572,
                        "lng" : -95.6083029
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4528
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 197
                     },
                     "end_location" : {
                        "lat" : 39.7575973,
                        "lng" : -105.0097612
                     },
                     "html_instructions" : "Take exit \u003cb\u003e274\u003c/b\u003e to merge onto \u003cb\u003eI-25 S\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "knxqFncv_SGfAAF?d@?xD?R?^?F@^?\\Az@Ap@?JAD?\\ABAd@?@?PAZAl@E|A?FAd@ARAl@AZEdB?HAZE|AAl@Cl@Ar@AnB?h@A^?N?l@?~@@p@?vABN@X?x@?NAl@Cj@AX?RCj@Gh@E^ERERGREP]fAg@|AA?ADITCLKj@Ar@Ab@?H?X@T@FBXBNBL@HL^FLJV@@LTFJTXBBXTDB^RJD\\HZDX@F?L?\\Ed@MRGb@Ob@MbA]@?dA_@PGVIn@Q`@G^C|@FnA?b@?r@D^Fr@LzAZnATb@FB?^DF?LBN?V@B?N?N?J?R?V@L?b@@P@L@RB^DVDF@F@ZF@?^JF@XJTJJDhAd@XPPLNJPL@?DBF?H?FAXPTRp@j@FDx@x@RTJLLPZb@VZLPf@r@n@dARV@DT`@JThAnCZbAHR@FBDFVBDDN?@FNX`A~@fDX~@Vz@V`AVz@J^BH@D@D?@\\hA^tAN`@J^Xn@JVHRR^JT\\l@^j@p@|@p@r@z@|@xAlAFDt@n@ZVXTnA`AXPf@b@`Av@dBzAXTx@r@|@z@JH?@DDLLx@z@dArADFLPt@bAh@x@t@jAhAdBtArBj@|@fCdEj@|@PVl@bAd@p@X`@V`@"
                     },
                     "start_location" : {
                        "lat" : 39.7797398,
                        "lng" : -104.9760798
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 302
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 39.7565622,
                        "lng" : -105.0128798
                     },
                     "html_instructions" : "Take exit \u003cb\u003e212 B\u003c/b\u003e for \u003cb\u003eSpeer Blvd\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "_dtqF~u|_SPx@@D@DFJHPl@`Ab@v@Vb@JTL^HZFZF`@BXBZ?V@`@?Z?j@?d@"
                     },
                     "start_location" : {
                        "lat" : 39.7575973,
                        "lng" : -105.0097612
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 267
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 39.7564352,
                        "lng" : -105.0158326
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork and merge onto \u003cb\u003eSpeer Blvd\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "o}sqFni}_S?X?L@B?D@LBN@H@@Lf@@B\\lADNFXBT?V@\\?VAN?N@\\CRU`AS~@GT"
                     },
                     "start_location" : {
                        "lat" : 39.7565622,
                        "lng" : -105.0128798
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 138
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 39.7576731,
                        "lng" : -105.0158432
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eZuni St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w|sqF|{}_SS?I?[?cA@U?Q?{@?S?"
                     },
                     "start_location" : {
                        "lat" : 39.7564352,
                        "lng" : -105.0158326
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1,206 km",
                  "value" : 1205661
               },
               "duration" : {
                  "text" : "11 hours 2 mins",
                  "value" : 39737
               },
               "end_address" : "Las Vegas, NV, USA",
               "end_location" : {
                  "lat" : 36.1700501,
                  "lng" : -115.1400843
               },
               "start_address" : "2777 Zuni St, Denver, CO 80211, USA",
               "start_location" : {
                  "lat" : 39.7576731,
                  "lng" : -105.0158432
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 138
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 39.7564352,
                        "lng" : -105.0158326
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eZuni St\u003c/b\u003e toward \u003cb\u003eW 28th Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mdtqF~{}_SR?z@?P?T?bAAZ?H?R?"
                     },
                     "start_location" : {
                        "lat" : 39.7576731,
                        "lng" : -105.0158432
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 39.7559908,
                        "lng" : -105.0150768
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSpeer Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w|sqF|{}_S`@@FWV_AV_A"
                     },
                     "start_location" : {
                        "lat" : 39.7564352,
                        "lng" : -105.0158326
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3284
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 156
                     },
                     "end_location" : {
                        "lat" : 39.7282726,
                        "lng" : -105.0147454
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eI-25 S\u003c/b\u003e via the ramp to \u003cb\u003eColo Spgs\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}ysqFfw}_SXWFIHEFAHAJ@LFNHXN`@RNDLBJ@F?FCPGdAAj@BZBXDHBb@Lp@Xl@^VTVTb@^PLl@b@TNVNfA\\XLFBf@VxAj@HD^L@?|@Vh@P~Af@F@HBfBj@rAb@jA\\\\JdB`@n@HJ@P@VD`A@h@A\\AlAGVEHAd@KFA^Kb@OXMXMn@_@JGrAgADC\\[z@{@VYRSLOBCPQNOJILQb@a@FIBCJOb@m@JKn@o@HILOv@s@PM`@[BAFEHGBATMRGHEPE\\IbA[@A`@IRE`@IFAHAXA\\CD?h@CN?JAb@AtAGn@Ar@ANAL@h@?dBFN@XBlATf@J\\FXFlA\\bCv@hAb@LFd@RbAb@hA`@`AV`@Fz@Lb@Fz@Hp@D\\?X?Z@P?B?LAD?R?j@CTAB?h@EVE|@Mj@Kd@K\\GRG^I~Cs@@AdBc@`AWdAW"
                     },
                     "start_location" : {
                        "lat" : 39.7559908,
                        "lng" : -105.0150768
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1819
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 39.7257103,
                        "lng" : -105.0326516
                     },
                     "html_instructions" : "Take exit \u003cb\u003e209B\u003c/b\u003e toward \u003cb\u003eLakewood\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ulnqFdu}_S`@FF?VEp@K`AOFAt@K`AM^EPALAP@TFRHRLTVDFHLFNFTDVBPFZ@^?H?@?N?HBfBDjD@zA?bD?R?j@?DAd@GvD?NEdBEp@QfCM|BCn@AlAALAdBC`F?XCtD@^BdBFtANxGDhBH|EBrB@lD?jACbCArAAj@"
                     },
                     "start_location" : {
                        "lat" : 39.7282726,
                        "lng" : -105.0147454
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "12.6 km",
                        "value" : 12566
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 452
                     },
                     "end_location" : {
                        "lat" : 39.7254041,
                        "lng" : -105.1795664
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e and merge onto \u003cb\u003eUS-6 W\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "u|mqF`ea`S?T?zA?nAArA?d@Ap@?H@HD^@xAAR?zC?\\?H?bC?XAd@?jA?B?d@?~D?j@An@?j@?@@`@?jBAnA?Z?jD?F?B?L?RA|A?l@?jCA|B?zB@vHA|CA~AAf@C~@A|@AnCAlD?p@?xGAvG?tA?tA?n@?zB?hE?@?B?L?Z@`C@fEHhE?L@bA@l@?rC?nA?J@l@?L?dD@lG?|C?@?J?`@?f@?rC?~@?Z?L?`@@l@?rB?d@?nA?L?^?L?t@?f@@lD?J?`@?L?^@lC?l@?J?`@?n@?zA?jB?`@?l@@rM@dC?|D?fB?hA?p@?z@@lC@fI?fA?hA@rB?h@?\\?j@?T?V?D?b@@n@?vG?^?H?`A?~A?`G?zC@zE?jD?zBD~C?tD?nA?bD?fR@jG?R?hB@fE?tC?n@@xD?n@?BAh@BxD?tA?t@?`B?h@?l@?|A?bB?z@?X?l@?f@?pN?xA?hA?bD@zA?z@@z@?~B@~D?V?vC?L?`D@rF@hB?hI?P?lC?T?xD?tC?@?|@@hB?tC?v@@jC?`B?jC?B?xA@|A?l@?^@hE?~@?|@?r@?v@@|B?l@?hF?n@?|A?L@~C?vAA|I@rBAdC@rG?hF?r@?|A?P?|A?T?lJ?bD?f@?pA?pA?f@?H?dA?zA?tE?n@?xD?|A?l@?zK?H@xD?lC?b@?H?l@?bT?dL?n@?fF?P?xIAnD?H?P@jA?x@?nH?`B?hA?hC?nG@rC?dA?dA?tG?jF?f@?~C?~G?d@?jC?F?H?tC@jEA^?P?v@?\\?tD?Z?`F?l@?xD?vF?lC"
                     },
                     "start_location" : {
                        "lat" : 39.7257103,
                        "lng" : -105.0326516
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "794 km",
                        "value" : 793721
                     },
                     "duration" : {
                        "text" : "7 hours 18 mins",
                        "value" : 26305
                     },
                     "end_location" : {
                        "lat" : 38.5803074,
                        "lng" : -112.5978277
                     },
                     "html_instructions" : "Take the exit onto \u003cb\u003eI-70 W\u003c/b\u003e toward \u003cb\u003eGrand Jct\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Utah\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "wzmqFh{}`SKj@AD?BEh@CRE\\Gj@APKfA?FANCT?@APAL?LAH?VAN?T?V@V?L@J@NDVFd@BNBLJ`@Nd@DJDJFLDHFHHNNRDDFFTPXTJHLHHDJD`@P|@\\xAj@nCfA|Bz@TJHDRHJDRN@?TRBBJHPRRRDFNTBBV`@FJDFFFBB^Tl@bAd@t@~@xAJPLP^l@x@fAj@p@t@|@^b@Z\\?@dAdALLTTDF\\XZZ@?@@XV?@TRbAx@LHNL^VdBrAz@j@FD^Vr@f@@@~B`B|@n@nBvArBvAbAr@\\ThBpAFDJHDB@@BBnBtAtA`Av@j@~AnA|@p@\\V\\X|AfALHPJNLn@`@JH^Vv@j@d@ZfBlAHFNJ|AdATPZRfCfBnA|@lD`CtA~@z@l@r@b@pA~@z@l@j@d@\\VTNVPZRz@j@\\TTNb@^|AjAv@n@d@`@l@f@DBRRB@\\ZbBdBf@f@lAlARRx@x@\\^b@b@bAbANLj@h@f@h@NLNNf@h@LJRRz@z@DDRPDFVVFDJL@@HHPRX^Xb@RXPZHRHPN^N\\J^Nj@FZFXHl@Hj@Fh@Bf@@f@@d@?f@?b@Cj@?DARADC\\Eh@Il@E^If@Ib@AJA@E\\CN[hBEXGd@Ij@Ix@C`@C^ATAZ?BAN?FATAX?VAh@?p@?l@?r@BrD?|B?|@?N?`@Cp@Af@C`@AZAHG|@Gr@Kx@ALCNGf@Kh@SjAe@|BSdAe@`Ce@~B[~Ag@fCe@~Be@|BWtAKr@Mx@E`@Gl@Ep@AHAPA\\A\\C~@AjBAlBA|D?HGbKC|I?j@Ax@A~AArB?hAAl@Ad@Ad@CZCVEb@Eb@G`@Kd@I^Kb@M^M\\Qb@O\\?@Wb@OTOTQVe@j@[Zu@t@y@z@k@h@}@dAOREDQXEF[j@Q^Uj@O^?@K\\Mb@Mj@]|AYpAWnAQ~@Ot@WjAERSbAKj@AFa@zBG`@Kv@Ij@Il@Ij@s@bGCLUnB?BADEb@A@?@?D[`COrAAJG^AJE`@ADIr@It@ETGl@ADc@jDAFEb@AHY|BKfA?HIv@Ez@Cr@AVA`@?n@?x@BtADz@HxARdCFx@BX@XDf@BXBRBX@RTbDNnBDbA@D?F@`@Bl@?LBtA?@?bAAh@?ZATAz@Cx@ANEv@I`A]|EQjBKrAMzAWxCGn@y@hKqAfPEl@A?AXWzCE`@AJ[vDQ|BIx@APO|AGh@K`AAD?@Kr@ObAMt@Ov@K^Oj@W|@c@rAo@nBi@bBi@bBm@pBs@bCABu@`CM`@m@pBQh@Of@CHK^AJI^A@CPI`@CFAHG^G`@CVABEb@?BCVEn@ARAJ?FAHAJ?D?PAH?B?LCh@Ar@CpA?HARAZ?ZAP?ZEnBC|AEzA?@CjBA\\An@Cz@Aj@?NCrAGxA?HCf@AZEz@?JI~@?B?BAJC\\?BGn@AHCTEh@AJKz@ANE\\ADGh@CNEXIj@E\\ADAHSlACHEVMv@AHKj@AJERAJUvAG^Kj@Kj@SnAOz@If@EVCPc@fCMz@]lBE\\ERCNKj@ShAYfB?@Ih@CHCPO|@QbAWxAG^CJCPq@~DId@QjAKh@g@rCWzAE^]rB_@pBa@xB_@|Bc@nC_@xBETETKh@SrAMx@Kl@E\\CZE\\Cb@AZCx@A`A@r@@`@?HDn@Fv@Hn@Lt@Hd@FXHZNj@`@fAJT@@FNHLBFLTFLJPJNRXPV^b@LL`AhAXXLNBBX\\VXPT|@hABBRTRVbAjAVZ^b@Z\\RV|AhB|AnBr@`Az@jA`@j@BDRZV`@LRd@r@HL@@x@pAXb@`@r@~AjClBjDXd@T^l@fAVb@V`@Tb@dAjBVb@n@hABDNX~@`BDHBB~@~ABD@Bn@dAR^l@dAVb@Xf@hApBn@hANXl@dA\\r@LTXl@Rf@Pf@JVJb@H\\Lj@@FJb@DVDRHl@@FD\\@@B\\@ND\\?NDl@?JB`@?H@h@?h@?^C|@?BA\\Cf@CPALCXIr@ALCXG`@CNERKf@GZYtAYvAMh@]fBGZw@pDWpAADAFI\\Qv@G\\CLEN]bBCLMj@a@jBS`AIZQz@Sr@_@rA_@hAMZYn@k@rAYh@]p@U^y@rAk@t@QVi@p@w@|@c@f@c@b@aA`AcB~A{AxAUTCBs@t@WVEBg@h@MLQPe@h@WZA@s@~@GHQVY^OVGHYb@U`@ILMTi@bAADUd@Ub@CHOZKRIP[v@KT_@bAi@|A_@nAi@pBCLMj@CHKf@Ml@O|@CNKl@AHG`@AB?DQnACTCVAHCJCTAJC^Gf@Et@CXGz@?DAJA\\?BAJGrA?FAp@A`@A^?|@AvBAP?|@?h@?d@?H?r@Ap@?bB?^?|@AnE?l@?vCApA?HAnAAjA?R?J?JAj@CX?DABAXCRAHCXAHEb@ERCTIb@Ib@GZKb@EPIXK^KVM\\O^MV]r@A@Q^_@p@g@|@u@jAq@fAm@bAg@bAADS`@Qb@e@nAYbAQv@Mn@QhACLEVKbAEl@Ej@Ch@?DAd@?x@?t@@b@@h@DfABj@BZ@JJz@Db@Hf@Hl@d@~BFZH`@TrAP`AFb@Hh@Hl@@HD`@Fz@F`A@fA@r@Aj@At@Cp@E^AREf@In@EZCVIf@g@nCWxA]nBG^Kp@S`BE^APIdAKfBE|@?VA\\At@AN?~@?RHpEDz@HjBHjBNdD?BPrD@`@@VBf@?DDdADdA?@@j@?V?T?X?T?`AE~A?BARCl@CXIpAMjAC\\QlAIf@Q|@CJS|@Qr@Mf@Uv@Sh@CHWr@Qb@_@v@Uf@c@v@o@jAGJOTgAhBGJUb@]l@GJILa@r@y@vA[j@]p@ABGLO^Wn@[|@W|@Qt@CNI\\Q`AW`B[nBKp@ObAi@fDKj@Kr@EVy@bFQrAYlBe@bD]~BKr@Mx@EXO~@Kh@?@QdA?@If@Q|@?@g@|BQt@e@tBCHK^ADCFMf@[fAABSp@Sp@ABWx@EPUp@_@jAQj@EJSl@Wn@ELSd@Uj@O`@Sf@KXMVKTWj@e@dAk@jAk@nA[v@m@vAc@bAc@bAYn@KRYl@Yf@MT]j@]f@Y^WXA?ED}@z@k@f@KFc@\\uAdAs@l@q@t@m@x@MVy@tACFc@x@[j@{@rAqAvAONSNo@d@o@^e@Rq@Xu@X{Bv@m@Vg@Ne@PSHe@T_@P?@_@Py@d@w@h@w@l@QLMJOLYRy@n@yAfAg@`@c@\\e@\\u@h@sB|A{@p@A?GFQLC@WTGDA@e@ZWRa@T?@]P_@TQHOFaCbAWJC@C@A@A?e@P}@^i@Tg@Ri@Ty@Z_A^g@Ni@HA?UDi@D{B?[@YBg@FUDc@L[Ji@ZQLQLOPQNQTMR[h@GNIP[|@GPSh@Un@w@vBQd@s@nB[|@ELOb@IVIXITENCHGTEXGZE\\EZCZAZAf@?l@@^BZB^DZH^FXF\\Ph@LXHT@@Vl@Vj@b@x@BFXn@p@tAZl@j@lAZp@FLBFHRHTFTDVFZDXBL@J@\\B\\?Z?XAZ?BAVCV?BEZEXGZ?@GVQr@CHW`ASr@Qp@I`@EPGXGXCLALEVEZAZA\\AZ@X?N?L@L@L@VD\\BXDVF\\HXPr@Pp@Lf@DHPr@\\jATz@Nh@Pr@HXFXFZDVDZDZBZBXBZ@Z@Z@^?VAZ?\\A\\CXCXATGh@If@UhAQr@Qf@i@tA_@z@qBnE}@pB]v@ABc@~@Qb@Yn@O^MZIPSf@EHe@~AMf@CFOp@UhAKz@Gh@?BGb@K~AU|CG|@Ed@Gx@Cl@C`@C^AVAZ?T?d@@ZBZ?@BXBZDVFZFZHZHVJVJVLVLVBFFHPVLPJLBBLNLNLPTVPXRZHNBFNXHVFR@BHXFXDX?BDZBX@P?D@L?R@D?R?@A\\AXAVC^CXAFOtAGh@ALAJCLC\\Ev@AX?JAP?@?X?Z?X@Z@\\@\\Dv@@HRvC@J@RNjBFv@h@tGh@vGDt@JjADl@Fx@Dl@BXH`AFl@@PFv@@PLzA@LFj@?@B\\LzA@NL~AH~@F|@BZ@X@X?J@N@Z?Z?Z?XA\\?XC\\AXCXAHAPEXE\\ADCPEZGZEZI^ETGXKn@Ib@CJKl@SbAKp@EVE^EZCTAJCVC\\CZA^?b@?X?b@?N?L@L?LBd@H|@Db@F^F^FZNn@HZL^JZZ|@`@fAb@fA`@fABH\\z@j@~A`@bAn@`B`@fAh@tAFLrAhDd@lA^~@d@lAL^@BBHBFZbAL`@d@lBR`ANp@N~@V`BJl@@N?BBP@NDh@D`ABP?@@V@XBXF~@?D?\\@P?L@v@?rBCjAAj@Aj@EfECnCEhC?n@AHA|ACz@Cz@Ev@Ej@Il@Il@?@Kl@GXCLMh@?@On@g@`CADI^Ml@Ml@?DG`@EVCX?@E`@Gn@Cd@?J?BA\\?PA`@?J?h@?@?j@?PBxC?R?j@?j@D|D?H?LBn@Bf@Fp@DXD\\Jz@F\\BNDTJ|@Hx@Db@@PFbAHtB@VFbE?@@dCAb@Ar@EjBCXC`@El@KzAQ`BKp@SrAGb@Q`A[|Am@rCi@`CQz@[zAQ~@CHMj@k@pCSfAIx@Kz@Ih@QfBCZOrBStCWrDQxBMtACPCNIl@CLKp@Kl@Ot@Ox@a@rBMl@Kl@If@If@Mx@Gb@If@MdAIj@AJOlAMhAG^E^ETEVG\\G\\ET[rAU~@Ux@o@rBSn@IXIXSp@K^Qj@Qp@Qr@GXGXGXETG^SnAABQ`AAJUrAKt@Or@EZQt@Or@Qt@St@W`AY|@KZIRm@dBWl@O\\IPIRADYl@[n@Yj@Yh@A@i@z@c@r@QVa@j@MPm@v@m@t@_@d@[^e@j@m@x@_@f@MPMTMTYj@KTMZSn@Od@U`A[xAMn@Ol@Mj@EPWx@GTMXKRQ^[f@Yb@KJo@v@YXUTCBeAbAIF{@x@IHQNA@GHOLA@A@]\\a@`@QPA@ONMPOROROTKPMTKPMZA@KTIVIRABIXIXGXEPAFERADEXEXIr@C^Et@?P?JAZ?\\?X@ZBp@JnD@V@^@f@?Z?N?ZCb@AVATCZCZMx@ERG^Qt@GVA@IVM^Of@ENqCjI_B~EaAtCCHm@fBCFk@dBCJe@tAOb@EL]bAa@nAe@tAOb@Qh@EJUj@Wn@Yp@KTWn@Yn@Wl@O^Ud@KTWl@q@|Ae@bAKXYn@Wl@Q`@w@fBe@dAe@hAKTMXWl@KTIVM\\M\\Sp@Sn@EPIVSp@GXWjAIZMr@UrAM|@Ih@Ix@It@C\\CXCZG|@OjCG~AM~BKpBO|COpDI|AMbCIpBGrAEl@?JKlBE~@IhBGlAKtBGvACr@A\\CrA?\\?X?@?j@?L?X?ZDrA?PFxDBv@DlBBdA@b@BdBD|ALtFDrCBr@@v@?rA?h@Af@Ar@?JCb@Ez@Cd@Ep@Gx@MvAa@hEkAdMMtAInAKvAIvACp@Cv@AXEjACfBCv@?`@Cj@?`@Al@?@GnCGrDAl@An@ClA?PE|AE|CAZ?FCr@EpAGtAEp@Er@MrBIbACXKfAEb@Gr@YzCWzCIx@SlBATK|@ATIlAADIvAEdBGtBCj@C|DAl@?d@?f@?p@?z@@jAB~@?RFhB?@FxA?@BV@TBf@Bv@BTJpBD`AFbAFrAJvA?@JpAHx@Jx@Jt@DP?@Hd@Lp@Lp@Jb@?@DRLf@Nd@HX?Bb@tA^jAPf@BHVz@Nj@Nn@H\\Pt@Pz@Jp@Jt@Jt@PbBP~AFj@BNH|@PzAFr@NrANzAFl@NxA@HJdAPjB@BDb@@HNxAP~Av@pHFl@`@rDLnAHx@Hj@?HLhA@F@FBR?@?@@L@FBR@H@JVxBPxA?BNfAL~@T`BHd@RpAV|A@FF\\`@`CTtALt@h@dDX`BBLLr@RrANv@Nv@HZNr@Pt@Rr@Rp@Tr@Xx@Zt@Xp@Xl@f@`AVd@`@p@h@x@`@f@\\d@bAjAl@l@d@`@p@n@f@`@b@\\d@\\f@\\t@l@d@\\b@\\d@\\b@^b@\\d@\\d@^`@Zd@\\XT^Zb@\\b@\\`@\\NL`@\\b@`@`@^LNRT`@f@\\d@^h@Xf@LRPZVh@d@dAJXN\\b@rARr@b@xAh@hBv@hCHXPl@jA~DX|@^nA@BPl@DPRr@f@bB^nAn@vBRp@\\jARp@J\\Pj@Rp@Tv@|AhFRp@Rr@f@bBz@tCf@bBRp@HXf@bB\\jA\\hANf@Lb@p@|Bp@|B?@\\fARn@HXJXTt@Tn@Rj@Vp@Vl@Vn@Vl@Vl@Vl@Xn@Xr@HNN\\Th@@BTh@Vl@Xl@d@`AN\\Zh@j@~@V^FFZb@NPNPPPNNb@`@b@^XRJHPJHFZPf@Vf@Vd@Tf@T`@PD@h@Tf@Tf@Tj@VNFf@Rz@^f@TB@b@PTJPJf@Tf@Tj@Xd@V`@XPLRLLJFD^XTP@@\\ZPPPNb@b@RR\\\\PNNPTRRT^^bAbA^^HHHHPPx@v@VXBB\\\\d@`@^^LNTR`@`@@@p@p@`@`@PPJJDDPNPNRN`@\\TN@BLHXRZTRJRLPL@?PJRJRJf@RXL`@PD@b@PRFTFh@NRHh@NRFXFd@NXFPF@?TFf@Nh@Nd@LTFf@LZJb@JD@LDTFh@Ph@Nf@LTF`@L\\Hh@N@?zBl@XHx@Td@L`AXh@L\\JNFbBb@bAX|@Tj@NTFLBd@JF@d@HVFJ@HBXBLBhFf@hAJV@pALb@BnCT`@Dv@F|ANZBfAJb@Db@DjCT^BhDVhAH@@b@Bb@DhBN@?^BB?`@D@?T@J@@?\\BD?fAHL@L@D?@?tBNrDZtAJ`BNfAND@b@JRFhA\\|@`@x@d@b@XRPh@`@f@f@`BlBHJbArAfAvA~B~C`BtB|@nALNX`@X^^f@LJV^`@j@n@|@`@h@hA|A@@r@dAbAbBb@v@hArBz@zAdBjCNRl@z@j@t@fAvAv@bAV^f@x@Vb@Rb@\\v@Zt@Nd@Tt@ZnAVhAP|@VtA?@VlAZbB`BzI?@TzANtANfARjBFl@BPNnBb@zFFv@Ft@Ht@@BDZL|@?@Jh@Rz@Nn@@DLb@Tv@BDHXHTp@zAN\\|@rBTd@^x@NZ~AnDZp@z@lB@DP^@D^v@n@zAVr@Vp@XfAPr@Hb@BJD\\BLLdAHt@FbA?RBl@@d@?x@Av@Cx@Et@Gx@IrAIt@WfDCZu@tIKrAOlBGh@I`Aw@xJa@xE_@nEKzAALKhAI~@Ef@CXARGl@MzAGl@KrAAFMzACVOpBEh@KpAAJOhBKlAE`@OrBGt@CXE`@AXCZ?JEfAAz@?vA?D?r@@v@@f@?P@v@@x@?F@n@@v@?Z?F?R@x@@Z@nA@vABv@@x@?x@@R@n@?R@x@BlC@v@@rA@L@dBBvA@z@BrABz@Dv@Dx@Bp@Dl@@FBd@BTFx@NpB^jEPbCB^BZBZ@\\B\\@ZBh@?l@?X@^?X?@AZ?\\AZCx@Gv@IdAKz@Gt@KfAMhAI`AEr@Cf@Er@?NAdA?n@?B@x@DnABl@N~AFj@RvALv@PfAT|AN`Az@pFLr@D^R`BHl@Fz@Dl@FdBBfABpB?@BpABdB?@@bABdCLrJ@l@@`@?H?LBdABpB?X@x@H|E?H?LBj@?XDxADnA@`@@ZDx@DdA@h@@N@V@JBl@Bv@@V@VBb@LlD?J?D@B@b@?L@|@@d@?L?T?LCdAAPCZEt@Gr@Kx@If@ETEREVI^Qt@]jAUt@Md@AFITMb@Or@On@Kf@Kh@Mx@Gh@AFCREd@IdA?DCZ?BAP?NCv@?d@?r@?X?B@\\?@@`@?H@J@\\@ZB`@BXBZD`@DZ@J?F@@BXDTDZH^Lt@b@jBPz@BH@D@Bb@jBx@rDR|@T`A^bBT~@XhADVBHDTh@~BZrABNR`ALj@TdAHb@@FF^F`@Hh@@DJv@NfA@@Fj@Jr@b@~Ch@~D^rCDX@DTdBFf@DXHj@Dd@Jt@D\\BXDn@Fl@BT@\\@X@X@\\?\\?T?D?ZCn@?\\ANAJAVC^Gx@CVAFMlAOvAEVSlBOtAADQjBCXO~AAJC`@QjBOtBKrAKtAKtAMnBSnCKvACTATKxAOnBKxAIjA?BGt@Gx@Gz@Ir@Gr@E^Kp@UrAMp@Qt@GTGXIVIZELEJGTCDITa@dAy@vB_B~DO\\Qd@{@tBUj@eAnCeAhCc@hAiAtCIPc@dAu@jBM^iBrEc@dAYr@k@~A]dA_@jAe@bBSt@Oj@CHa@bBEPSv@UhASx@aAlEs@~CcBrHQv@i@bCQv@UhAI\\On@Q`ACJOr@E\\G^MhAGp@Eb@Ct@Ex@At@?bB@zBBrABbDDrD?p@DzDBrBBpCBdCBfCDrF@~@B~B@n@@l@BpCBrB@~ABnC@l@?T@L?J?l@BvA@~A@j@?D?J@`@BnD?D?D@^?FB`DBlB?L@LBbA@l@Bf@BZFt@Fl@Ff@Jr@D\\FXDVDRBHFZH\\Pl@Tp@Tn@JXVn@Zt@`@|@Td@?@Vj@h@lAx@hB|@pBFJZt@rAxChAfClExJ`DfH\\v@Xl@Zr@Vd@NZh@`Af@|@Zj@PVNT@BXb@h@x@DFT\\@BPTFHTZBBX^BBZb@RT^b@^b@NPr@x@z@`ApAvA@@VZ@@v@z@JLLLvA`BlAtArDbEbAhAt@x@n@r@x@v@`A~@j@h@v@v@pDfDpChCt@r@JJDDj@f@hAdAHH@@|AvAnBhBz@x@\\Z\\ZZZ`@`@HHTTRRPTJJh@p@h@`A^n@Zn@Vj@`@hARn@Rn@Hb@Pr@Hb@BLDZ@@Hn@Hv@JbA?HDn@B`A@f@@p@?vAApA?L?`A?rAAlB?D?n@?L?J?`@AlC?@?j@?JBpABv@B\\Dv@Fh@BLBRF`@DZFXHZHZV`ANd@p@`BN^\\z@r@fBFNZv@HRRd@N\\DJPd@Tj@N`@Nb@Rp@Lf@DLLj@Lp@F`@D`@TzBDp@?H@PBjA@^?@?J@lC?j@?h@?D?dC?D?f@?|A?l@?bB?f@?D?xGAf@?D?dC?bB?l@?f@?n@?vG?t@?tA?pC?n@?l@?n@?tA?D?jC?n@?l@?jC?vA?D?l@?n@?jC?tA?t@?f@?D?f@?F?tA?n@?l@?|A?r@?n@?f@?|A?r@?|A?f@?l@?F?zA?n@?l@?l@An@?f@?D?vA?D?l@?|A?l@?lC?f@?D?|A?jC?l@?vA?D?|A?xD?f@?D?h@?D?pG?D?l@?h@?F@nA?B@l@?@Dp@NdCD\\L`ALv@F\\DXLf@H`@J`@d@`Bd@vAVx@p@xB`@tARr@l@`CNn@H^F`@H`@Hj@Fb@F`@Fd@B`@Fl@FhADjA@hB?xA?HAb@AVATIvAC`@El@El@KzAIjAANA`@Cj@ANA`@Ad@ARExBCdD?tA?|A?l@?n@?f@?bB?nD?H?n@?V@fA?j@?Z@rAD~@Bl@Dd@BPBZNfAFZDVRz@Nf@BHBJZ`ATl@Xr@Xt@lC|GhApCd@lAj@`BVz@XlAF^Jn@DV@LDb@@DB\\Dt@Bf@@p@HtE@RBpCFvEBhANtHHnE?L@^DlAD`AB\\Bb@Fb@D^DZN~@BLFZDNFPFVLd@\\z@Vj@f@`AV^hA~AlAzA\\b@z@dAVZ~@lAhAxA|@fAl@v@j@l@ZZf@d@ZVd@\\TNVPb@Vh@X|B`AxB~@@?HDXJ|@d@h@^@@r@f@DFZX?@Z\\VZb@f@`@f@HHb@j@d@l@LPZ^X\\NRHJbAnAtBlCp@z@v@`AB@V^b@n@PVPZ@BVf@Zr@Zx@\\bAV|@XfA^`B`@bB`@bB\\xAPx@@DT|@DNHXDN^rARj@BJ\\bADL^~@DLXr@LXR`@l@lA@DZj@n@hAtAfCx@xAFHn@jA`@t@NZTd@LV@DN\\Xz@Rp@Lb@Nf@ZzADRd@hCd@dCR`AJ^FXL`@FTJZL^Xv@Rj@Xp@b@`A\\t@b@`AVh@Th@N\\Zr@Vr@h@vAh@dBh@rBPv@HZPx@RbAZfBBTTdBBPHf@TfBLjAHl@?@Dj@?@Fv@FnABn@@b@BrA@dABnD@nB@nA?@?h@?fA@pA@ZBz@Bx@B\\Bf@Dj@J`AJ~@PdBHn@VtBBPFl@PpAPxALfAFf@F^BZBTDVF\\DVH\\Lf@?BJ^Vx@Rh@Vl@JTTb@DJn@fAjArBn@hAt@vAPd@N`@Nd@Pl@DLDRH^H\\Hd@RpAHj@TtAVfBH^Nx@Nl@Pr@Ld@JVLZVn@h@`A|@~AlAtBz@zAf@z@T`@x@vAp@hAj@bAPZ@@b@v@d@x@NZFJLV?@NXRh@Rj@Nf@VdALt@Jp@@DDZDf@Db@Br@BZFtA?FBl@@N@Z?@@PD|ABl@Bl@FjAFjBFrADz@FjADr@LvAJv@Jr@F\\Lp@Nl@Ld@Lf@Z`AZz@Tl@d@rAdApCXv@lAbDfAvCBHL\\DHRj@LXZx@x@~Bh@vAPd@Pd@Xx@l@bBZz@f@tAj@|Ab@lAVp@Zx@Vp@Pf@h@rAVl@Vl@R`@Vj@`@z@R^LRd@~@\\l@p@fAh@z@`AxA`@j@X^NT|@jAj@p@f@p@bBvB|CzD`AtAf@x@Xh@^x@h@vA~@zChAvDTv@xAzEnAhEhAzDf@dBnC`JxAdFbAbD^hA^pAHT`@vANf@ZbA`@tANd@t@jCz@vCf@dBh@dBL`@Xz@Tn@Vr@Tf@N^Zp@P`@LTDJP\\Xf@x@tAn@`ATXX\\FFJLNNLNXXXVTR^XlA~@ZRXRB@`@Vz@b@VLRJz@\\`@L`AZf@JVHPD\\Hb@FPDVBh@FVBTBN@X@T@V@h@@f@@b@?d@Ah@Cl@Cb@CZCZEd@E\\EJAb@GtDc@zC[j@Gv@GXAb@AB?jAA|@Bd@BR@L@J@VBNB^F`@FTFf@Ll@Pb@Nf@R^N`@Rd@Tb@Xj@^RNj@d@NLp@l@v@z@|@nAl@|@Zh@PZXh@p@xAp@zArAxCTd@PXBH\\r@d@x@DFPXX`@HNLPNP^d@j@n@PPFHRPZVRP^XfAx@zDfCHFTLJH`CzALJHDf@\\dAr@DBFFjA|@b@\\v@p@\\\\n@t@b@h@d@l@d@p@PVLTFHLRLRHPT`@^p@b@v@n@jALRrAfCDH~@bB@BR^`@r@l@fA`@r@LPLTZd@DHRXDDRXDDNRPTRTFFVXVVBBVVPNf@d@@@ZV\\XBBXTd@`@d@^HHx@n@rAfA`@^d@^bAv@n@h@JHp@l@n@h@d@^@@vAjAj@f@`BlAZXj@b@d@`@b@^VTv@p@n@l@\\\\XXRRTV\\`@NNTX^d@RVZ\\X`@d@l@HJPXT\\HJ\\f@l@bAT`@T^BDVd@Zj@NVNXDJHLVh@LXx@fBv@hBlAjCj@pAlAlCVh@DJ|B`F?@lBdE\\t@JVJVJRJRLXJTLZNZR`@LZLVLVLVHNNZVf@PXLVLRJNNVNTLRNPPVRT\\`@^`@JJTTPPPLNLRPB@DBJJFDFDJFTNVNTNb@Tb@Rl@Vd@Ph@Rh@PfA\\z@XpA`@|Ad@pAb@ZJLDXJzAb@v@VPFf@Pt@R~@VTHj@NhAX^HnAZjAVnAVRDdFbAzBd@jAVhB^`@Hx@R?@`@JRFRFr@V^Nh@Th@T\\PnAt@d@`@FBf@\\d@^b@^d@b@`@`@XZVXPVb@f@f@t@NRJPNTLRLTZj@Zl@P`@DHVf@\\v@b@fAHRJTLVLZTj@Tj@Th@HTHRHZJZ@DPl@Pp@XlAXrATbAR~@^bBVhALb@FXJ^Pj@ZfA\\bA`@lAVp@Vl@Vp@b@bAVj@Xj@T`@Tb@Zj@R\\T^Zh@b@l@FL^f@h@t@PTRX^b@^b@LNHJVZd@d@^`@ZXXTPLLJJHLHZPTLXNRJVJTHVHRHLBJB@@\\FRDRDRBRBB?RBD?J@Z@T@\\?h@?x@Af@?Z?h@Ap@A|@Af@@f@?V@TBj@DVDf@HRDVFd@NZJl@Tr@^j@Zb@Xf@Zb@Xd@Zd@Z\\TXTRLd@\\t@n@d@`@LN^`@NPJNVZXb@\\h@\\h@h@~@h@`AHLFLV`@NTLRNRHJFJJNJLPTNNPRPPRPNNPLPN@?NLRLVPRJPL`@Rb@Tn@\\d@T@?\\PZNTJd@Vb@Tf@TB@f@V`@RTLZNr@\\l@Zv@`@p@Zt@`@HB@@|@b@\\PZLh@Xd@P\\LPFNF@?ZJf@Jb@HVDTB`@BXBP@`@@h@?~@?|@A~@Bj@@T@TBTBTD^FRD@?LDNBj@Rf@PVJBBZNRLTNRLRLRNRPNNHDVVTRp@n@DDVTvApA~@|@\\Z\\VFDTPb@Zb@XXNHDTLZN^PF@d@N`@L^H`@H\\DF@@?`@D`@Db@@l@@f@?NAD?XCB?d@Cj@Ij@IZId@Ml@Qb@QXMTIZOZSPKPKb@Yj@a@`@]\\WxAgAVSLK|@q@\\WvAiABAzAiAd@]z@q@d@_@h@_@`@[x@o@l@_@|@i@f@WXMVId@Qj@M`@K`@It@K^Ah@C\\AP@T?N?P@^B`@DZDf@H^HZHJDHBTFf@RZNDBHDPHLHXPRNTNHHZV^\\TTh@p@DDHHHLPTLRX^Vd@l@dAn@hA|@~AdAlBz@~Al@bA\\n@HPdAfBx@lAV\\X^^b@\\\\BBb@`@^\\d@\\b@Zx@d@h@Vf@Rf@Pn@PTF^Hd@Fb@Hf@Df@Bb@B`@?f@?\\Af@Cj@Eh@Gj@I`@GJCn@Mh@GnQsDrFkA`@IdAU|@Uh@Mn@MrBa@t@Or@Ot@MXEd@Ex@IF?\\A~ACb@@V?VBT@f@FXFd@JhAX`@Px@^t@d@v@j@j@f@z@`Ad@l@PVn@jA`@x@\\~@HTTr@Nh@?@R`AP~@?@D\\Hr@Fh@Dd@Bh@BZBv@DjA@^@t@@v@?V?b@?H?@?|@?n@?bA@z@?bA?bA@z@?B?f@?b@?b@?hA?n@?J@z@?h@?~@?tA@rA?V?F@nA@rA@x@Bz@Br@@V?BB^Bj@NdBLpA@FPpAPhA\\lBNp@VdAb@bBRr@Pr@Rt@Ph@?BJ`@Jf@H\\Lt@Hz@Hv@Bb@@PDlB?x@?RCvAK`DIdBAb@KhBG|@SnBKp@?FMl@Or@IZGXIVK^Qf@_@jAWp@Un@Un@Un@Wn@Qh@Yz@Yz@Sn@[jAUnAKv@G^KnACp@ATEpACx@Cv@C|@GnBEvAEhAAVA^KxAI|@CPSfASz@GVIZQd@CFUn@AFYt@]|@Yv@e@xACJg@rBCNERCPCTC\\I~@AHGz@KtACd@?@APCX?@Ej@GbAGx@AJEl@ATMtAIjAAD[nDEl@E\\ANGz@E\\Gn@CZKtAEn@Ep@Af@Ct@Ab@A^?nA?j@?H?\\?@?L?@@b@?FBh@Br@Bl@?BDn@@VLjB?BHhAv@jLBh@HhABf@@^?j@?h@?d@A`@?FAPCXAVCZEZGf@Kh@GZKd@On@AFIXCNUv@St@M`@IVQd@CJGLITQ\\[l@U^UZOPYZc@b@e@^QJKFUNsAt@o@ZoAn@eB|@y@b@{@b@o@Za@PCBQH{@d@y@b@e@XSJKFaB~@_@RSJIFA?}@h@c@TkAr@iAn@WLSL[RA@SLUNQLMFQNUPc@b@QPc@b@ABONUZIHEFEFCDKNOTS\\MT[l@OZIPO^CBM^yA|De@rAg@jA]r@a@z@_@h@[b@ED]\\UTa@\\wA~@yD`Ci@ZcCzAYP_@T_B`AQL{ChBaB`AsBjAYNkAl@oAn@gAj@ULWLMF[Ne@TWLe@Te@RSJ]LEBc@No@Rc@JOBWFo@Hc@B]D_@@U@U?C?G?W?]?e@CCAwBQ}ASUC}@Km@Io@IaAM{BYMAWCe@GcAMkAMcBSaDa@q@IqBW}@MUCeBUG?s@IKAIA_@E]Co@EE?GAS?OA[?MAa@?W?C?]BS?O@e@Dc@DC?A?[DC@YDE@M@[FQDOBSDYHQDA?YJKBOFSFMDGBGBi@TSJC?]PEBu@\\OHSH[NIDeAf@s@\\oB`AQHa@Rm@X_@PA@_@PQJo@ZSJq@Z[NmAj@oAn@MF[Ng@Vs@\\QHWLOHULUJi@V_Ad@q@ZEBi@VqAn@a@RULo@\\_@T_@VQLMH]ZQNa@^A@STKJe@d@aA|@oBpBMLA@[ZeAfAuAtAgAfAg@d@A@[\\MLm@l@u@t@IJm@j@EDgBfBCBk@l@e@b@CBq@l@q@p@oB|Ae@^KF[Rm@`@QLQLi@\\CBaAl@[Tk@b@g@^MJWTm@j@cAhA_@h@GH?@W`@KLMTk@dAUd@KZc@bASf@EL]|@g@nAm@tAS`@GLQXa@n@UZc@b@g@b@i@^YN_@Pe@R{@V_ARa@Hy@Na@FuA^g@N[J}@`@g@TaAl@_@VUP[XSRSP{@`Ai@n@i@p@eAvAmAbB_AlA]d@s@z@k@p@e@f@[ZQN[VQNe@Z{A`AaAl@yA|@{@l@WNe@\\UPe@\\k@j@[Z]\\m@n@q@z@m@r@aApAsBhC{@fAoAxAo@z@c@h@aAnAi@r@e@l@i@n@UXOPW\\IHMPEFY\\?@IJQRGJ_@h@c@h@aAlAi@p@wAxAi@f@MJURyAdAu@f@]PaBx@s@Xe@Lc@Lw@To@Ja@Fy@Fc@@O?QAQA]Ao@Iw@Sm@S}@a@_Ao@u@m@u@m@c@_@u@o@c@_@{@m@WMMIOIUI]OiA_@{A[mBc@i@K}@S}Bk@m@QiBi@a@MYI[K[Kg@OGCYKm@QMEcA][Ii@OAAgAW]IQCi@Gi@Cs@CQ?g@@Q@_@DOBk@Hk@Nq@TQHeAb@]V]TQNg@f@[\\Y^MPY`@ILS\\MRMVILi@fAg@bAUf@S\\Yl@OZWh@Yl@g@nAGLMVWn@Sh@[x@ITQj@M^Mb@Uv@Qx@IZGVCRG^G\\MfAIfAEj@Cj@Ah@ChA?|@@lAB|A@lA@~@@l@?B@r@BzAFpDDjC@dA@bA@t@@`@DlD?R@T?V@n@?N@v@?R?JAb@?XCd@Aj@Er@KpAGp@A?U~AKj@Ml@EPY`AIX?@[bA_@hAKZa@dA}@jCq@nBg@vAc@lA?@Sf@Yv@ENCF[r@m@tA_@r@Ub@CDMVKPQVW`@ABQTORg@r@SV[\\EF[ZIHQRURa@^o@h@c@\\GF]V{@l@gAt@oAz@GB{AdAMJu@f@}@l@e@ZkAt@{@f@k@Z}@b@w@^MDYNEBcBp@eA`@_@Le@P}@\\}@Zi@Rk@Rw@Z_AZ}@ZUJE@[LG@KDMDKDWJsAd@g@Pk@Pa@LG@[HKBw@PG@UDi@LKBA?KBUBa@HA?E@iB^}@RSDq@LA?E@YHA@_@Jc@La@JC@qA`@UJiBt@g@Pu@ZeA\\[Ja@N_@LgAXc@Ja@FMBo@JG@K?WBi@FqABw@?MA_@AaAGaBO_AK[EWCkAQyASuAOuBWoAQ_AMsAUcAQu@K_BYu@MGAc@KGA}A[o@Ku@OGA{@Oo@KKCOCE?UEc@EUCc@Cc@AY?O?k@BY@s@FcANu@NWHQFe@PSJk@Xa@V[Ri@b@GDSPQNIJIHKJA@OPUX]f@QVILU`@OZa@x@?@Qb@Qh@CDCJMb@IVABGTGXI\\Mr@YvAu@~DGXKj@Ml@WtAWrAABc@`CEREVCLGTSfAGVKb@Qn@?@IX[bAYx@Ul@Yp@g@`AYj@Yf@_@j@MTSXm@`AW`@IHAB[d@u@hAMRCBm@~@W`@OTGJU\\CBABg@x@]h@U\\ABW`@ILc@t@m@~@CFS\\CD_@l@s@nA]f@Yb@MRg@p@A?Y^u@z@i@l@a@b@_@`@STc@d@o@r@MNSTGFw@fAm@z@INS\\KNCF[l@Sb@IRSd@GNQd@Un@O`@Qj@Yx@]`ACBM\\ABSd@Qd@S`@MVOXMTWd@QXILEFQVA@ILYb@i@v@k@v@W^KNe@p@W^ILW^kAlBQ\\OVMVMZiA~CQf@_@bACHWt@IVADM\\Yz@?@GRCBENe@vAGPk@~Aq@tBABQd@Qh@iAhDABUr@k@~AUr@IVUp@Wv@Sl@ENa@hAIVOd@Qn@U~@K`@IZIf@I^Mt@EZEXKfAI~@ATAXC`@EbACpBCxA?R?DAf@CjBCrA?NGjF?r@Cv@YfWAr@GpHCpB?`@Ab@@l@?@?l@?@@l@?@?j@Bx@DdBBbA?@@@@h@@BBr@JfBDv@BRBf@Dd@@LNxAHv@Db@DZJv@@NZvBJx@ZzBHj@@BRxAZ`C@?NlABJ?BHf@?D\\`CL`Av@tFHd@Fj@RxATvAn@vEVdBHp@PhAJr@Jx@@DFf@F^L`ALdAJ|@BR?@JjALpAf@xFN`BLtArA~N^dEFv@JlANvAFt@Ft@LvAJbARvBR~BDf@Df@@NFj@NnBd@`F^~DBXBRRzBFx@LpANdBN`BHtADl@L|B@\\@R@ZD|A@X@h@?D@X?R@lA?|@?D@b@?^Af@?h@A\\?T?^Ct@?^AXATAl@GxAIdBGhAKzAMzAKhAYdCMhAKl@OhAQpAObACPM~@k@bEU~AKr@WlBoAdJ_@pCIf@m@jEiApIYrBQjA?B?@EZKn@[~B_BrLc@xCQrA]lCIz@UjCM|CALCl@AT?P?XAVArB?f@?f@@`ABvADdA@TBTBf@Bf@Bb@Dd@NbB@JB`@BJJz@Hn@Ff@VtADTPbANt@XpAb@~A`@tAf@|Av@vBJXNh@HPt@tBHVRj@~ApE|BpGZ|@\\~@@DP`@HTHPRd@Rd@P`@h@jABBTb@?@Tb@DHR^R`@dAtBpAlClBxDbFdKj@hAVj@FJTd@Zp@nAfCTb@Td@j@hAlDhH`AnBx@bBZn@`AnBR`@@BTb@Rb@@@~@lBTd@R^@BTd@LVFLh@fAj@jAj@fAJRT^T`@\\l@FLT\\Vd@FHt@dA`@j@RX`AtAPT\\d@t@`Af@p@T\\j@x@t@jAv@nA\\l@bB`Dh@dAh@dAHLl@hAj@`AZh@Xb@JPV^BD?@FF@B@@HLBDZ`@l@t@X^d@j@Z`@LL|ClDjBrBdDpDv@x@j@j@LL`@\\VVXVRRNJl@h@v@n@p@l@^ZLLn@l@LL^^Z`@JLX^JNHLPV^n@Rb@P^Th@Rh@Nb@HV@@L`@R~@^bBPx@Np@Pt@HXH\\BLLd@ZfAHVFXJZJXFTDLDNb@nARj@Tn@N^\\z@\\v@r@~A@B^t@\\t@FHNXFLR^DJDFHNBBJR@@FL@@HL@@@@\\j@BDb@r@b@p@JN@BV^JNV`@h@x@T\\V^?@JL@BV`@PZHLFJN\\JRP`@Pj@Pf@?@FZJd@Hb@Hn@@F?@Fb@R`BHt@N|@Hb@BRJd@JZHXH\\J\\HRRh@R^Tb@R\\TZX\\XZh@b@d@Xt@f@@?^TB@x@f@xA~@dDpB^R`Al@ZR\\RPLPJdAn@NJ^THFJFDB^ZTP?@b@`@DDLPTZNRLPBFP\\BFBDTj@DLHRHXDLJZFXBJ@JFXPvADv@DnB?D?\\E`AC^EVAPQjAOz@CHALg@xCsDtT[fBKh@GZCJOh@CHWx@a@|@Yh@Yf@q@x@ONYTIHs@b@i@Za@PODk@Pk@Lg@Hm@Bo@?c@AcACc@Am@AS?A?I?AAW?K@A?M?W@e@BQBK@WDA?E@C@YHi@NUHMFSJWNWPg@^a@^a@d@QR]h@AB]j@S^Un@Yx@K\\IZi@vBA?Mf@?@YdAQx@A?GZq@lCAHEPs@vCw@`DMh@W`ACJ]vAAF[lAKb@ADGTS|@?@AB]vAKb@Kf@U`AGTKf@I`@CLELOv@CNKh@Ib@G\\GXCPOz@Kp@Kn@?@Ih@?@Ij@Kx@Kt@KdAIj@ARKdAOdBIz@CTGx@Gv@KnBGjAItBErAIfCGjBATIjCEbAGnBIvBANEp@C^Eb@Eb@EZAJMt@QfAI\\K\\GXEJGTUp@IXIR[r@Sh@EHUh@Sb@?@MZi@lAUh@O`@Sd@Wp@i@nAKVk@vAYp@Qb@Wp@M\\GPIXK\\GRIZGVGXI\\Kf@Kl@QvASlC?@IxAEx@C^Ef@Gr@Ej@A?APEXIf@G\\G\\AFEPEPK`@K`@ITGPSj@Ul@EHUd@AB]j@c@n@W\\GHc@f@UX_@^UPe@`@URQNA?c@\\QN_@ZQNe@b@]\\WXA@OPa@j@A@[f@a@p@Yj@Yr@ITSh@Mb@I\\St@WjAQt@cCbNa@xB]nBQ|@o@hDY|AKj@Kj@CJEVEVERUpAo@nDMj@Mv@I^UlAAHKj@CFc@`Cq@|DaAlF]jB?BKf@Kj@Kj@Ox@Kh@WvAWvAWvAKj@YtAI^CJOj@EPGVIZ?@CHMb@St@Qn@Ur@Yz@Yz@a@nAIRITIRk@tAs@~ASh@i@dACHi@jAMVqBnE_ApB[p@GNGNUf@uA|Ce@bAYp@_@|@Uh@CFKXKTMZ_@hASl@Sl@CJY`A_@vAK`@g@xBe@jCK`@Gd@Gd@G`@Kx@SdBGb@MtAE`@El@ATG~@Cl@Cj@Et@?@?VEjAAh@Aj@ApA?H?X?r@@rA@fA@d@@l@Bj@B|@Bl@HrAL~ANbBNxAFh@Hn@RzAPdALx@BJHb@Nr@b@tBj@hCJ`@\\~Ah@~B|@~DR~@@BLj@Jh@P~@PdAFf@?BBNBZDp@Bd@Bn@@|@?b@?p@Cl@E~@Gx@Ix@G\\Kp@Mp@On@Mb@ABOf@Qf@?@cAfCqBtEm@tAMZ_@v@]x@_@~@o@xACDcA`CeB`EGPg@nAk@zA[dACHYfAYjAq@bDQlAE`@Mx@QbBEn@En@GfAG`BEx@?TAb@?T?^?t@?n@@pCB`C?d@B|B?~@BhCFdLDdFBnDBhEB|D?@@bC@n@AdA?~@Cl@ALAd@El@Gt@Gr@Gj@MbAQfASnASvAKl@Kp@_@~Bw@bFa@lCO`AO`AId@Ij@Kl@Kj@CPOt@Ov@K^K`@Yz@Qb@Yn@g@bAABm@|@o@z@ED[\\]`@YX{@~@e@f@u@x@_@b@k@p@g@r@[b@g@|@c@v@IPSb@O\\Wp@Qf@Wt@YbAQt@Op@GXG\\o@jD[dB]fB_@rBw@lEQ`As@zDs@xDWvAa@lBUhAQn@WdACLOj@Sp@EPCFm@rBwBhHM`@qAlEa@rAQf@Oh@Sl@Wx@Y`Aq@zBOd@a@tAADA@i@fBc@`BMd@?BOh@ITG\\I`@ENMv@EXG`@CTI|@AFIbAE`AAp@ArA?H?l@@L@dAB`@B`@@NFt@@TBXBRDb@Jt@Jp@Jz@DVRxA@NJz@@NDf@Dn@Bp@?LBv@@x@?J@`@A|@?b@AF?^GtAC\\Ed@Ej@EZGh@Gd@SnAQpAg@hDAFu@~EIj@e@bDmBlMa@nC]hCMlAGj@?@Gf@GdAGhAEzAAR?hA?D?h@BhA@b@@ZDl@Dl@Dl@b@tE`@dED`@LfBBVDz@Dr@@x@?d@?J?^Cv@Ct@IdACXE^Mt@?@G`@CHOr@GX?@Oh@Y~@eApCs@jBg@rAkAvCCJWp@o@~Ak@zAYr@Uj@y@tBUp@[t@{@vB[x@a@~@e@dA_AlBWd@[j@[h@m@~@i@x@_@h@c@j@k@t@MPQRIHWX]`@w@v@w@v@u@p@kA`Ag@^e@ZeAp@}@h@eAh@iAh@eAd@yAl@u@TSF[H[H]Ja@Ja@DkATkEbAg@Jc@Jm@NiB^wAZy@Pg@Ly@V[JgC~@aA^e@Rw@\\m@Va@PsG~C]Ni@Vk@TYLWLe@Ng@PODUD]H_ANo@Du@Bw@BK@M?Q@Y@}@BY?Q@o@@g@@q@@a@DUDWBg@Ji@La@NGBs@V_@Ra@REBa@V[RWTa@^c@d@ST[^Y^EFYb@Q\\Wd@[p@[v@ABGRIRIXUx@Mh@Mn@If@E\\Ij@I|@MtAKxAMbBCZAPCPUdDEl@G~@ShC[tC]lBOt@Qp@Ur@Sn@i@fAUd@CDi@z@_@h@WV[\\?@[Zo@f@c@Zi@\\{@d@y@\\c@Pc@PcA`@_Bp@C@mKlEA@{D|AiAd@]NoAh@}@\\A@}@^eAd@}Ap@OH}@d@mAx@e@^w@r@sAxAa@h@k@x@k@~@EFYj@}@nBQ`@q@`Be@lAk@vAuAlDwBrFO\\Sj@Uh@aChG}@xBo@~AQd@OZuAlDsBpFa@jASp@W`ASx@ADOx@EVEXKr@Iz@Gh@APKpACd@EhACdAAhAAnAE`ICjDCpCCtAG`AC\\Ef@?DERKv@Qv@Wz@]~@[n@OVINMPMNW\\_@\\e@`@q@d@SJKF]PIB_Ad@aBx@e@Vk@VOH_@PkCpAy@`@_@PqAl@QJaD~AGDu@\\}@d@g@XQHMHYNe@X}@p@e@^a@\\cAbAsA|A_@f@gA~AWb@KP[j@e@`A]x@Q\\c@lAs@zBCHK\\CJe@lBg@tCYzBQrBInAADAf@AHCn@Al@AX?H?D?h@A`@?V@`@?P@jA@JJ~B?JBV@HTdDBPP~B\\pETxCLvAJpAFhA?HDl@DbADrADdAFfBDtABxAFtABlAJxC@h@Br@Bv@Bn@Bj@?@DnA@JBt@Fr@LnAFh@@BFd@Ll@Nr@Rt@HXHTTp@@Dd@jAn@pAjAdCDJR`@v@~A\\t@@@l@pAf@bAf@fAp@tAj@lAZx@\\|@\\hAXbARz@Np@Rz@BNHf@RnAVdBHh@?BHh@Jn@f@nDXpBBRTxARjAZvA\\lADNTt@n@jBn@rAf@`AVb@^h@zAdC|AdCbBlCdC|DhCbEpDxFjAjBbAdBfAvBdAxBnAxCnAhD~BfGdAlCjBdFn@~AhBzEx@hBv@`Bj@fAvA`CrAhB|@fAr@x@l@j@~@~@dAdAZXh@h@|EzEvCrCnBpBlAhA~AxAz@x@fCdCtAtAbBdBfBdBbE~D`AbAz@`Ar@`Ah@v@^n@Zl@j@pAXp@f@vATr@h@nBhApE`ApDfClJjC~JhCzJDN\\jA`@nBH`@F\\T|ALjALjBD|@B|@BpACpBGlBOfC_@fFCZKxBCvABrBD~@Bt@V|BXvA^~Ab@rAr@dBl@fAdAxAHJ^f@fAbA~CzCRTh@l@^h@Zf@`@n@^v@BDf@jA`@jANh@T|@Pv@BPNx@PpAPrBz@lIVhCt@|HrC`ZD^vAlOB`@b@pE^zD\\dDXpCX~BTvAp@xDLv@`@bBl@fCt@pC^nA~@tCvAdErBlGtCtIvBrGlF~OfLh]Rh@fBhGH\\TfANt@p@xCp@bDVdAV~@V|@^lAj@`Bb@fAZv@n@pAf@`A^r@@Bl@bATb@JNJRTb@b@p@FJ\\j@LV`@l@j@bA^l@vAbCfDzFdDpFj@~@hBbD`@r@NTj@`AvEhI`A~Aj@bAdDtFXf@d@|@\\p@Pd@Xt@b@vANl@Rz@TrANhARnBBb@Bv@@p@@x@?x@?TARAf@Cl@Er@C`@Kx@Ix@WxBe@hEE`@WxBIv@?BI|@A\\AVCr@ANAj@?@?@?dA?V@f@?DBl@@BBh@Dl@Fl@Hl@?BHd@?@@FHf@Lf@Jj@Nf@DNZdA`@lAPj@dBjFRl@x@dC^pAXhABHTnARvALpANnB@v@@^?lBIxBIzAw@lIMrAq@hHu@dIi@xF]vDYzCIv@APC`@AJEn@Ev@G|@EzCAxA?bB?J@l@?LFzBBp@?@HzAZxDVdDj@tGj@nGRjBLnAD\\VrBBRPvAPxATdBn@zEP|AHl@RzALpAFv@H~@Br@Dj@FpA@pABzAExCM|CAL[tDw@~H_@nD?BMrAMlAMjA?DCXC`@GfA?FCf@A\\AhB@rAB~@Bt@Dx@BZBb@Fp@B`@NhATfB`@hDXnBNtAFr@Hv@Dt@BbA@f@Af@?p@Cp@A`@Ev@Gx@KfAEZIp@Ip@Iv@WrBOnAGn@Kx@Gv@Gt@K`BEn@KxACl@C`@Gx@El@?NKhAEn@ANE\\CXCRE^It@[fC?BWhB{ApKWjBOfAGXCRg@nDK`AMvAIzACv@?bA?B?`A@T?D@V@PDj@?@Dl@J|@?BFh@@DLbABNRxAHj@?BHh@?@Fh@@HJ~@@PDn@DbA@T@d@@j@?l@?L?\\Al@Az@GxAQdDAX?@Eh@WfFCd@GjAAXA@AZCz@Cz@Ab@AV?RATCdAAlA?|@?p@?^@vA@tA@^@h@?@?LF~B@j@BpA?HDdB@f@@l@FrCDnBFlCD`BB~ADrABxABzA@V@l@@^?HBlADtA@ZBtA@n@?DBx@@nA@z@@rA@tA?zA?l@?|@Ad@?r@AvA?NAtAAbACpAAnBAv@AR?Z?v@?x@?X?Z@f@@t@@\\@`@DbAD`ADv@Bv@F|@@N@X@LDz@H~AHlATpE^|GDz@RzDB^Dr@JdBLzBJzABl@Dl@JlBBXF`AHnABj@BTHdB@NDl@HhAFtAHdAF~@LvBBb@?FDp@@NLlC@XBt@DjA@`A@j@?^?F?^?@An@Ah@Ad@AVAT?HC^Cj@Gz@CPCXGp@?@In@Ir@G`@Mv@WrAQz@EPENMb@ERQt@ELK`@GR_@xAOh@Mf@iAlE]pAADK\\EPc@bBQn@CLADi@pBMd@CJAD]nAq@jCU|@i@rBGXGTKh@U`AUrACFU|AOdAOpACT?@CPEf@Iz@InAGfAE~@Ah@Cr@Al@Ap@Az@@v@?V?`@@v@?X@R?NBv@Dx@?HBj@Dp@B`@@HDh@?BDb@Ft@Hv@NhA@FBPDXBVHh@Jf@Hf@ThANv@XlAZhARp@Rt@X|@Tx@Tv@Pj@DNNd@?@Ph@FRFT`AdDFVVx@Nh@@@V|@f@dBX~@FR`AdDHTt@fCv@pC|@vCJ^BHHXVv@Pl@V|@DPHVv@lCBFDNbDxKFTlA`EV~@Lh@Rt@Nx@Ln@F\\FZHh@Fd@?BNdAFv@D^?@Dl@Bh@Dp@@`@@h@@\\@n@@~AB|DBfH?bA@H@xC@fD@rB@fFDzH?x@@nB@`B@lB?b@@f@?d@DvA@^@j@DjABf@Bd@F|@HdAJnAH~@L|@J~@RvAJl@PfAPz@Z~APx@Ll@TbATbATdAPt@XrAR~@Rz@Pv@VjAPv@XlAf@~BXlAPx@d@vBb@jBR~@Np@\\zAPz@h@bCBLLl@V`BT`BJfALnADn@Dj@DdAB`@Bn@?`@Bx@?t@?z@?z@Ar@Cz@Ct@Cx@Gz@Ev@It@Gt@K|@Ir@Il@In@K~@ObA[fC[fCEZy@xGKx@OtAQrAcAjIMz@K`AKx@Kt@OnAE`@G^Ip@c@hDAPEZ[dCe@vDK|@]hCWrBWzBYdCIr@KjAKnAKhAKrAInAGpAE~@EpAAFC|@C|@EjBAj@Cn@EbCCz@KjFGbDIdDWlLAl@C|AGjCIdECp@Ar@CbBAp@?r@?h@@V?T@`@@^@j@?DBl@Dr@Dj@Df@H`AFh@Hr@Hp@Lr@N~@Nt@Ll@Lh@Lp@Nn@Nv@`@lBFTNr@J`@h@jCf@~B?@`@nBDRf@`C^lBPdA@BL|@Jl@Hn@Hr@Hx@LtALdBf@|I?JBb@Dl@Bb@D`ADp@@NB\\Bl@Bd@B\\Dx@BXF`ADh@Fh@BZLbAJj@Lv@Pz@H\\Jd@@BJ^Nf@FTFRHPL`@Rd@Rh@P^Tb@@BTb@NXj@~@j@z@h@x@@BT\\X`@fAbB@?V`@`AvAHLl@`A@BV`@?@Xf@`@p@^p@Xj@Zj@Xl@r@vARb@Tf@FJLXRd@DHXp@Zv@Xr@JZN^BFNb@Pb@Nf@Tn@Vv@Ph@Pj@X~@\\jAT~@Vz@ZfAPn@Tv@Pn@Rr@Rr@Rt@Tr@\\dAp@tBZx@X|@Tp@Z|@Tn@@DTl@Vt@DPPf@Vr@`@jAZ~@Xx@^hAb@nAx@|BVv@HTRn@\\~@\\`ANd@Rh@^|@Zt@\\r@\\n@f@z@HJLR`@h@X^d@h@b@b@f@h@VRZV`@XDBNJZRBBVNRJB@JF^PJDHDRHVJh@R@?`@JLDd@LNDLBb@Hf@FXBd@D@@d@B\\@n@Bh@@dA@v@@\\@^BVBf@Hn@PNFTH`@T\\TTRTPPPRTX^Vb@PXNZJVTn@HTH\\FXBPDNJr@Db@Dh@@f@@`@?H?b@?B?f@Ah@Ah@Aj@Ap@?p@?F?b@?J?J@\\Bh@Bj@Dp@Df@Fx@?HF|@Fx@Fv@Fx@Dx@JpAF`AHpAFv@Hv@Jv@FZHb@Hd@Np@J^Jb@XfANl@Rx@VdADZF`@DVDd@Bh@?R?\\?TAL?`@E^AJE^G^GZK`@M`@Mf@Ur@?BOh@Oh@GZOz@Ej@Cp@?R?T?^@T@ZDf@DZDTDVDVHVL\\HVJVXj@NTRT\\`@XTZV|@d@dBt@h@X`@VRLXTzDnDt@p@`@ZjAn@p@Vj@Pf@Nh@Rh@X`@TXVTPLPTZLTLRR`@JXHVH\\@@Jd@BJDZVtBLhAJv@N|@Ll@`@zABHRn@Tn@Zp@^v@`@n@T\\`@r@`@p@NTd@dA^`ARp@Pj@Jb@Jb@Lh@Fd@Hb@Fd@D`@DZBXB\\Dt@@NBf@?^@p@@t@?dA?pA?D@j@?X@XBr@BXD^Hp@Jh@FVFTHZJVHXRf@FPHR\\t@b@|@j@nAl@jA\\p@v@tAj@bA@BNTd@v@pArB`AvANRp@`Al@v@p@|@|@rANRNVXf@FJLTNb@LVTj@n@rBLl@DJDNF\\H\\Hd@Hh@F`@DZD`@Fh@Fl@BVBTDl@BNLrAH`AHn@Hz@TdCHv@LnAHz@Jl@F^Jj@BJH\\?@FXPp@Rz@Lj@J^Nf@Px@J\\@DNf@JX@B@DDJLVLTHNDFNV@@LPLLPPZTZRRJTJb@N\\FVDTDl@FxBRt@Jr@JVFRFPFNFNHNHNJ\\XHFFHPPRRJNPVPZNZP`@^bANb@Nf@BF^lA\\fAT~@`@`BVlAh@hCJh@nAdGBLF\\DRH`@F`@BTDRDXBZD^JrALtADf@Fh@Ht@JbAHx@NhAHt@NdAPrA\\~BJp@Lv@Hd@?@BLD\\TrAJn@Jl@Lt@FZF\\Pn@Vx@L\\BBJVPZV`@V^PRNRTX`@h@|@`Ad@l@\\\\Z\\^b@^d@b@f@\\b@`AlAt@z@b@b@b@`@ZVn@d@b@Z`@\\ZT^Xl@h@n@j@`@b@`@d@^`@RVLPTVj@j@f@b@h@`@t@n@hBzAjBxA\\Xd@^b@`@LJXXBDXZ\\b@\\h@f@z@Tb@Xl@Vp@d@vAl@|BLj@Nh@H^r@fCNh@Nh@V`Af@bBPh@h@dBFRXx@LTxA~CNZTb@Td@Tb@Td@Tb@t@|Av@xA@B^lAPh@Tt@H\\b@pB@NRhCDl@BhC@ZGdEErCKnCCn@Ah@?`@@d@@`@@V@PBVDZHl@Jf@Jd@L^DLL`@Td@NVRZNTRZX\\HH`@ZFFFDFFJFHDJD@@FFJFLDNHdA\\ZFd@J`@H\\Fd@L`@JD@THNFTL\\T@@PLXXPPLPLPPV@@NXFNN\\JXNj@Rr@`@~ARr@Pp@Rn@Pd@JZR^Tf@Vb@Vd@Xb@PV\\`@d@f@v@r@d@\\b@Zf@Vh@Vl@Zb@Tf@VXRXTTTRTV\\PXXh@bAvBVh@@DZn@hAdCNZb@dAHVNd@Ld@FXF\\DTF`@BXBXBl@Dt@?`@?XE|AA\\Cf@EdBAVIxBAf@Cl@?LIrCKtDG|BI~AIhAAHKz@YnBWdBKt@Gh@Gf@Cj@C`@A`@?Z@\\@X@VB^HdA@PBZ@?Dn@R|BLjAB\\PlAH\\?@H^J^N`@LZJRFJFNJPHNRZTXHJJHJJLLRN?@^TNJRJJFLFLFTFTFTFXDl@FZBZBD?T@@?J?V@x@@b@@l@@n@@f@Bn@BF@f@Fb@Jj@NVH|@ZVHLDTRf@`@VXVXZh@R`@BDZx@Rl@X~@Tt@X|@L`@BFDNFPNd@Tv@@@Ld@Pf@Xz@`@`A`@r@pAlBl@~@`@j@\\d@VZHNDF@@^h@Zl@P\\\\|@BJVx@@FFX@D`@`B^bBRz@Pt@Pv@Nd@Rj@Ph@Th@Zj@R\\PZ`@l@Zh@@BX`@\\j@T\\\\j@LPHNRVZ^VXXZXX@@HH`@^b@^b@\\t@f@j@\\l@\\NH@?\\RdE`Ch@Xb@TTLXPr@f@VPTTRPPTTXJPV`@Xd@d@t@Zf@\\j@NRLPb@d@VVb@b@f@b@TPNPPTTTNRLRFJDHLZLTL\\JVHZNx@Hj@B\\@TBZ@`@?\\C^@NEh@ALC`@Kj@Qv@Md@?@Sh@MXOZOVILINMNORMLUVKJOLSNOL{@l@YVEBWRUPc@^c@`@YVY\\[`@ABORYd@OZ]p@Ut@GNIVEPENEPGVI`@CRCNCXEXEh@C^Cb@Cn@GrAEpAIpBKrBAZEv@Ch@Eh@C`@CTEb@Gd@In@In@g@zCEZUpA?BQ|@Qn@ERMh@YnACP?@ADADADEPU`AId@Kp@EVAVABC^?HC`@?JAJErBAJAl@?FC`A?PAh@@D?l@?B@pA@rA?N@h@?D?hAA`AAp@Ez@Ev@APC^EdAGlACV?DCXE`@E`@I^I^GRIXKXMXKVW`@QTKL_@\\IJWPa@XUP]Ta@TA@i@\\WNo@b@i@\\i@f@ST[^W^QZGLGJO^Sd@M\\Kb@IZKd@Id@ALCP?@CXAPEx@Ad@?X?B?d@?B@P?F@`@BR@VD^Hj@H`@BPFVPp@Rr@Nb@DLBFLb@Pb@Pf@Ph@HRLVJVT`@LTPXBBJLNPHL^^LH@@LJNH^VNHLHB@JDp@^`@RJFRH@@B@f@Tl@Xj@Xn@Zj@\\NJVPTN@@JH\\XFF`@^^\\BBHHHHRPl@j@XVLL^d@RVHLPXNVJTL\\LVJ\\J\\FXHZFZDVDZB\\Fl@?FBb@@t@AR@HARAZ?REj@C\\CTCTAFEPEXGXCNU`AQp@Qt@IZEPCHK^CHKb@Md@I\\Op@ADIXENADMh@Kd@I\\G\\G\\CTCLCTATADAX?BALCfA@t@@X@ZFp@B\\`@dCd@tB@FRfAL~@BPFh@Dn@B~@?X?r@A^ATA\\El@IbAGl@?BGh@CVCPOpAKt@Ip@ShBE^]~CSvB[zCQlBC^QnBGz@El@?DC^Cr@?BCl@Ab@?HCl@?ZA\\?v@?p@?z@@pA@T?HBr@Bx@B`@Br@BV@ZDh@?@@LFt@Dj@@PLpABXFv@?@Hv@Fv@Fn@j@rGTnCNxATtCRrBLnAF`@@BF`@DVNl@FN@HJXJVHRDHFLDJDJHRDFBD@BDHJNJRRXFJDDV\\TZFFDFPRNPPRNNHFFHHFVXVTRP@@HFPNPNNJPNRLPN@?NJTNNLRJXPXN^P?@^P@?^R`@P^PZND@r@Zf@TRJRHRJd@RFB`@Rj@Vx@\\\\NDBZLDBXLTJJFZNTJd@VRLRJ`@VBBRLDBZTB@p@h@d@^PPd@`@^^PPb@d@\\b@NPHJTXPV\\f@\\f@\\h@Xf@Zj@LTf@dAJTHPZt@Vj@JTVn@LXn@tAJT@BR`@P`@BFHPVj@LXLVHTJTHVHVH\\DTDT@FDZ@FBT@V@B@Z?Z@ZAZATI|AAH?LGbAMjACd@Iz@Eb@CNK~@Q`AOv@WdAQh@CFKZKVSf@KTMXA@?@INWf@A@OVGFGJABSVEFQTOP]d@CBk@p@c@f@EDGFCDOPGFiAvAkB`Cg@n@s@|@OTKL_@d@IJABWZABWZCFUVi@r@o@z@kAzAgArAA@ML_@b@IHQRIH_@`@wAvAkB`B_@Z]V]Vu@j@_BnAONc@`@g@f@Y\\_@f@a@l@[h@]p@[l@Yp@Ul@KXK\\IXKZGXIZIZGZGZGZEZEXEVE^I~@It@Er@IrAIpA?BGv@KjBItAMnBOlCMnBKnBQhCMdCAF?@CXKjBSfDSfDYzECb@CTKtBARGrAIjBCdBG`D?d@?v@AlADlG?p@@j@?z@Bv@NnE?FFtAJbC?D@NBlA@r@?f@?l@?@Af@Cd@Et@Ex@Gh@AHCZCZIx@OfBADMxAAFCXKlASzBEf@OzAKjASpBSzBGz@KtACv@A`A?r@?r@@\\D`ADj@Fr@BXFf@BL@L@D@JF^@@@FHl@RnAx@pF?@TtAVbBJp@F^NpABTFb@@VD\\@^@L?F@\\?F?n@?v@Ad@APA\\C`@Ep@Gr@C\\KtAIbACRAV?@SfCKzAEl@Ev@ErAC|@A\\An@Cx@?`@Ar@?pB?t@?b@?R?BBr@?J?Z@j@@B@t@Dv@@Z?@Bv@JjBBR@JB`@@PJhA?JLnAFj@Fh@?BDXPlAPjA?DLp@Lx@Nt@Lp@P|@Nn@DRH\\Nn@Rt@Rr@HZFRTt@BHNb@HXXz@DLVt@^fAZ|@Vx@Tr@Rr@Ld@HZBHPt@b@dCF\\\\fBVxAJf@VdBBPFn@D`ABz@Ar@A^AVAZCXAJANE\\EXAJABAHG\\IZGVQn@MZSl@O^Sh@c@jASf@?@Yv@c@fAa@fAa@dAa@dAeArCgApCWn@Uj@KTMTKTOVYf@QXMRORA@MN[`@STQPOPOPQPOPQPONKLUTEDk@n@i@f@[\\OP]`@]b@KL[f@W^[l@U`@S^Wj@Wl@[x@Od@q@~BUlAGXQfAWlB?DEXCXA?E`@If@AJ]rCYvBc@lDS`BIp@O|ACTQrBAROrBCd@GrAGrA?DC|AAPAjACzAA^EdCAdAC`AEp@Cv@Ep@CTGl@_@dCYlAOn@i@`Bq@bBm@hAGLg@v@QVu@|@q@p@OLq@j@IFgAt@uBpAaAp@u@n@MJw@`A]f@W`@]t@a@`AWr@u@vBUr@Uj@kAbDy@|BQh@Qf@]`Aw@xBWr@Qf@KVMZg@xAc@jA[|@M^CFc@pAMXELM`@Up@[hAQn@I^WfAOx@QhAGZIp@It@Ix@EZCf@Eh@Et@Cr@Cl@A`@?^AZ?t@?Z?Z@x@BxB@bA?H@l@?@BzA?R@X@n@@|@DzBDzC@dADrBBdBDlCBpA?T@b@DfBF`A@HBf@Dh@Fp@Hj@D^VdBF\\ZvATbA^jAL`@^dA`@~@\\v@t@rARZPZ^h@n@x@`@f@dApAf@h@l@t@j@x@Td@LTLXJTHVJX?@@?DRFP@DFZBH@HLr@DZBXD\\Dr@@v@@X?\\AH?PAZ?@AVCXC\\AHAPE\\EVCPA@?BGXAJEPIVGVIXoAfEm@rBSn@?@y@pCe@`B]lAYjA]bBADUfAMt@O|@CNMx@Ip@Kt@Ir@Iv@Gr@Gt@CZGz@Ep@Et@Ev@Ct@CpAAx@At@A^?T?Z?\\?Z?t@@x@@x@Br@Bv@Br@@ZFpABXB`@BXFz@JhABVH|@RdBNlA@DRdBTjBNrANlAVzBFb@NlABTFj@Fh@Lx@@JFd@RpAHd@@JVjA?@XlA@DNj@\\lAJXDPJXn@`BVj@FNFJRd@@@\\l@Vf@j@`Ah@|@j@`Af@z@@@V`@PXNVZf@\\l@Xd@v@rA\\h@h@|@h@~@DDh@|@t@nAv@tA@@Tf@Vh@Vl@LVb@nADLRn@Pp@H\\Pn@DRNx@RnAJt@Jv@Hr@BZHnADv@Bz@Bp@?X@^?nAAjBAhAAdA?\\AX?@AxA?T?XAx@AfA?b@AnAA|@?RA\\?L?h@Az@?\\AnAExEC`EAbAAj@AnBErD?P?XAl@ClEE|EArAAvA?p@ClC?TCpC?T?\\?t@?\\@T?`@@J?NB^@X@Z@ZBTDt@Dt@@J@VHlAHrAFnAB\\@XNhC@V?BDv@Bx@Bv@?r@?D@l@?@?BAv@Av@Cv@Ev@IjAE`@Gp@EXKt@Mx@Kj@ETCNYjAQp@Sp@_@dAKXmAvCo@tAYl@IPmDnHe@bAUh@[n@c@`Ac@fAWn@Up@ITUn@Sn@?@Ol@K^Op@Mn@Ml@Oz@Kj@ADEZMx@E\\Ir@Ix@Gv@C\\AREt@CZCv@Cx@Aj@?f@?z@Av@@n@@x@Bx@Br@@`@Bv@HhAD|@Dv@Dx@Ft@Dv@HpAHpADp@?BLpBHlAFfAJ~ADt@JrADx@HnADt@Dr@JvAF`ADp@Fx@Dp@Dt@Ft@Fv@Fr@Hz@Hr@Hr@PpAJt@L|@F`@Jf@Jp@TlANt@VlANp@Pr@HZFVZjAPn@HTV|@d@vAVv@j@xA^bAJTP\\\\v@R`@Vd@NXHPXh@Zj@\\h@h@z@^f@^f@Zb@`@d@PRNRPP^`@PPp@p@t@r@t@r@t@p@RR`@`@RPdAbANLfAbAfAbAdAbAPPr@p@NNb@`@b@`@p@p@r@t@n@t@TXV\\p@|@HLTXZh@@BV`@Zh@f@`AZl@Xl@Tf@LZb@fATl@Tp@HVTp@ZhARp@Np@HZNp@Nr@TnALt@Lr@Jt@Jv@Ht@Hr@D\\BZHt@Fr@NrAFt@PzA@JHz@Z`DNnALvA@FTxBLpABV\\dDBZZzCNxAV`CNzAZ~CHr@LrAHv@NrAVdCH`Ax@dIf@|E\\dD`@bEVdC?@VdC`@`ERlB\\dDD^TdC\\`DRnBn@rGj@tFZfDRlBRlBHt@Hv@LpA\\fDFp@RrBLnAXhCRpBLrAVbCVhCf@zEVfCVjCRlBRlBRtBRfBLpALnABXXnCRjBZfDV|B?@H|@`@|Df@|Ej@zFVfC\\dDLnA\\dDZdDb@~DFn@XnCZdDHt@Ht@Hx@Hv@b@bEZ~CNrAVhCVjC`@xDTzBLlAFj@H~@\\`D\\fDBXD`@?@PbBNtAPhB\\fDRlBJ~@BLLtAHx@LnAFx@JpAHtAFr@RhDDr@B\\@JFdADv@HrAHnAFz@HrADv@LnBJlBHrAHrAFv@HrADx@BXDv@Fx@Dv@HlAFnAHtAFx@FtAFpADrAFjB@\\@\\@v@BrABpA@x@@v@@vA@lB?x@ApBAlCAjBAz@Ar@Ax@EtAAx@Cx@GlBGlBMlCKvBIpAK`BCl@Cf@Ah@Ev@ARIlBC\\Ex@IlBEx@GpAKpBAHKzBWbFKpBEx@GrAGnAE|@MbCIvAInBCn@CVCd@A\\En@Ab@CZAZCXA\\Cl@Et@KvBC\\KtBGrAAf@ANCv@Ch@?HAl@A|A?h@?p@Bz@@z@Bv@Bb@Dj@BZB\\Bd@Hr@Hn@DZBTLz@H^Lp@Lt@J^FZ@DJb@Pn@J^Xx@t@tBp@~AhBdEZv@JTHPzChH~BtFx@nBhAnC~DnJ\\x@lCnGnAvCbFrLRd@vBfFrCvG|H`RfAfCn@~AbAnCFPd@zAl@nB`AtDDV^~Ap@nDH\\Hh@PfA@JHd@XrB\\hDRnCPpCFnADlALpE?fD?~F?~FAXAjFAvD?jA?lD?jCAjE?tCAlHAfEA|A?J?pAA~H@|C@tANnFJlBDx@HhAJ~A@@t@`Ij@`F\\`DRhBFj@NzAPdBPvADh@BJLpANxANxAXvD@VPjDHjC@pA@p@@zF?L?|@Al@?l@?|A?P?zAA\\ArJAjC?P?\\?vI@~ADtCDlA@TJvAPvBNjARrA`@vBb@pB@@Jd@bAxDHZ@?jApE@?ZjAvC~KxAlFbAtD\\rAlBdH\\tAZzAXpARnA^dCVzBNnBPvCDjBDtC?hCA\\GdCAb@Cr@YnE_AvMWrDWfDEp@G~@CZGv@Gz@KdBS|CGlACz@EhAAlA?DApA@`B@~AFnBJ~BNrB\\bDj@~DXfBv@~DdApFr@lDJh@DTR`ABNFZXtAJj@DNVtAH`@BFF\\DVtBnKDVj@vCd@`C`AfFd@~Bh@nCJf@t@|DH`@H`@@BJf@|@xEn@bDf@lCDZd@tCLx@PrAT~B@NLrAHlAHnAHxAFtAFfBD|ABfB?jA?\\?pCAnB?vEAvGC`O?l@AvG?l@AdI?|A?j@?@An@AbLAzGA`IAbG?|ACdT?n@?n@?J?l@AfICdZAzGGfe@?jCAxB?P?\\?zCA|A?`@?dE?d@?FA|A?jC?h@?B?j@AzG?j@?j@?vB?\\?t@AxE?bB?vBA`D?dA?n@?lEAdA?D?jAA`A?fD?F@dBBlB@b@B`@Bn@@RFz@HfAJr@Hp@X~A?Dh@dCHXlClKlClKxIh]HZHXHZbAzDpB`IpGxVpG`WzA|Fh@pB`AzD`@|ArAhF`AxDfCzJH^\\lAJb@Nn@HVnA`FTv@`@`Bl@~B?@z@dDLf@l@|B^vA\\tAFVJb@Nl@FRVfA^bBVhAz@~Dd@fCp@|DXjBHf@Jn@\\bCHn@Hj@PxAPzAPxAHr@d@jE\\fDTvB~AdOh@`FRhBPbBVjBZbCZvBBHVdBd@pCZ|AJj@Jj@|@xEDRd@dCLr@HZBPBPDNDXH`@pAxGz@pE|@zETnAH^BLZ`BF^BNHb@Ln@dErTbApFp@zDDTTdBF`@N~A@JDZBZ@VBZB^BVJnB@v@@X@Z@Z@fA?~A?v@Av@AZ?\\ErAKlBA\\G|@KjAKhAWpB]dCm@vDk@hD_@bC]rBk@nDYhBQlAIn@CTCPCRAFGr@EZGx@AVKrACv@Cn@EtA?`@Ah@?j@?X?^@hABrAB~@Dx@@R@N@VH`ABd@@D@PD\\BVD\\Hp@D`@DTDXBPJh@Jn@RbAJf@T|@H^b@xAZdA^bAVt@^z@Rd@BD^v@P^n@lAv@rAdAdB\\n@z@vAT`@d@t@bA~AdBvCh@~@Xd@PXJRXd@HLbAdBrAxBNVLP\\l@x@vAJNLRhB|ChBzCdAdBR\\^l@rBjDj@`ADFJPLTZh@JRNVJRLRJTLTNVJRLVLTXj@JTNZJPJVLTJVLTJTFN@@@BFLDHxA~CVh@hDvHlCfGNTFTHRXn@Vl@Xn@Xj@d@fAZp@HPzEpKRd@|MhZnHfPhB`EfDtHR^Th@|@nBJTJVVl@l@xABHHPHXJVJX\\dAPl@Nh@V|@Rz@Nt@DPDPX|ADTDVPpAD\\Fb@LjAB\\Fh@Fv@@PBXB`@HtBNjDb@~K@h@JnCBl@r@xQJdCF`BRdFLfDBb@NbEd@~LP|EBb@@b@n@nPFxABp@NrDZbIJnC?@FrABl@PfFVtG@L@f@VnGp@nQHdBFzABl@JtCDpA@D@f@J|BTtF?BNjEJnCDt@PlE@`@D~@H|AHpADb@Fr@D`@Hr@F`@BVDTDTLz@RbATdARt@Rr@L`@j@dBHVPb@L^FNd@lAHTLZ`@bAPf@`BdEpBdF\\|@n@`BrBjFbLvYlGfPRf@zF~NPd@Rf@t@pBTj@lA|C@BP`@Pf@jAxCb@`AVp@~@pBr@vA\\l@t@tAz@vAz@rAfBbCBBTXt@~@@@nAvAZ\\~A`BBBh@f@FDNPRNNLRPVRZTt@j@f@^p@b@BBh@Z`@VVNd@XtAr@z@d@r@ZbCfA`@P@?nB~@^PHDVLv@^~@f@XPLFn@b@@@~@n@tAhAp@l@b@`@\\^^^b@d@l@n@x@|@rAxArB~Bd@d@\\^h@n@fAnAv@z@fBnBpAxAX\\pAvAZ\\dDrDtBfCn@p@jApAxCbDd@f@PTz@|@hAlATXb@f@t@x@pFdGXZ`CnCtC`DhBpBbBjBhIbJTVdBnBJJbDrD`EpEZ\\bAhALL?@Z\\n@p@`@d@h@j@r@t@p@r@`AbAPNtApA@Bz@v@f@b@t@n@l@h@h@b@|@v@l@f@~ArAh@f@l@f@VV`@^\\XNNXXtAvA\\ZFHfBhB`AdAX\\pAzAFHFHHJl@t@nBhCNR`BzBBDHLNRt@fADDNTn@bAx@pAf@x@Rb@j@~@l@bA?@j@dAtBnDz@zAlAxBr@nAj@~@p@nAvAdCd@v@hB`DxAfCbAhBn@fAp@dAtAtBd@p@^h@`ApA~AlBrAzAd@f@|@~@LP~@z@l@h@RP`Ax@t@n@bAv@bAz@dAp@f@\\vA~@`C|Ah@^rBpAzA`ArA|@pA|@h@b@t@p@hAjAt@bA\\d@\\j@T^z@zAdAxBBHvFzLdCjFRb@xDlItBpErDbITd@fBzDxCrGbD`HXl@tCjG`AtB`@x@zDlI|C~GhE|KvAbENf@`@nAb@pAtAlE\\jAf@~At@~BJZb@nAp@jBDJ|@~Bv@fBBHn@bAv@tA`AzArAhBJLpAzAZZbAjAdAfAfAjA~AbBFFf@j@j@n@PRFHV\\r@`ARZR^f@|@Zn@BBj@xAVr@\\bAXdALd@Pn@f@zBjCxKLh@x@hDx@hDd@pBn@lC~BxJPn@tB~InBfItB|IzBlJz@hDb@xAf@`BLXTp@L\\b@hAv@lB\\n@P`@n@nAr@lA`@p@d@r@~@vApAdBtGjIzCtD|B|CXb@Z`@bC|DtA|B|@~AvB|D|@`Bp@hAlCxE|@`Bb@t@b@t@d@v@jFbJ|AjCFJ|AlCdAhB\\h@h@p@^d@bArAr@v@d@d@|@x@XTLHr@f@`@Tf@VHBb@Tb@PTHxBh@l@N|@LxALL?j@Dp@Dp@@T?L@fDBzLHdB@hFFT?jB@vHDlCBxBBjABbABp@Bz@F|@Lf@HJ@|@Vl@Pb@Nn@V`A`@t@d@j@^v@n@v@p@|@`Ad@j@j@x@f@t@Tb@NVFJZn@^|@\\`AXz@l@tBj@~BLn@@?Ln@^|AHZv@dD@Db@lBRx@Lj@Ld@Nn@H^`@`B^tAX|@Tv@@?@DN`@f@tAN^HPHTZr@hAfC@@LZDFTh@|@nBRd@d@dA|@nB?@~@pB?@Rb@h@jA^x@HR|@nBLZbAzBVf@z@lBNXVj@P\\FJXb@R^@@Zd@h@t@DFX\\XZLLVVTTXVXT~@r@hAp@b@Tp@\\j@Rl@Tr@R`B`@p@PfDt@pCp@nGxAlBb@fBb@lBb@nPxDdAXz@V|@\\JBp@ZrAt@t@h@d@\\b@^n@l@TVPT^b@|@jAdA`BrAvBh@|@lGbK|EvHNXb@p@b@p@V`@lDxF`BhCxBfDfBdCt@dAdCtClBnBdAbAtAjA|AjAvCrBhAn@lAp@l@\\hDzAzB|@t@XPH|@ZRHjAb@dA`@r@ZrBt@lBr@bA^`@N`@LxChAtCfAbA^bDlA`@N`@NXJhMvEzChAzDxArBv@jFnB|FxBb[hLhBr@bDjAlC`A|ChAx@Z|GdCjJlD|Al@hDvAXLzAp@~BfApBbAb@T~Ax@zAz@t@^pEjCdAr@nCfBxA`AfBpAlBtApA`AB@rAdAz@n@BB~@v@n@n@r@r@p@x@X`@\\d@JPVb@Vf@LR\\v@^x@HTJXXv@J`@ZjAPr@XzANz@d@zCHj@?DnBbN@Dl@bE@DHl@VbBb@|Cr@bFv@nFRzAJr@RlAVfBLt@RbANn@XhAPj@HZJXHTJZRd@Vn@b@|@Xh@Zh@T\\^h@@@\\d@^b@NP^`@n@l@`@Zt@j@b@Xb@VPJVLfAf@z@\\PFhCz@f@PzDnAXHtBp@~@Z~Af@nA`@RH~@X|Bt@jGnB|C`Az@XRH^J^LrAb@~@X|@ZrAb@TJh@Rd@Tf@VTNPJLHFDd@\\XVj@d@d@b@PNb@`@PPPRRT^^n@t@@@`@b@n@t@p@x@BBrFrGdBpBxA`B\\`@^`@f@`@t@h@TJ@@d@Rh@Ph@Nf@Jl@Fh@Dj@DdADdDPX@tG\\hAFbABz@?@?\\Ab@Cj@E^E^GBAd@Ij@OPGVId@OVK\\QZORMx@e@t@k@hAy@DCbAw@t@i@DClAq@|@e@p@Yt@YNGhA]b@Mj@Md@In@Mf@Gj@Gh@EbAGh@An@AvAATArAAdAEJ?HAXAf@Eh@Ej@IXCh@IREXGpAWlEy@lDs@`B[XGPAPCXCB?NAF?LAV?T@R?PBXBTBRDNDPBZJ^N^Nb@VRLZTZXPPNPLNHHFFNVFHHLVf@BDFNLVHTDJFNJXFTDT@BHZ@JBLF\\Fb@Fj@Fv@BV@Z@`@Bt@?v@?x@Ct@Al@Cf@C`@Er@?DAJALGp@Eb@Gj@?BMz@UfBCLOdACN?@ALIj@M|@QrAIr@Gn@AXAHA\\AXAVAb@?X?\\@\\?B?V@XB^@XBZBZBZJv@F^Lp@FZHXFTJ\\HVHTHXLXHRDFFRVf@NTJRRXNTNPNRJNTT\\^NN@@fB`BbA~@ZZdA~@d@`@d@`@NJTNPNPHVLRH?@RFZJJDHBJBb@H^FTBR@P@J@b@?XAR?TCXC@?TERCPE\\Kj@Q^QVMZSTQTQTSNMPSBEHIPSFKDGPUPYVg@Vm@LY\\gAH]FWF[F[F]Jo@D]F_@Hs@LmA?CHy@PgBBa@NqAHy@Js@D_@DUPu@H]FSHYPk@@CVs@p@_Bb@cAd@eAb@kAHYRm@ZoAVkA\\mBF[ToAb@eCToALu@Nq@Pu@Rq@Vo@LYXi@FKFKZe@NSPSNORSPQNKRQPKf@Yb@UFCPGXK^OVGhBg@bAWb@K`AYrA]l@MRCj@I^CTCt@@p@@d@BbAFvBJnCN`FTnAF|CLvADvAA~@?j@?fCAnB?vAAR?b@?fA?Z?dCAnDAbC?T?h@BB?@@V@RBd@HVFPDVFRFTJPHTHDBJFRLPJf@^PNPNNNPPPRNRNRLPNVXf@LVN\\BFN^Tp@^lAh@xB@DLj@Rv@d@fB?@J^FNJZHRLXJVDHJPHRNRV^V^\\`@`@d@x@z@HHvAvANNxAvAp@r@@@vArAx@t@NLlBvArCtBRPf@ZhAv@l@`@^Tb@ZRJLFFBTLRHTHPHTHRFTFn@NRFRBXDZD^DdCVxALd@FPDVDRDD@THD@NDFBHBPHf@TTNb@X\\Xf@h@Z\\NTNTR\\h@dAVt@BHPf@@DPp@Jt@LlABZBR@l@@x@?rAEbCAfAI~DAjAKtHA\\An@C`AAtAAt@@v@?BBx@B\\BXBZJx@Nr@FVHZJZNb@DJVl@NXLPDFV^?@PR@BFDFHRRFFVRPNb@XTLRJTJVJRHRDRFTFTDTDTBVBT@T@X@NA\\AJ?VAPCZEd@Ih@MXIh@QRGj@U\\MTIHCjBq@d@OVIDC^M^IJCZI^Gh@GNAHA@?RARAj@?b@@`C@bDBZ?b@@f@?Z@zABnB@V?nBB@?r@@J?x@Bj@Bd@FVFRDPDPFTJTJNFRLTNn@f@bAz@v@r@t@p@fA~@dA`ARTx@v@h@f@HJ^^p@v@d@j@bC|CDDRXPTFF@BNRDHHJj@z@R\\NXR\\|AtCd@fAXl@n@zA|@tBfBtE|AbEt@rBb@jAHPJRLVNVJRFH^j@^j@d@h@`@d@NNJJVVb@\\l@f@FFb@\\\\XjBtAVRPLVRn@f@PLRPl@b@\\Xj@b@t@l@f@`@XTXVRPl@h@j@h@n@d@p@p@\\^x@|@f@h@XX\\^PRRPNPTRLNLLNNPNHHHHPNVTTPRNLFRNLHJFd@XXNd@R`@RVHf@P\\Jf@LXFTHd@Fl@HXDd@Db@B`@Bb@Bh@Db@Bh@Bn@B`AFL@J@fBJ`Ib@jAFj@BB@|AHpBJbAFT@xBLB?bAJR@h@Db@Bx@HfAH|ALf@HF@f@JnAXRFFBf@Nv@XXLb@RXNr@d@`@Rl@b@~@p@JFn@h@l@l@dAlA^d@DHTZ\\d@j@z@Zj@`@r@Tb@`@~@P`@Tl@L^FLZhATn@HZN`AFTVhA^nBHd@Hb@DZF^Jl@Hd@Hl@Hf@DZF\\BRFVJn@N`AHd@BTFXDXF\\F^DVBNDRJb@Lb@HXJ\\Tj@Pb@Pb@R`@RZT\\RXV\\VZ`@^\\ZPNLH\\Vn@^^P`@P|@XPDPDD?VD`@FZB\\Df@@\\B`@@j@Db@@P@B?X@~@FR?R@b@@N@B?p@Dn@Bh@BP@L?R@N@f@D`@Bb@Fd@FVDTFB?D@\\H\\Jb@LPHhAf@ZLb@TVLd@ZXRZTJJZT^\\r@r@`@d@h@n@V`@bA|Ab@x@bCjEZl@NVNTXf@`@f@JPHJBBNPJJHHRRf@f@\\VVRh@\\f@VDBRJp@T\\L\\JZHh@Lt@Pn@Nh@Nb@Jb@NVHXJLFD@XN@?VNf@Xb@ZVTVV`@`@`CjCVVLLHFTPRLPLHFJFTJXJPFPDLBPBPBR@ZAP?RAd@EF?PCRE@?TGPGTKFAFEHELGHGLKFEBATONMTOBANMJIFIPKdA{@|@q@@AROVS^Yh@_@PIRMTIPKVKVITGRE`@Gd@CpBCf@B`ANRD`ARlAZtBl@zBp@d@L`@Nd@Rh@VTNPJ^XRPPP^d@NR^h@PZP^JPP`@NXHP@DBFj@nA^z@NZb@`ALXP^f@fATf@?@R`@BHP`@Pd@L^JZFRBLJ\\Jd@DVF\\Fd@B^DZ@R@T@d@?`@?\\?^A^C\\ALALAN?DCVE\\CPCJAJCNEVIb@I^CJEVETAFMp@EXEZGXEXGZE\\GZEXADERG\\Mr@YdBShAShAQdAKt@Mv@Iv@ALGj@?@G|@Ct@Al@Ax@?H?v@B|@@RBd@Dz@Df@@RBVFd@Hn@?DN|@Hd@Jb@\\xAXfA?@Lf@?@?@Nh@Pz@ZpAZvALj@HV@FVhAPx@b@pBJd@RjAZnB^lCD\\@FFh@Dn@D^LlA@R@NH|@FdAB`@BXFjABl@Bp@@p@B`ABz@@n@?j@@n@?j@?f@AbA?jAAh@Ap@Cr@EvAAb@Ev@AZEt@Gt@MbB?D?DAFKvAIr@Eh@OhAKv@]bC?@UvAMr@Mr@ENAHADGXCJMj@WhACHOp@Uz@s@tCyAxFk@~BOh@[lAADWbAc@pBMj@UvA_@zBOrACVQpBY|EInBIlBAd@StGGhBChDEzE?tA?nB@d@?R@\\@b@Bb@@V?@@TBd@Bd@Dj@BR@R@JDd@Hf@Dd@D\\Fd@Hh@BXF^Fb@Fd@D`@@JBRJt@Jz@Jn@D\\@J@HPrAJt@TlBTbBNjAFd@`@xCD^^pCD^tApKlAbJVrBJr@Fd@Fj@BR@DBR\\dCThBDZN`AFh@DVBJPpAPdANbARlAFd@Jh@L|@NbAV~AHd@PjADTPhAXfBBR@BLz@Lt@RpAHj@F^Lv@Nx@Jt@Lr@DZ@DBTLt@Fb@Jj@N~@NbATvADR?@XlBZhBLx@XhB^`C?@d@tCBN@FVbBF^DRDTJl@Ff@PbADV?BZrBBLNbAn@bEDRXjBJp@Lz@VzAHf@TzABLf@bDZjBdA`HN|@ZpBtAtIbAtGDV?@dA|HJp@PjAJj@r@pEl@bDXvAVbBF`@~@~FN`ATrAZpBb@rCb@pCTtAHb@Jr@Lz@N~@F^D\\Ff@Db@Hp@Fj@D^BZBZD\\BXBX@\\Fj@Bj@BV@V@^B`@@X@PB~@Bt@@ZBtABpA@hA@v@@f@?@@nABvA?v@@p@@b@@t@@x@BrA@vABrA@pADnBBbA?N@ZFlAB\\B^BZFp@Hr@Jv@@LHh@F`@X`BTdAHZFT^xATr@Tl@Nf@L\\`@dA^bA`AlCdArCf@rAvA|DJXPd@Xv@Zz@l@bBhA~CfAbDZ`APr@HXBJ@BVpAZ~ABLDTFZD^Hj@BVBXFd@Fv@Dl@Bn@Bj@D|@?J@j@?r@@bAAhA?\\Cr@Ev@Cl@Ef@?@El@Gl@Eh@u@zHIz@WhC[bD_@|DQpBIr@KjAa@hEa@~Di@rFIt@m@nGC\\}@bJMpAQjBCZIv@MlACZG|@Ej@C^GnAE|@ATCv@Cn@Ab@C|@AlAChB?lB?rA?pAAv@AlL?bCAfI?~E?jBAnA?x@Ar@Az@?TA~@Ct@Cr@Cr@AXE~@IjAInACZCZAPCREj@It@MnAIx@EZIj@SxAe@tCWhBg@|CE\\CLu@bF_@|B_AhGId@Mx@Gb@OfAGZCVG`@CVE^E^Gn@OhBKbAyB|Yi@fHA\\K|ACb@CZAXA^Ev@Ah@?BC|@Ar@AZ?^Ap@Ax@?b@?hA@r@?x@B~@BpA@p@Bx@@ZDv@TzDDr@HbAf@jFBT?@Fr@BXD\\Ht@Fr@Ht@Fv@Hr@?FHp@PjBPhBVpCJfAHl@B^LpAHt@Z`DFp@LtAN~Ad@`FFl@\\lD?DFl@d@`Fl@jGN~AFl@Fj@l@rGBXHt@LrARtB@THt@BXHv@Hr@Fx@LnADXB\\BZDZBZBZBZBXBZD`@@T@Z@X@\\@Z?\\?\\?h@Ah@ATAZC^C^CVCZEXE\\EVMv@Or@IXGVIXGLMb@MXIVKRCFINKTMTMROVMRMRA?OTIHEFOPQPONABOLIHURUR[T]Vm@b@mBnA{B|AmBtAUNQLOJQLc@XQLUPKFC@MHe@\\c@ZwAdAs@f@_An@o@b@IFg@\\_Ap@SLCBKHg@Z{@l@mA~@WRc@^a@`@OPOPMLORQV]h@Yd@KROZYn@Sh@Ob@K\\Uz@Mh@CJG\\GZEVEXGb@ARAFCPC\\AXCZAZAL?LAX?@AZAZ?b@AjAAvAAnCAl@?NCfD?F?L?HAlAA`C?JAXG`L?B?NAv@?v@Av@Ax@?t@A\\?\\Ar@?V?B?\\AZ?Z?ZAZ?Z?Z?\\AX?\\?^AT?\\Av@?rAAvAAv@?f@Al@?t@AvA?V?\\@~@?R@ZBd@@X@JB\\B`@D`@BVDVBTF^F\\P`AH^P~@Nt@Lp@VrADTF^DTDZF\\DZBVBT@DBXBZBZBXB^BX@ZBZ@X@\\@L?N@X?Z@Z?\\?\\?X?\\?Z?ZAX?Z?\\A\\?X?\\?XA\\?Z?ZAz@AnA?tAAtAArAAjA?d@?DAn@AzA?RAZ?l@Af@?DAbCAtA@t@@x@?Z@\\@Z@ZDv@Fv@Dp@H~@TjBRhBTlBTnBJjABXDj@Bd@D~@@^@X?\\@X@rA?x@?H?fA@rA?pB@jD?nB@tA?j@?dA@nE?R?pA@rC@hC?fD@xA?pA?L?x@?x@?@?`B?vA?jBAvA?`FAvF?l@?l@?bJ?fCAfL?d@A|J?nC?vEAhB?T?tFAvA?`B?N?jC?rA?zE?jA?J?TAbBAbL?l@?tEAjK?F?H?D?V?D?ZA\\?~@?tB?l@?^?`F?`A?d@?b@Av@?bE?tB?nBAzE?J?hGClU?pA?`DAnG?~C?R?X?R?XAjF@rBApD?`J?rA?hA@lABv@BxADhAF|AFfAFz@?FRlCXrCNpATdBHh@N~@Jv@`@xBb@rBNl@?@BLRt@p@lCZbA`@xArAtE|@~Cr@`CPn@Pl@p@|Bn@zBDLHZJ`@BFLh@Rr@Lh@FVJf@P|@Hb@Jp@Hn@JbABT@LB^@JFp@Dv@@b@@\\?B@D@b@?H@`A?jA?|@At@AH?BAj@A`@ATEj@G~@Gp@ATEb@M`AIh@E^EROx@G^GZQv@Qp@IX]jAQl@Wp@?@Wl@Ul@CDKRc@~@Ub@Wb@]j@i@x@c@l@a@f@[^QRMNyB~Ba@d@a@`@a@d@QPQPg@j@g@h@s@t@s@t@gAlAa@d@a@f@Y\\QVMNQVGHSZQV_@j@Yh@Wb@A@g@~@Yl@IPOZMVIRKVc@dAUp@_@dA_@hAOd@c@nAg@|AMb@g@~A_@hAuAdEs@xB_ArCQj@EJABIV_AdCo@~A{@rB}@pBkA~BA@MXg@~@k@bAw@rAS\\GHABiAfBk@z@QVIJo@|@oBfCoAzAa@d@q@r@KLKJQPYXa@b@CBC@k@j@wAnAw@p@g@b@a@\\e@\\}@n@k@b@KFQLGDmBpAi@`@u@l@a@^_@^SPGFY\\YZWZg@n@OTa@l@OTABYd@S^U`@ABMTCHQ\\EJUd@IRSd@O^i@pAc@bAQb@w@jB[t@oDvI}AvDYp@}@zBg@hAYt@Sd@g@lA_@|@q@`Bm@xAWl@ELsB`F_BxD_@~@gAjCuC`HeAjCkApCqA`DSd@[v@cC`GmAtCcAdCuDbJuD`JCF{JbVQ`@yApDmAvC{FhNa@dAi@nA_@|@c@fAq@`BOZ_@~@u@fBs@dBk@vAOZYr@Wl@c@dAi@rAiAnCGLu@jBe@fAO^k@tAaB|D{GjPGLmAxCsGxOKXs@jB_@bAKZk@bBe@zAWz@Ql@m@|Bm@dCQp@]`BS|@ETMn@Or@O|@CLQnAYdBa@tCG\\u@hFm@jECRo@lEWhBy@xF}@fGE`@Mv@u@nFqAdJO`As@fFyBlO]`CwAzJuAxJ}@pG_@fCWvBADIr@OpAKhAMfAI`AQnBI|@UrCMxAMdBGl@QzBMzA[`ESdCUlCYjDa@dFUxCg@pGIx@OjBSlCSbCI~@I~@It@WjCWbCKz@M`ASxA_@lCWbBO~@YdBKh@YzAY|ASfA]`BYnAQz@On@o@jC[hAEPe@bBi@nB[bAa@tAGPs@vBaArC_@dAeApCa@dAq@bB}@tBg@fAi@jAu@`BeAtBaClEsA`Cy@tAkBxCGH}@rAoAfBkBfCoA`BqAzAcCtCKLw@|@CD}AhBo@t@_@h@SXKN[f@GHWb@W`@CBS^q@lAi@jAO\\[n@_@bAEH[|@CF[~@Qn@q@bCAB[xA]`BSfAYxBKv@G`@KnAIbAC`@G|@EfAEl@Ah@A`@KjCAl@ErACv@Cr@?HARAPAZGpBEzAGpBUlHCl@GdBKnDQvFChAGfCA`@Gn@QdGAd@MfDCp@Ef@Ep@Gp@Gl@K|@ALCPUzAAHI`@G\\Kj@ERKb@GPQt@Ur@Wv@]bAWn@_@v@a@`Ac@v@i@~@]h@oAfBgDrEU\\kE|FaApAo@x@cB`CqD|EY^cAtAa@h@]b@Y^SXY`@c@h@U\\_@d@Y`@W\\i@t@[`@QVc@j@w@dAw@dAUZQT]d@q@z@{@jAu@`AY^MPq@~@uAjBcAtAiA|A_AlAg@r@]b@CF_@d@a@j@[b@]b@EF_@f@e@l@m@x@{@jAi@r@{@hAwBtCILqAfBqCtDuAhB_BvBw@dAEFQVUXoCvDaApAY^KL_BxBo@x@]d@aBzB_AnA{@hA_@f@]d@W\\sAhB]b@SXs@`AkA|AwAlBsAhBu@bAoAbBsAhBcArAKNMNm@z@o@x@{@jAGFq@`AkA|AaApAcArAq@`AoAbBiAzAs@`Ay@fA}@jAm@x@c@l@o@x@aApA{@lA}@lAu@`Ao@z@SXY^iAzA_@h@m@v@Y^QX}@hAORk@v@CBa@j@]d@_@f@a@j@k@t@o@z@{@lAa@f@]f@OPm@z@]d@_@f@QV[h@]f@i@`AUd@GJe@`A[r@IVWn@Sn@Ur@ADM`@Ux@a@`BKb@Mr@IZOt@I^Kj@Kh@Mj@ETGZADETERADOz@S`A?BENKd@Mp@?@WpAUlACJ[~AOv@Mn@IZAJEJEVSx@I`@ERGTGZQp@AFQn@Kb@ENAB[hA[hAADSr@IVOh@Od@K\\Qp@Ut@Uv@CFENIXCJOh@s@bC_@lA_@nA]lAQl@_@pAk@nB_A`DENa@tASt@_@nASt@GNOh@GR]jAIZIXUv@GRUt@CHOf@IZg@~AWx@KZM`@ELIZOh@CHI^A?Mh@Of@IXABOf@Oh@ELABGVK\\Ur@Oj@CHKZQn@KVK\\GTm@fBYv@GPKTWp@Yp@INO\\w@~A]l@[j@ABm@|@KNQXW\\A@W\\MR_@d@EFKLo@x@ABi@p@IHq@z@q@|@sA`BQTY^GFY^iAvAuAdBo@x@q@z@_@f@a@f@KLSX_@d@gAvAMPQVMR_@h@[f@A@MT]l@ABWh@OZQb@Sj@ABKXABOd@KZIXK^On@A@WrAGZMx@Ip@G`@E\\Gz@C^Ex@C\\Cv@Ax@?b@?\\?^?TB|@?H@RBd@HzAD`@Hv@D^?@Hj@@LF\\F`@Pz@Px@ZrATt@Rp@Ph@DP`@pAVz@^lABFPn@l@nB@DRl@Lb@HVj@fBJZl@pB^rA^pADNNh@HXPt@@DFXPv@HZPz@`@rBNz@FZBLJj@@DTtAn@vDF^v@nEl@lD`@zBZlBb@dCTrAJl@@F@H\\pB@FVxAVxAVxAF\\Hh@@@Hh@Jj@ZjBVxA\\lB@H^tBJn@Jl@\\rBBLRjAX|At@lE^vB^zBVtAf@|Cn@nD^xBTxAP`AF\\VzARrAVfBJl@L`ADZX`CDXPbBJ|@LpAVfC?@JxABRFt@Fv@Dx@HnA@DHjA?NDf@T`EDh@@RJhB@HFfAHrAFhA@FFrABT?BF`ADl@Bl@JzA@XNjCJpABX@\\BNBd@@FDl@?@Dj@Dd@JpAPjB?@Ht@Ht@DVHl@@JLt@Nx@Jn@@BFVDP?BPr@H\\Pp@Rl@Rp@FPN`@JXJVRf@Xl@NZVd@Zh@LT\\h@^h@\\d@^d@\\b@@?b@f@^`@LLRPVXXVhAdALLr@p@TR\\ZvArAv@r@LLr@p@dA`AFFZX@?tApA?@x@t@JHl@l@lAfANNTT\\XZZ|@x@PPFDXXp@r@TTl@p@TXX\\~@lAj@|@LTNTd@~@Zn@Vj@LX^`A?@JX^fAd@bBPr@Pt@TjANr@`@dCLt@RlAPfAJj@BP`@hCDXHf@Jj@TvAJj@XfBPfAPbABP?@TlA@H^zB`@dCZhBNt@XrANl@HXRv@Pl@HZJ\\HTDN@@Tr@Tl@JVJVDJ\\x@Zp@Xl@Xj@d@z@|@xAf@x@`@h@n@z@h@t@B@p@|@|@jA\\b@p@z@^f@FHd@l@LPX^FH|@nARXJNV`@BDRZHL\\h@h@~@f@`Af@|@JTZl@HRZp@P`@DHBDHRHP?@Xn@LZJRHPd@jA@?b@dAb@bARd@Xr@p@~AJV~@tBn@|ATf@t@dBl@xAbA~B|@tB@Dd@fAd@fArA|CXr@HPd@fAfAhCd@fAJTXp@?@DHRd@n@zAb@bAh@nAx@nB@@Rd@f@lARb@Rf@hAnCr@bBv@nBN\\HVFNd@pAPf@`@nAN^Nf@Nh@Nd@Pp@ZjABLLh@T`AXnADXLj@@FH^Nz@Jt@Jr@VdB?@Jv@D^Fl@Ff@Ht@LvAJxAN|B\\`Gd@zIDp@LfC@PDl@Bj@F|@PhDJpBB\\Bl@Dl@?HB`@JzABl@HzA?@Dx@Fv@@TB^Fz@@RHdABRTlCJ`ABXJ~@TbBJr@^|BDXBPZdBHh@DXJf@F\\Lj@Jp@Ll@Nv@TlAf@lCh@rC^rBb@xB`@lCPrABZDb@BVDn@@T@T@P@V@P@Z@\\@~@At@?VA~@Cn@Ez@Gv@C`@Gf@Gh@Gd@Gf@Kn@Or@Or@WjAUv@K^[fAs@`COh@a@tAOd@M`@AFiAzDI\\u@fCw@hCoBvGcAlDIXe@bBSr@[fAi@hBg@fBOd@c@xA{@xCa@vAUx@e@dB]rAa@dB_@bBMn@UlAQbAUrAQlAGb@QzAQ~AUtB[nDQfCOxCGjBIjCGhB?l@C|@?~@AbA?dD@d@BnC@fADvADlAB~@Bp@HlBJfBLzAHnAH|@JhALlALjAVxBVhBLz@Jn@Lz@RhA\\hB\\hBt@lD^jB`@lB`@nBNt@`@pBh@hCh@bC^lBh@jCp@bDLl@f@bCF\\Nt@Lp@FXPdAH`@Jv@Jr@F`@Hr@Jr@LnALpA?BLnAF`AHdABr@Bf@Bb@Dz@Bp@BjA@d@@p@?^@x@?vA?|HAzFAdE?`B@`B?~A@^@~BBxBDrCDlAF|AFjB@\\@^DdAJtBNrCHvARzD?@Bj@?@H`BBb@HbBFxADpAD`AFhBDpA@\\@hADvBBbC@vA@lB?l@?|A?bAAfBAx@?n@?^CpBAnB?RAl@?l@?n@@tA?f@BnADpAFnADp@B`@BT?FJz@D\\Fj@BPDXBPFX?FHb@Ll@Ln@Jb@J`@V`AL`@L`@HTXv@d@jADJd@dALXf@|@HNHNZf@`@l@X`@TZBBNR^`@DFTV^b@ZZBBXVZZTTb@`@bA~@PPRPbA~@ZZx@t@\\ZNNLJ\\Zf@d@NN\\Zp@l@FF^\\v@r@ZX^^`@\\b@`@NN`@^HFLLxDnD~@x@d@b@LJVVf@b@FFNN~@|@d@b@l@j@DB^\\l@j@b@`@BB`@\\PPLLPNRPr@p@JJ^\\tAnAl@h@v@t@rAlA^^\\XVV|@z@f@b@bA`Ad@`@tArAHHB@j@h@t@r@|@z@VVz@x@XZzAzATTLLVX^`@b@b@\\^FHd@d@j@p@p@t@f@h@LNdAlA^b@DDfArA\\`@DDr@z@v@`AV\\X^FFl@v@jBbCTXdDhEBDHJTZPTb@h@VZJNTXd@j@j@r@RTx@~@~BjCdAhAdBbBLNz@x@ZVZZLJNLZZFDXVd@`@`@\\`@\\p@h@f@`@LHd@^b@Zv@j@t@h@fAv@r@d@^TNJd@X~A`AlAr@pAt@\\Rz@f@LHB@rBjAh@Z`Aj@l@\\LHh@Zv@d@f@Vz@f@j@Zr@`@zIfFlLzGf@X`Aj@bAj@dEbC`JjF~D~B~KpGNH\\R~@h@bB~@RL^Rv@d@vAx@b@VRJ\\Rx@f@zAz@pAr@jDpBnAv@PJ@?fCxATLz@d@VP`Aj@`B`A\\RZPp@b@ZNNJz@f@t@f@jAt@lAv@^T`EnCrCrB~@n@z@p@pA`AjA`ApAbAbAv@rAhAbAz@z@t@bAz@jAbAdA`AhAdAJJJHVVZXv@v@x@t@\\\\p@n@p@r@nApAh@j@dAfA`BhBBBj@n@`@b@NP|AfBX\\d@j@vAdBVZZ^LPtBjCr@~@vAhBvBtC~@tAfBdC~CvEdA`Bt@jAtA|BjAnBb@t@xFrJNVl@`AT`@Vb@^n@RZV`@@@@BR^Xd@@?Vb@NXBBHNNV@@Zh@`@r@NTNXT\\?@V`@R^Zf@d@x@RZJP?@Xd@NVNVFJFJNVNT\\j@BF^l@v@rAZf@NVHNh@|@V`@z@xAn@fAd@v@x@tA^l@bBnC|BlDn@~@d@r@Xb@d@n@pAjBPTfBhCnD|Ep@~@dAtA^f@`@j@V^X^lA`BX^t@`An@~@X^PTjBhCZb@X^v@hAnBlCtDdF`CbDx@hAp@~@X^pCtDhCnDV^x@dArC|DjCnDlCtDhJlMbF|GDHPTt@bAnD~E@@FFbEzFX^`@h@TZ`BzB~@pAfCjDv@fAX`@vApBzB`DrC~DzE|GpG`JnC|D`B|Bj@v@X^DF~DxF~AzBz@lAFHBBdCnDnBtCTV|B`DlBpCbChD|@lA|@rA`BzBtBvCDHxBzCtDhFnDdFjBjCzB~CjBjCdDtElFtHfCpDfCvDbA~AfAdBjAlBdCbEjCpEl@dArA|B~BbErAvB|AdC`A|Az@pAjBrCzAtB~@rA|@nAjBlC^j@NRHL|CjEhDzElAbB|AxBdClD`@j@vCfEfDxEhA|AjEfG~BbDzAtBHNdAxA^h@jA`B~AzB\\f@X^`@j@xAtBnAdB`@j@xB~ChCpDtAlBlAbBhA`BbFdHdBbCT\\xCdE~BdDxCfEdDtEzChEr@`AdBbCpBrCNT`@j@HJLP^h@d@p@nAdBpBrC`B|BHL~B`D|BzCPTrDvEjAvAz@dADDv@|@JLpAvAb@f@v@z@VXBBv@x@JLh@j@f@h@j@j@lCnCNNHHbB`Bd@b@pAnADDtChCfC|BzBlBbElDtE~D^ZVT~@v@nD|C@@VTpBdB|ChCXTRPlEvDfB|AxAnAvBfB^\\tAhA\\ZtBfBpCbC@@rBfBtCbCf@b@PNvBhBlAdAHFz@t@lB`BtE~D\\V?@l@f@fA~@|ArA`@ZrD`DZV@?jEvDdEpDzClCb@`@~AzALJZZpApA@@ZZ@?pBpBZZFFl@l@|CfDpCbDZ\\jBvBZ\\?@`AjAf@l@X^t@~@VZ@BtBnCvAlBlCrD|AzBv@fA|@tAZd@zA|BZf@V`@?@b@p@Zh@j@~@x@rA`C`EpBlDlBnD|BnEl@fATb@`AlBDHrAdC`AlBl@fATb@|@`BnC|EVd@tBhDVb@n@dA\\l@PVn@bARZ^j@jAfBV^T\\zAxBf@p@X`@V\\?@p@~@|B~C@BZ^X^fAvApCjDrChDz@`AbDrDjApADF\\^bAjAJJhBrB\\`@X\\XX~AnBxBhC?@x@`A^f@pA`B|@lA@@|ArB|@nAnAbBj@v@t@dAJNt@fAx@nAn@bAX`@V`@T\\FL@@d@r@JNT\\Xf@JPz@tARZNV@BFJNTFLp@jA^n@bAdB~@bBHLFLNVDJz@|AFLBFBBLVx@|A@@FJBFhA|BFLTd@`@x@~AbDf@jA@DR^Zp@^v@Rd@`@|@FLJVDJ@@b@bABFx@jB@Fx@nB?@LZDJHPFNN^~@~B|A`E@BjA`D`@hAtAxDXt@JXfAxCFN?@LX`@dAHVfApCTl@JVFNjAvCh@lADLNZP`@nAtC@B`@|@r@|Ad@bAr@|AlAfCzA|ChAvBDJNV`AlBV`@Tb@\\n@~@dBj@`At@pANXrBlDrBhDhE`HbDbFlAjBZf@n@`A@@V`@X`@V`@d@p@Zf@dAzA|@tA\\f@`AtAvAtBh@t@r@`ALR`ArAx@hATZh@t@X`@fAxA`@j@z@hAlAbBbApAzApBHLX^X\\PTnBfC^f@~@jAb@h@t@~@XZ?@Z`@t@|@t@|@HJ~AnBZ\\DHRTt@z@DFn@t@TXh@n@^b@\\`@Z\\h@n@RTDB\\b@dAhA\\`@XZ@Bh@j@f@j@^b@r@v@t@x@VXh@l@^^`@b@j@n@hAlAZZ@@LLfAjAr@t@bAfAn@n@f@f@NPNNZ\\DDPPZZFDp@r@NP`AbATTd@h@h@j@`@b@t@x@\\^^b@v@|@^b@PRZ`@b@h@n@z@n@x@p@|@fBfCl@|@V^Xd@^j@PXPXJRDFFJn@bAd@v@p@lANVXh@z@~ADDP^f@|@f@dAl@nAZr@Td@h@hAh@lAJVP`@LZRb@Th@p@fBDJ^~@\\`Aj@~Al@bB^hAXx@b@vAt@dCZfA^rAPl@XdAh@vB\\vA^|APv@Pz@d@|B\\`BBNLt@Jh@P|@Lp@RnA^|BPlAHf@Hj@VjBTjBD^LhANlALlAJhAFj@Hx@PrBHrAHz@B\\Dr@HrADr@JjBDt@B\\D~@FdBFpABpADlA@b@?XBjABpABnA@rA@r@@tA?hCAzC?\\?z@ClBEhCCnBIbDEdACj@ElAKbCGhAGjACp@UjEGvAEp@MhCEz@GnAMhCIrAS`EIlBKlBKzBM`CKzBGlAO~CG`AQtDQfDGxACTGpAI~A[nGCp@UnEYzFCh@I~ACh@I`BOxCQtDI~AS`ESvD]pHOxCY`G[rGEz@C\\yBhd@s@|NKjBEx@GtAKlBO`DIjBEv@KhBMfCEdAEv@Ch@S`Ec@~IMnCKfBOhDMdCKlBC\\Cr@Cf@GbAQ`EW|EIhBWjFA@GxAS~DGpACn@IxACl@El@K|BIfBW`Fc@bJw@bPObD_AfRSdEUvE?HMlCIlASbEGjAg@~J[lHUhEWbFQjDWtF_AtRa@fIA\\IbBEv@Ev@C^GrAI~ACj@Cz@GbAEfAItBE~@MxDA\\IfCCx@ExBATEfBA~@Al@Cp@A|@CrBAXAdAApCChCAzC?bAA|B?`F?`E?pA?^?fC?pAA|A@|AA~A?vD?tC?\\?^?r@?bB?|F?dAAlC@jBAZ?tA?nB?`B?f@?D?Z?jA?lB?hC?P?Z?|A?lB?jCAhC?~D?`E?lB?|E?|E?vFAvC?L?L?vC?hC?D?Z?jL?rB?hCAdD@vF?T?l@AvC?xE?hD?fE?tG?l@AbQ?lE?~KAjL?lQ?zA?l@?l@?tG?tFAfD@nAApB?jB?lB?dD?lB?F?fB?hC?dD?fCA|E?R?pC?nB?fC?~E?hI?dDAzE@lB?b@?l@?x@AdD?|E?lB?X?zC?hB?zC?zC?lA?H?J?P?`A?|A?D?`A?dA?T?z@A`@?r@?fA?F?D?lA?lB?d@?hA?v@?nA?nB?tA?N?H?fC?hA?~@?f@?L?b@?fA?jB?hB?pA?b@?RAxD?pA@~CAfH?nD?lC?rB?lA?bF?pC?v@?tA?jE?~D?D?~C?dA?pB?\\?~@AbDAxA?VAl@?LAz@GjCKlCInBC^IrAAJO|BOpBMrAEf@Gj@QpBSrBa@bEi@zFYjCQlBO|AQhBWlCQnBe@|Eo@zGSjB_@bEoArMe@dFm@fGo@dH{AzOcAlKaCrVEj@a@bEeGho@KnAKz@_@bEo@vG_@fEY|CSzCW`EOpCIlBKpCCjAClAGfC?PAPC~DCvC?^AtA?bAC~BE~AAlA?DGdCElACd@Ab@ItBCd@?JE|@En@KpBG`AOzBKjAIdAOxAQpBKdAIt@Q~AMz@Gd@UfBOdAEZ[zBs@hEKl@YxAy@fEs@bDaA`Ek@vBSx@KXi@jBg@dBc@vAc@pAK\\q@rBABSf@]`Ag@rAWn@Qd@c@fAi@rAQb@_ArBo@tAeAxBo@nAMTaAlBOXU`@y@zAkAnBQXcBnCq@dAIPg@x@u@pA_@p@S^Sb@c@z@a@`AYn@_@bA_@dAWx@_@nAMf@a@|AQx@SbAMt@EXCLOz@QrASrBGh@ANG`AG|@Er@A\\EhAATChB?l@?l@@vA?BBfBBt@?TBX?RDj@D|@JtAVjCLjA?@Fh@Hh@?Bd@pDj@jETdBp@|E@Fn@xEBVNdARrAf@xD`@zCNdAFl@Hj@BPF^Hn@T~APrAVfBTjB`@tCtAbKd@tDfAdIDXrAvJxA|KHh@Fj@T|Av@dGHj@NhAJn@Fh@RvAPxAPhARbB@??@PvAHj@RxAz@hGNnALbARrAR|AZ`Cp@|ERvALdAj@dERvAL~@\\fCFd@dBhMPpAp@~EVrBlBxNpBdONhA`Grc@jFn`@PtA\\bCjAxIxE|]Hj@`B|LzA~Kb@hDbApHhDbW^tCbArHPhADZ^tCZlCR`BJbAZ|C?FXlDDn@NpBHhADb@z@hL^xEVfD@HJnAHnA^tELbBL|AP|BFv@B`@`@fFLhBBV@DDl@B^RfCPhCD\\RvCPrBDn@@@T~CLfBB\\Dl@\\`E`@~Eh@~EFb@\\bC`@`CX~A^hBFXH\\Jb@j@~B^~Ab@hBDPrAtFz@nD~@zDbBhHVbAf@tBLh@Lh@Nh@XjAjA`Fp@lC~@|D?@Nh@BLHZLl@XpALn@~@`F~@tF`@jCT`BPvANhAJ|@DZJ|@NrAL`BFj@`@xEHt@f@nGLzADj@BZH~@lAlN?BDl@b@fFD`@`@`FTnCbAdMX`DH`ARdCTfCDn@Fj@LxADl@Fj@ZtD@TBVvAxPh@|GFr@Dj@Fn@n@zHLzATdCHbABTLzA`@`F?@Fj@JxArA`PN`BBd@ThCh@lG|@vKh@nGRhCZrDxAlQTfCRfCDl@Fj@v@jJt@hJjAnNfArMNbBTfCB\\RdC@BNzB`@tER~BdAbMHjArA`PFj@Dl@JbAv@tJr@tId@tF~@dLFr@t@rIZxD?JFj@b@fFDf@v@jJv@rJn@rHDl@TfCTdC^rD`@|EN~AHz@pAtOXtDl@`H\\jEFx@RfC@RDf@JxAFnALtCHrBB~@DbAHfBHnEBjC@~A@zAClG@`@CvBCj@IhFA^C~@EpAG~Ac@tLOnDMjDKtCQlEKrCSxFOdEIfBKzCMtDC^GjBAVGxAGhBUhGQbECt@GpAIjBKlBGtAIpAQbDSpCSvCKxAMtAGv@OhB]fEIp@MvASlBMlAKfACNMpAOlAGj@MdAUlB_@rCM`Ae@xD]nC[`Cg@`EOjA[bCOlAUfBcAbIKz@MbAIl@E\\Gh@EXQfBGn@Gh@Gf@I`AOhBABEh@K|AYdEObD?DCf@IrAAl@Cp@GrBGlBErBC|BAxAApBAtA@rB?D?l@?z@?hC@tA?jC?jC?v@@hA?P?dB?z@?|@A`BAjA?b@Cn@An@EfAEfAGrAGt@Er@OhBKrAOvAUjBMbAO`AKl@G`@Oz@]hBGZKb@_@`BYfAYhAOd@W|@M`@e@|Ak@~Ak@xAi@rAmDnI]v@_BvDe@fAeBfEcBlEo@fB}AtEo@vB_@nAkAdEW`Ag@tBYlAU~@U`AUfAEPMn@CJQ~@]dB]fBk@~CY~AQ|@w@tDOr@y@zCc@xAk@fBa@jAc@hAGRq@`Bg@hA_@v@y@`Be@|@y@tAi@|@Yd@QXk@z@o@z@iAxAu@~@a@f@o@v@_AhAq@x@mAzAeAnAyBnCwBlCqBfCk@v@k@t@?@e@n@}AvBeDxEu@hAuArBaAzAkAlB_AzAWb@gAhBy@tAcAfBA@s@rAq@lA[j@o@lAq@nAS\\MXYh@MVoAbCcArB}@jB]v@_@v@IN_@x@i@lAa@z@Sb@Q^mArCIPaAtBSb@S`@?@Yl@_AlBs@vAINi@fAaAnBq@pAQX[l@w@xAm@fAU`@EHa@r@o@fAi@~@k@`Aq@hA{@tA]l@k@~@wAzBa@n@k@z@{@rA]d@kAfBq@bA[d@MPaA|Aq@fAw@xAk@hAo@pAu@bBQb@gAnCSh@Od@e@xAa@tASr@[dAI^Qn@[rAKd@Q~@]jBEREVMl@UtAERQbAu@lEG^[~Ao@bDEVIZ]bBWjAI\\Qt@[pAYfA[lAe@dB]jAIXe@zA?@q@~B}@tCUv@w@jCi@lBGRCLk@rBw@hDk@fCe@zBWhACNIb@Q`AUlASlAWvA_@`C[zBGb@_@fCUdBAFGd@I`@e@jD_@jCAFCPOdAEZc@tCCTObAM|@CPM~@Kt@EVIj@CLe@dDG`@CVGZIn@e@~CMx@Gb@AHQfA]vBUpAEVUtAc@dCOt@{@tEUjAUjAWnAS~@Mn@e@|Ba@hBS~@Kf@YtAg@~Bg@dC}AxHwAbHu@rDQ|@i@pCIb@[|A]fBQ|@EXSlAUtAUvAYtBCHKt@Ip@YzBg@lE[`DE^ANANE\\UzCEl@KzAW~DO|CARIpBG`BE`BKxEAb@?BA^CzAClD?tC?@A~@@hC?V?PB`B@vA@p@DjC@NF~B?JDfAXfHDt@JbBDr@Bf@HpAPtBH~@Db@Dr@N~AJ`AJlABVFf@Jz@@HPzARxA?DDVNjA^`DLv@H|@RfBL|AB`@@JJxADr@BVBb@?H@N@XF|A@n@@N?^Bl@@l@?D?f@@X?jC?`A?TCjCOxICpBG`DCzAGxDGvDAvACjBAl@Al@CpA?HAl@Al@Al@Al@EnBCnACt@Cv@CZANCh@CZ?DCRGx@It@It@Mx@Mt@Kn@Qx@ERSx@?B[jASn@K\\]`AKVO^OZSd@_@r@INKR[j@g@z@OTKLGHQTILw@~@q@r@uApAe@^WTeAr@e@Z_Al@C@_@T}A~@cBbAMHmC~A{@h@}EvCC@qFfDUNa@Xa@VMJg@`@]XeAz@u@p@k@h@m@j@w@v@uA|AcAlAqAdBm@z@k@z@MPQXEFU^_@l@[j@e@|@i@dA[n@e@`AYn@q@bBmAbDYv@[dA_@pASp@Sv@_@zASx@S`AERI^Ot@[hBSlAQnAGf@[jCGd@?DGl@QpBMzBGbAAJK~BElBCz@A|AApB?fA@bBBxA@l@Bz@HzBFlAHrAHhALzAN|Ad@nEVvBLdALlAbCfTnAjL`@pDz@xHPxANxALfAj@~Ef@lE|@hIFb@LnA`@nDFd@J~@j@bFpAdLrAvLZtCnA`L\\tC`A`J`ChT~@jIlArK`@`Dj@pEt@lF^lCf@~Cb@pCpAtHb@dChA`Gn@|CjBrIbAfEz@rDfAlE\\xAbC|Jl@bCpDhOfApE|BnJBFxBfJzB`Jt@zCBJNj@Lh@ZrAFVb@fBFTj@~BDP~AtGLf@p@rCfAjEPp@d@hBT|@jApE@D|A|FvBbIV~@^rAzAxFlAnEJb@BD|@fD\\rAvF|SNd@p@jCbBjG|BpIfIpZ`EjObDzLbBjGtB|HnDzMrA`FrCjK@BjEbPLb@nAzErBxHrErPh@nBvBfInAvExBfI~@jDlEhPdBpG~@`DfCpJhCzIbBzF~@tChAjD@@`@lAp@rBjAbDBDb@nA`@fAPd@f@nA`@dAnA|C`B~Dj@pARf@HPr@|ApAvCbCjFtCfGbCjFdA|B|@pBP^~@pBVh@Tb@Zp@vBrEf@jATd@d@dAzArD\\x@f@rAFLj@|A~@lCPj@Pf@HXRl@p@vBDJNf@h@nBb@~ANh@l@|B\\rAZtAj@|Bh@~B\\rA@DfAjEr@lCh@jBPh@Tz@h@fBVv@n@jBVt@j@bBVr@`A~BhBvEVj@rC~GdD`IRd@xAlDrAdDhAlCn@xA\\~@Rf@Rd@Pf@BFr@lB`@hA@DTp@^dAL`@FTb@rAfB~FNh@DJ~@~C`C`ItB|GBJ\\dALb@h@~AJ\\Pf@?Bj@|Ap@jBjAzCXp@j@xAf@jAXn@Rd@@Bf@fAlBdEbBrDRb@~AlDh@hAn@|AHRRh@FPL\\Vp@\\dA^fAPl@f@dBTz@DN^zAVnAP|@BLFXJb@@HP`AJp@RlANnANnALbAVpC@Jb@~EN`BJnAt@vIFr@j@zGRbCVpC`@xEBXHx@z@dKJhADp@Df@NbCJbC@b@BtABj@@|A@v@@dBA~AAfACfBGtBGbBMrBMjBM`BQ`BQ`Be@vD]fCmAtJUdB]hCUjBU`BS~AER]tCYvBe@rDKt@{@tGg@|Dc@fDUnBAF?@Y~BAFGj@AFGl@Gv@KjAC\\CZE`@Cf@C`@A\\G`AAZAXABAb@Ad@AZEzB?BAh@?r@?b@?BAj@?@@tA?h@@X?\\?L@N?Z@p@@^@L@X@Z@\\Bf@Bj@Bb@@HDn@?FBb@@PFx@Dn@BP@VBNFp@Ff@?FDZ@H@HF`@PzAPnA@DJr@Hb@H`@DXVvAR`AH\\DNFXTbA^tAJ^Ld@Lb@Lb@Tt@@@b@tAN`@p@rBd@rAPf@DN\\bAPf@DLJXVv@Pf@L\\Nd@@@`@nAb@pA^dAFPNh@t@vBPf@Pf@X|@vAdE^lAX`AFXPv@?DLj@Jt@BXFr@Fx@Dz@?T@\\?x@AnAC|@A?Gz@Gp@Eb@G`@Ih@?@Q|@Sv@ITIXAD[x@a@bA_@v@}@~Aw@vAMRYh@MVQZUh@KRMZITSl@K\\Mb@Sx@Ml@GZMn@E^EZKt@CZGr@KpACZKrAGv@E^EVG`@E^Mj@Kf@Qn@K`@Yz@e@tAaAzCOj@Op@I^GZAFIf@EXCXCRC^CVAZCVA\\KfCEdBE|@C^?@Ch@Ed@Gh@E\\ADKl@Kb@Mj@K\\KXUn@Wf@OXOTKPGJIJMRML[`@ONUR_@\\_@Z]Zw@n@URYVCBWVCBOPMJ_@d@[b@EDQXW`@[p@Sf@KXKXM\\K`@Oh@I\\Id@Kh@Ip@Eb@AFEn@Cn@Cn@Ah@?h@?n@?~A?nD?`BAf@?f@Cp@?@Eh@Cd@E`@Gf@Ij@Kd@Mn@Sp@Sn@KXIRIROXKTEDMVGHQXGFOTIHIJ[\\ONKJMJQLA?KHMHSJOFA@UFSH[FWFG?M@YBU@WAW?YCEAQC[GUGWIMGUKSK]UUOOIOM]WiCiBUMQKIEGEa@OQIMEYIA?QEUCUCSCU?a@?W?M@G@SB]DSDUFQFUJUJUL_@T]XUV]^QVEFMRWf@O^MZQj@I^I^GZGl@CVC\\ATAf@A\\?b@?j@AR?v@@pA?F?tB@vC?t@?d@?T?rB@t@?tA?zA?T@p@?d@@Z?HBb@?J@TB^D`@Dd@?@BXDTF\\DTNt@Hb@\\`BR~@BPH^@DNdAHn@BT@H@V@J?N@L@d@@T?@?L?P?L?JAR?LAVA`@Gx@Gh@Gb@GZMn@AHIZK\\CJELM`@e@vAEJ[bAM`@Qj@ABMf@KZG\\I\\CJIn@EVCVCVCPE|@C\\?HAVAj@?v@@l@?NB`@Bf@Bb@BVD^BNHf@DVPz@H^DNHZNd@N^Th@Xl@Vf@LPDHT\\p@x@LNHHFHJHTRLJNLZTRJd@Xn@XdAb@HBxAf@`@N`@LbA\\hC|@lBr@bA`@h@X^TXRZT\\X`@^XXNPRVZ`@NR`@n@HNHNPZFL@BN\\Tf@JVZ`AnBlGXbARp@L^Nb@FPLVRf@HLP\\DHT^?@NRV^NPl@p@t@p@nA|@|DhCRNvDhC^V@?\\VjAv@zDlCdAr@zDhCtCnBhAr@HFTL^R`@T`@Rh@Tp@TB@TH`AZr@NXFXHr@Jd@Hb@F`@Fb@FTDTB^F`AL@?`@H^F\\HF@^JVHd@NFBRH\\Pd@TXPNJDBHFXPRPJFPPNNJJ\\\\f@l@^f@BFRXBFT\\R^Rb@Xn@?@L^Tn@Rp@XdA?BJd@Hb@L|@Hp@Fl@Dn@Dp@@z@@p@?b@?`@A\\A^A\\Cl@CV?FALCXCZET?DM|@ETMv@S~@]zA?@Mj@c@rBCJKj@GVMt@SrAKx@KdACREh@Gz@Cr@Ev@C`AA|@?z@?fADzA@j@Bj@HjAF|@Hz@Df@Jr@Jr@Jp@Jf@Jd@P|@Tz@Pp@BHPj@L^JXN`@\\~@\\v@@@DHRb@b@x@f@|@l@dA@?R\\@D`A`BdBtClKnQhGnK|@zAb@r@r@lAhAlBn@dADHNTXf@|@xAZl@Xh@@Bv@bBFPLXd@pAh@dBTz@Np@T`AX~ARzANxADl@HhAFpADjABjA@z@A`A?v@CjAK|CQjFK~CGjBAHEjAMrDEpAOpE?DI`CErAEt@ChAA^AZAf@AVA`@A`ACfA?~@AfA@hB?f@?l@?F@tABnA?d@DxABt@Bz@FpAHpBHnAJtAP|BH`AFp@RlBHv@F^VlBDb@RtARlARjAHd@BJF^FZTjAf@|BF\\ZtAZrAd@xBXjAl@lC@HXjAjAjFDRZtAZrAt@hDFT`@hB^jBFTZvAf@xBBJd@tBJb@@Bz@xDbApE`AjELh@Lj@h@bCzAxGNt@DVDRR~@\\jBTtARzAJn@NvARtBPjBJtAFpAFz@Bh@Bn@Bx@DvA@rABnB?DDbE@dBBzA@jCBzA@|A@zADvDBjC?Z@~@DdF@n@?f@FzG@l@FxFAb@Bl@HtJ@~ADdD@|ADdBB`AFjBHzA@RJtAJrAN~BFf@Fr@B\\B^BVDd@@L?Lr@zI^rEH`Ab@`GXhDXrDL~ADn@TvCXfDTbD`@`F\\bETbD^zELzAj@rHFh@XrDV`DbAnM\\tE`@jFl@nH^xEd@pGLrAJvAj@pH\\dEn@jIZdE^zEVhD\\bENlBJrA^|ELdBHbAb@|EBZHx@@PL~@NpAJv@Hb@Ff@H`@RlARbATfAThAPv@Pp@?BNh@@BRv@d@`BJZZdA^dA^bAj@|A^~@Zp@b@~@b@~@t@tAf@|@l@bAp@hAv@pA|AhCXb@hBzClB`DbC~DLTJN@BFJPXbC|DnBdD`@n@hAjBl@bAzAhCLTxBrDl@bAJPNVJNPXx@rAjB|CFJx@pAh@z@vA`CR^r@pAb@z@b@~@r@`B@@Vp@`@`AXt@DJHVVp@^hAf@dB\\jAl@~BXnA?@TbA@FJb@BN\\hBXhBLr@^hCVjBJl@\\bCHh@BTLx@RrA^dCXlBFd@Hh@?@Jl@^lCj@vDl@dEb@~CXlBh@tDXfBL|@RtAHj@F`@Jt@RnAXnBVjBVdBXnBXnB^fCXlB\\~BXpB^dCd@fDTvAhA|HZ~Bj@vDF^@LjAfINdATvAd@dDf@dD~@nGd@hDTxAXlBVhBn@jEJn@n@pEJt@h@hD^hCf@pDX~BHr@N`BJrANnBDv@D|@FrADvA@X@rA@b@?Z@lA?zAAdB?X?h@AXCrAEbBC`@GnA?DCf@Cd@Gz@KrAMlA]fDMdAKj@YxBCJKj@kAjGwBxKoArGe@`CoAvGwDpRMn@Kj@iGl[qBfKc@~Bc@xBs@tDkAbGCPi@|Ce@vCi@dEWfCOdBUhCQrCA\\IbBKzBG`CGzDAbDA`BD|DBvBH~BH|BJdCHlAHlAZrD^nD@P\\jC\\`CPpAtAfJrA~I~@dGfDbUtAjJRlAbA~GFXzAlKLt@jBdMVfBhAtHf@fDj@vDrChRt@bFLt@@JL~@P`A\\dCd@~CPdAdCpPRvAjDpUr@rEXnBJr@Hf@PlANrAFn@J~@JpADt@FzAF|AB|A@fAAbA?xAC~@C~@Cn@E`AEx@KnAQrBg@pDe@~Cm@xDQpAc@zCSxAK`AI~@MtBG`BCdB@nA@fBBn@D|@JxBLtANlAXbB^tBT~@Rt@H\\@BFPHVNf@Zz@b@dAFPj@jAf@~@\\l@FJR\\r@fAFHz@lAj@z@V\\r@bA`AvAn@`AHJPXf@r@pAjBRVj@x@pAlBJPr@jAj@bAZn@Zt@Vr@Tp@DPFVPp@Nt@Jf@F^DXH`AD\\BT@N@THnA@z@HpD@d@FpDL`FHpDJdFDlBJrFFzCDxAR`LFhCLzEFrDDfC@vBA~@AdACl@A\\Cl@Gz@G`AK|@MfAG^G`@Ih@Mt@UdAOr@YbA[bA[`Ai@vAk@lAa@x@_@r@c@r@W`@c@j@[f@iAxAcB|BcAvAaA|Ae@z@a@t@_@x@_@v@Up@e@pAa@vAKZOn@WjAS~@QhAKr@It@Kv@Ex@Gr@GrAEz@CdBAnA@r@BlA@x@Bp@B`@Bd@Dj@Fl@Fr@?@?@R|AFh@NpAR|A?@lA|Jh@lEj@tEFf@VtB`@jDLdA?@Fj@F\\J~@\\tCNdA@HH`@F`@DVLr@VjARr@DPBDHXJXRl@b@bAVj@HPBDJRZh@d@x@v@vAbAdBdAdBnCjEVb@HLNVpArBd@t@hA`BFHl@v@nAbBX`@|AvB`AzAr@nAd@z@f@jAh@tAL\\h@`B^xAb@jBfAlEr@tCNp@Jb@@DJb@j@pBb@~ANd@p@xBPh@Rl@N^f@xA\\|@Zt@L\\r@bBxBzEz@`Bx@xArAzBp@dA^n@HJv@lArB|CZf@Zd@n@`A`@n@FJXf@HLPZLRP\\^r@Th@LZHPJVDLJXPd@L`@Nd@Lf@BHHVH^Nl@Nr@Nv@?@Jp@BJHl@NjAD`@BVBZBXB\\@X@P@N@RB^Bz@?D?L@~@@h@?h@?z@ATAt@CbAIxAAPI`AIz@Kt@SvASxAU~AStASxASnAWhBUzAM`AId@QfAKp@Mt@Mr@Ov@I\\GVS|@Wz@Y|@Qh@?@Wl@e@lAa@|@Wf@?@]l@a@p@]f@A@UZMPMR[`@WZSVs@|@a@f@Y^CBeApAEFY\\W\\q@x@EDY^e@l@c@j@CBu@|@AB_AlAUZMNABSXCFMNINKNWb@CD[f@CFEFKRS`@Ub@ABO\\A?GNQb@GLEJSh@O`@K\\KXWz@Md@GTWbAIb@GXUlAGZIl@M|@MlAKpAEl@APE~@Cb@Cp@?NAd@?d@?N?^?h@?^@^?J?`@@LBv@DbA?HDb@@TFz@Ht@?BJ|@@JNfABPFZBNJh@F\\P|@FRPx@JXJ^BHDNFTPh@@@d@rAP`@FLJV@BDHFLDHDJXj@Xj@DFVd@d@t@n@dAFLFJLNNTJP|AhCV`@fAfBn@bAZh@Xd@NTRZBDV`@d@x@FJNTv@nAJPZf@R\\DF~@zAvA|B`@p@^n@Zj@b@t@PZTd@@@Zp@Tj@Rf@HRFPj@dB@DFVDJHZb@pBXxAJr@L|@DVJz@JpADf@Dl@Bl@Br@DjA?B@p@JvEFrBDxAFlBDnAD~@Fz@H~@JfALlAPjALx@Jp@DRP`AVjANl@Rz@h@pB@Ff@bB~@fDz@zCrAxElAhErBjHZfAVz@`AjDpArEn@`CXlAVhAJf@Nv@Nz@Jh@L|@L|@NhAJ`APhBPfCH~AD~@DfB@|@@~@?|BA`AA`AAx@GfBCr@Ch@IrAC`@CXIz@KhASlBAJo@rFWzBqAxKmAjKOlAOlAMlAQzAQhBQvBOrBInAIdBEbAE`AGvAEjBAp@CrA?ZA|@?tA?vAAvA@|BAx@?~D?lA?FAt@CrAExBE|@Ch@OpCOlBSdCIr@Kv@K`AOdA_@dCSfAYvAOz@Kf@CHUhAe@fC_@pBWxA_@bCAJS~AQ|AI`AKlAQzBGlACr@KpCIvB[rIKbDEx@EpAKbDIvBInBS|FU`HOxDQdFEnAMnDYhIWpHKpC?BGxBEzCEtBAfE?BAzA@dD@dBBdB@lALdHDrBFjEDbCFbDFhDDbC@|@D~BBdC@bAClFExDIbGGpECl@?FEvC?^AbBA`B?zB@b@BjBHxB@TDdABb@@HDl@?FHbAT~CJzATnCP`CLhBTzCFj@@ZBPRpCP`CLfBB^LvADl@Dl@ZdEXtDBZ\\zEX|D?DLhBHhBR`FJvC?LHdDBnBBfC@~C?fD?rH?vD@xA?\\@lB?z@DjBB|@?DHzADl@FbAH|@BTRhB?DVfBDVJn@VpAZvANn@DPNh@FVDPZfADJPh@DNBD\\~@BFVl@Vp@b@dABFv@fBt@hBx@nB^z@DJ@@JVn@zAr@bBJThAnCLXf@jAr@fBVp@@BPf@Tt@Tn@Pl@HZZfAPt@XjADRBNLf@TnARlAPhALx@Hr@Ht@Hv@Ht@HlANrBB`@@P@Z@V?B@X@ZBh@?X?L@^B|@?fA?zA?BAfACdB?JCf@?NCr@AZGfAEj@En@Gv@Gr@AJEb@?FKx@OrAa@zCSfBOrAIz@KnAShCKtACh@AJ?DGz@IxBElAEfBC|ACbAAvAAjA?Z?J?b@AxI?T?J?nA?jC?H?F@vD@rAD~BBnB?FBd@?XB`AFrBDbA?HBb@FpAB^D~@TzD@^@LF~@JpA@f@NjBHh@TdBJp@Lj@@DLp@Nn@@BPn@Vz@@@\\`A\\|@@@r@|ABBr@pAZh@TZr@~@bAlA@B`@^d@d@pBjBrBjBZZ\\ZZXt@r@PNx@z@DFDDb@b@l@t@JJxAtBLPl@`ADDt@rA?@dAtBFL?@l@vAFJ\\`AL\\Nd@Pj@L\\V|@Nf@VhAJd@R~@Jh@FZBJRtA@@D\\Hl@BZDTLnABXDd@NpB?JBd@Dx@@TBdAD~B?H?P?zA?B?RCdB?@GjBIvBW~GIvBOfECx@EdA?BEdASxFKhCSbF?@UrGOvDQdFA\\S`GC~@AbB@jB@^?F@b@Bl@Df@Dz@Fl@Db@Jt@RpALp@FVNp@^xAZ~@@BFNXt@Rf@JVx@~AP^JP~AtCf@~@`@t@`AdBn@fArCjFJRZh@h@`AHLv@zAB@FLz@tAJP\\h@^h@d@n@b@l@fBjC`B`C\\j@|@zALRP\\p@rAz@dB@BlAfCp@vABDxAfDR`@HRpBnE\\v@r@|ATd@xAhDjBdEr@lBN^d@jAf@|A`@pAd@bBt@|C\\xA\\zAJn@b@pCLz@f@fD`@tEXfEBz@FvA?BNxDNrDBh@?BNvDFvA?BNvDFtA@B@^LhEJfCb@zL?F@DBl@X~HBh@?BBl@XrH@FBr@Bl@n@lQVrGBr@?NFjAHhCFrABt@FxAHnBFlBH|AF`BHdCFpA?LBh@RdFBn@JdCJlC@NLnCFbADh@?BDr@\\xENlBf@rFLfADZLbAL~@?@RxABVL|@?@XrBDNHh@?@`@bCBJPfA?BRdABPPz@VlAHXbA|EtB`KBJTfAf@`Cx@~DDT`@vBPlAF`@Jr@Hl@Fj@Jt@DZ@PFf@Fp@BVJtA@LHjADv@HpAJtBRfED|ABj@PxDFjABb@HrBV~FXlGLhCL~Cb@tJNfDDv@P~Dl@jNH|AFzAHlBLdCDrAFtAHrADfAHrCJtEDtBBzC@nE?h@GbJItIKlIIpICxCEfFKvII|HM`ICfDCdCA`BAnB?~BBhB@vADnAP~DHpALnBHbAXjCP~A^jCh@zCd@~BVlANp@Rr@Rv@p@`C|@tCp@dBRn@Td@^z@vFjNpB~Eb@dAVl@^v@Vf@t@pA`@l@nAfBn@r@`@b@`@^~@x@t@l@`@Xh@^bBhAl@`@t@j@r@j@r@p@t@|@NRj@v@v@rAXh@Tf@N\\\\z@L`@Rn@FTJ`@JZTjANx@PxALjADl@Bh@@XBr@Bv@?fACfBKrBEl@IhAGvACj@?f@Ap@@zBB|@Bj@HrAJdAD`@^nCh@bEfAfIFb@Hj@Z|Bh@fDXtADRh@fCXlAf@hB`@xAb@xAt@vBfBtErArCpAfC~AzC`JvPVb@PZzMfW\\n@hAvB~ApCP\\tCpEpAbBp@v@t@~@bAdAnAnAlG`GbCdCzCpDjBpCbA~ArBnDNZR`@Td@|@pBRd@\\r@`@hAn@jBBJn@jBt@fC|AlFNf@BHh@nBl@nBfAvDzAhFv@jClBtGnB~GDJ|B|HxJ|\\d@|AxEfPrDfMPj@zClKFR`FxP`AbDn@zBNf@p@zBNf@p@zB\\pA`@rANd@p@|B^nAn@|B^nANd@X~@hAzD^pA^rADLh@fBRv@HXBN@?H^\\|AXlAFX@HBLLj@DX@@@DTpA?@Hh@Jt@Hf@@F?BNfAHh@?@Hr@Jv@B\\Ft@@HLbBJjADfALpBLpBNhBH|@JjA\\fDXfCh@xDp@~DZ`BXvAJj@\\|AFTFX|BrJbAdENp@Lf@~BzJbAdELh@v@bDh@xBtA~F~BxJ~AvGpArFn@jC`A`E\\xABJd@nBdEnQj@|BJb@@DT`Az@|DVvAJh@Jh@?@b@|BTzAHj@Jj@PnAr@~FTxB`@vEDb@PjC@BLzBJ~BHpBB|@JhDDfC?TB|A?lEAhD?|@ArAKzEMtDSfEWdEC^KrAWlCa@bEWtBGl@c@bD[dCCJcAvHa@|Ck@dEGj@k@bECRIj@KbAMvAGz@I`AE|@EhACh@Aj@CrA?HAfA@jA?fADbBF~AT`FVdFZ~F@Pb@xIJnB@\\Dr@HjCBx@Bh@?DB`A@`@?b@B\\@T?V?T@V?N?\\@\\?P@l@?nA@t@?l@?T?r@?B?n@?hA?P?X?nBAhC?tB?R?jC?j@?LAjC?lA?bCAjF?jC?`LCpJ@nB?pADdE@Z?L?B@X@N?@@Z@RFlA?JXtETvCR`Cf@zF@TFj@Dl@@NB\\F~@@R?@Bb@@N@\\@l@@Z?PAl@?DAf@?VAT?F?HAZA??FANC^E`@CTGh@EXAHO|@ENMl@A@Kb@AF[fAi@vAGNKTO`@Yp@a@`Ay@rB{@rBa@bAWn@ABg@lAQf@Q^g@nA[|@ENSj@Qj@[jAW`AEPADQx@aAtFG`@Y~AUpAeD`R_@nB}AzIwAfIg@pCc@nBi@rBw@~BSj@u@dBaAjBcB~C_ClE{E`Js@pA?@_@n@e@v@Wb@ABg@r@i@t@WZm@p@A@MN_@^aBvAA@g@\\aAp@QH_@TIDULe@VwB|@yAh@wBx@gCdA{@b@e@VcAn@o@f@yAtAsAzAeBxBuFdH_AnAa@d@_@f@OP_@f@]f@[b@q@bAQVMTi@~@MVKVMXKRWp@KXIVUp@Qp@]nASt@CHMj@m@zBUv@KXGTIRADKXITMVKVMVMVWd@ABMTOVKRA?OT]f@QTKLu@~@qAvA[\\GHc@d@e@h@i@n@c@l@ORILEFMRMTg@|@O\\OXKTKVKXKVIVCFGPITABIXGXIXQr@GZGXGZGZEZGZEZEZIt@E\\AXC^C^Er@Y`GGlAEj@CVEZCZE^Kn@Mv@Ot@IZGXA@EVSp@Ql@M^KXKTWn@Yl@MXYj@]n@ILc@p@qCzE]j@uBjD?@mCnEU^Yd@gChEu@hAU^ORKNQVa@f@QRc@d@_@`@SPc@`@w@l@AB}@n@KH{@l@}AhAuBzAqBvA}@p@_@VOJa@X_@XID[Tc@Zw@j@{@p@SPSNQNMLSP?@SPGHGFQROPKLEDMPQTOR_@f@OTS\\u@jA_BdCYd@wBhD}@vAm@|@o@|@cArAc@j@EFe@p@m@v@aBxB_AnAq@|@A@_@d@]d@Y`@Y\\[b@W\\INMPOROVEFGJMTMTMTMVMXKVKVKTKZKXIVIX?@IXENAFGVEVG\\GXEZEXEXC\\CVC\\CXA\\CVC\\Cr@IxAAHCh@Et@CZEXC\\EXIh@If@G\\I`@EPGVg@fBeBpGi@hBsA`FmAnEQr@IVIVIXIVKXUl@MXKTMTMXMTKROTCDILMRORORQRMNQRoB`CeBrB_AjAsBbC_BlBeBtBqBbC_@b@MNQTY\\c@h@gApAm@r@SPQPQPa@^e@^QLUNQJQLi@XSJSFQHYHUFe@NIBKBQDUBUDUBWB_@Da@BY?g@@aAAwAAaAAW?Y?Y@O?G@M?U@g@DWDSBQBC?QDQBG@UFWDUFQFYFoA`@GBMDSFi@RqA`@KDa@La@NgDhAA?eA\\aAZa@Na@L_AZwAf@uAd@qA`@[Jc@Le@LYFk@Lk@HSBC@O@YBYBc@BY@W?Q?Q@WAM?Q?QAC?c@Ak@EYCa@CYCeCU]C_BQE?eE_@eGk@kCUc@Ei@GkD[c@EmCUcAKi@CeAGqAG{@CkCIgEMS?sDKc@Cc@AeBEwFO}@Cc@Aa@?_@?a@@S?E?Q@S@U@c@Dc@Da@D[DQBWDSDI@OBUFq@NC?[He@J{AZMBeAVa@HE@eCj@a@JC?uAZuAZ_AR_ARm@NiB`@aCh@iB`@IBIBOBQDs@P[HKBYHKDYHUHSHi@RUJSJSJQJSLYR]VQLSNGHOLYXSR]`@c@j@]d@ORMROVKTMRSd@CDKVKVKVGNCFKXIVKXIVIXQn@ADENaArDSt@IZIXITIZITELM`@EJ?@EJKVM\\KTITMTKVMTMVKPABA@KPKPCBMRSXKN]b@UVMLONCBQPKJ_@ZWRe@^MJEBEBSNCBE@}AdAaBbA_BbAqBpA}CjBqBnAi@Xo@\\_@P]NSJ_@NUH]JQF_@LWFk@LYDSDQ@QBA?W@C?E?K@S?[@y@Ac@Aa@ASCo@EQCWEYEa@GA?YGMCo@Mi@M_@IICSEGCGAgCm@_AQGAe@Ki@ISCC?SCOAYCm@ESAS?[AW?a@?M@E?}AJU@UBOBQBI@UDWBSDQBUDWFUDSDkCf@wB`@sCj@oB^}@PwB`@}AZ_Dl@o@Li@JQDUFUFUFUHWHQFYHC@OFQHUJSHSJQHSLQJSLSNSNQNOJOLUVSP_@`@UVIHILQTQTMTQXQXKTMTMVKRKVMXKTIXKVIXGTCFKb@ETELS|@i@`DMfAOnAYjCE^SjBIr@a@`DKv@Kv@WdBOx@SjA]hBOt@Kj@S~@Qr@GXIZWbAI\\IX_@tAOj@EHm@rBs@|BSj@a@lA_AnCi@dBAFOb@IZIZOf@I\\IZK^Mj@GZADMt@G\\CHGd@G^EZEZGf@Gv@Gn@Ed@C\\Cb@Cp@AHA`@Al@AX?ZAZ@bBBtHBtJ@vD@b@@lF@pB?r@A\\?Z?HAPAXA^AP?FC^Gp@E\\CXE\\EZEVGb@Ij@SrAKt@EZGZEd@E^CZEd@EZAVC^C\\AZEv@?XA\\A^?ZAX?N?L?^?X@Z?Z@^?ZBl@DbABZB\\@ZBZLnAPnBJtAFt@Dt@@\\@Z?\\@Z?\\AXA`@Cp@C\\C\\CXCVEZEZGXGZMn@Uv@Sl@KZKVWl@GN}AjDMVKVKVKVO^GVGNIZITGZKb@Kh@E^EVC\\?@EZAVC\\AZCZA`@?ZAr@CvBAx@?ZA\\Ep@AZCZAXEZCZEXEZEXEPCJGXGVGTGROb@Un@_@hAoAhDKXIXIVUr@I\\Mb@GTKb@AFUdAe@pBIVOl@K^[hAM\\IVSh@Sf@]x@aApBsBjE}A~Ci@hA_@r@a@x@[l@Q\\W`@w@xAw@tAk@|@k@bAOT[j@MTOXUb@OZMTQ^Qb@_@z@Sf@Sf@M^IVKVOd@Y~@Oj@Ol@ELOp@a@fBq@bDMj@Qr@I\\K^I\\Ql@GPITADK\\GPIXA@_@bAOb@kA~CEJKXEJ?@IVKVIVKXIXGVENCFENCHIXQr@I^Op@ENId@GXKl@G^Ib@?@w@lFCTABEZCNId@GXGVIZCHELIZA@ITIVMXIRIPOXOVOTMPOTo@v@QRKLSTEDA@}AfBsAzAeBnBQRA@]^s@v@OPa@b@c@^URMLQLQLUNe@VUJSJSFk@PQDWFm@LQBQBeAPA?a@F]Fi@Jk@Jk@PSFOFSHUJULSLSNMHMJMJMLOLMLONSTKNSVOTMROVMTKVMXUh@AFA@]bAiAnD]jAQr@Qt@Mv@EPEd@CVEZAXARCb@?LAP?v@@v@@Z@\\BZBZBXDZDZDVF^FVH\\HXHZHRJZHRL\\Tb@R\\T^LRPTNPPPLNRRXTRNFDDDFDVNJFZN\\Px@VNDHB^FLDVBL@JBx@FXBl@Bj@Dj@BT@RBL@`@Df@HVDRFRFTFPHTHRJRHRLPJRNDDXTB@`@`@PRLNNPNRT^R^Tb@\\v@HRHVHXFXHXFXFXFb@Hl@BZBXB`@Bb@@\\?d@?f@?h@At@?@EbBCrAAx@?^?N?R?L@v@@x@Br@B|@Bl@?@DvABvA?p@?f@AXA\\Ab@Cn@C\\AXCZE^W~CGn@?DEf@Gj@El@Gj@CZI|@Gl@?@Gj@Ih@Gj@?@G`@GZEXEVS|@Mj@I\\CJETQh@EP?@CFGTEHOh@Wr@O`@o@jBg@rAENIVSn@]jAIXSx@Oh@?DOn@S|@_@|BEPGf@ABOjAMhAIr@CTGn@MlBAVI`AMnBEj@Gh@Gd@Il@EVKl@Kh@Mh@M`@K^]fAy@hCIVi@hB[nA]jBO~@CJKx@Ix@Gv@Ev@Ex@Av@Ar@?@Ap@?x@@bBBvEAvA?\\A`@Cn@Cl@Cb@Ch@Ej@Eb@KbAGf@Kt@G`@O~@Mp@w@nEIx@ETGp@Gx@Ef@Aj@At@AZ?t@BbA@x@BzABhA@J@x@@PBx@@hA@~@?n@Ct@?XAZE|@?BGr@Ir@ObA?BEPEXG\\[lAc@|Ag@tAs@lBGNQf@kDrJk@`Bq@vBQl@YhA_@tA_A~DcAtEKf@ENADERMh@Qt@Mj@YrA[tA[tA[tAg@~B_BhHa@hBYvAQ|@Kn@AFMnAIv@Er@Cl@AN?LAZAZ?n@?j@?d@Br@@d@FpABr@Dt@Bp@Bl@?l@@f@AlAAj@A\\Er@Gt@It@Kx@Kn@Qv@WfA_@lAUn@KTe@bAi@~@Yd@QXYd@[d@s@hAQZWd@S^O\\OZUf@Uj@KVUr@GROd@Oj@_@vASv@]rAOl@Sp@Wp@A@KVEJKVQb@[l@_A`BaAdBUd@S`@KVADQ`@Qb@_@fASn@c@dBIZGZMp@QjAE^Gj@KdAEb@Eh@AVA^?LATAh@CbBA`A?d@AF?j@EnA?`@Ex@E|@Ej@?JGp@Iv@K~@QvA]bCE^QxACJKbAGl@GdAALAXA^A\\Al@?b@@p@@r@Bh@Dv@Fl@Ft@LbAHl@VfBN`AN~@L`ABPD`@BTFr@B^@P@JB\\@n@@b@BnAAb@?h@AZ?`@Ex@AT?JGx@GbAIv@a@|DWfCSnBMjAALKz@SnB?FQxAg@`FK`ASpBOxACRIx@K`AOpA[dC?Da@lCW|A[bBWpASz@a@`BmAvEiC~Js@tCYjA[pAWnAWpA_@pBW|AADUdB_@tCGr@Gl@Ix@[vDKhAEl@KdAQnBAJC^Gp@[pDWzBa@`DQpAMx@SjAOv@UlAa@hBg@vB]rAa@|Ag@jBgAjESx@U`AW`AU|@_@fBYvAg@jC_@|Be@bD]dCQ|AMlAEXMtAMfBM|AI|AIjAE`AQjCOdCK`BMrAMfAM`AO~@?@S~@Op@Qp@St@Ur@Wp@[v@]t@m@dAc@v@]h@o@~@_AnAcIzJg@l@eBzBm@v@a@n@Yb@_@l@a@r@Ud@_@v@_@|@a@dAUl@g@bBSp@IXMn@YxAEPMt@Ir@Kr@Eb@MrAIjAEz@IrBGdCEzBIbEAn@GdCSjKCdAC~AAj@AbAChBElCA`B?jE@|C@tBFdD?@H|CF`CN~DJlBPhDf@zH`@bGr@rK\\bFrA~R`@pGlApQh@~HJzAV`EH~AFlADbALnDF|BDvBFdDBjD?xEClDEdEIxDK|CKhCMrCM|BEr@[rEQtBMjAg@fFKz@e@tDIl@{ApKm@fEO`Ai@lDIl@Kj@q@zEe@~COfAIn@YtB[rCGl@APCVKhAGt@KfBK~AE~@C`ACdAEvAAbACdA@pA?pA@`A@~@@bAB~@Bn@@VDv@Dx@J`BHhANbBF|@h@nE?@VnB@FRhA\\nB|@dE\\vA\\lAd@rAnDnKlDhHBFNXNVDHFLHLDF@BJPJNDDHLHNRVNTNR^l@V\\JL@BNPd@n@TXHJ^`@VZHJl@p@VVTTJJNNLLLLHJ\\\\VV\\^`@`@f@h@XV^^@BRPDFVVb@b@VXB@VX@?r@t@^^`@`@TT^`@VVHHb@`@`@b@DB\\\\r@t@p@p@HHZZLNt@r@`AbAfAfA`@`@b@b@\\^XXZX`@`@r@p@t@t@r@r@^`@b@d@p@r@RR`@`@tAvAtAvAFF|@|@hChCr@r@p@p@b@d@NNNN`@b@RPX\\Z\\RTVZRTd@l@LPDFPTPTNRXb@`@j@PTPXRZNTDFBFBDBBNV\\p@^p@fBjD|@rBVj@bAzBfAfCRd@x@hBp@xAb@dAxBbFh@jARf@Vh@`@z@n@tAd@dAd@dA`@~@FL\\v@NZdA`Cz@nBZt@BFLTRd@Xp@Vh@@BXl@Vl@Vl@f@fAb@`Ad@bAVl@Xn@Zt@LVN\\Rb@Vj@Th@Xj@Vl@Xj@LXR^Xf@Tb@@@NXRXT^PXV\\RXNRPVPTB@TZNPPTTTRTPPPPNNVVVTTR@@VTPNVRXTVRXPZT@?XPBBRJVNXPRJHDLHTJTLVLXL\\NVHPHZJTFTHl@Pn@NJDb@HPDTFTDNBLBNBLB\\DVD\\DVDVB\\DZDD?TD\\Dd@FRB\\B@@ZDn@Fj@Hr@H|ANTDXB\\DVBf@H\\Dd@Dh@Hh@FD?^F\\Bh@HB?`@FVBRDTBB@RDLBF@RDZDTFTFVFRFB@ZJRHVJZN^LZL?@ZNVLXNVLZR@@XP\\TPNNJ@@PNHFHFNLPPRNNPNNPPNPPPNRDDBBFHLNDFRXDDT\\V\\T^R^NVLRJTLVR^P`@P`@P`@Pd@Tp@\\~@Nf@FPL`@Z`AZbAXx@X~@f@~ATn@?@JZDJTr@Vx@Vr@Tn@Rd@L\\BFRb@Th@Tj@Td@JTJRXl@Xj@Tf@Tb@Vj@\\r@HNRb@`@x@\\r@`@x@d@`Ab@~@h@fA?@Td@R`@d@bAZl@?@Rb@FJXn@v@`Bj@jAVh@P\\P`@Vf@Tf@P\\Vh@P^R`@?@BDP\\@BRb@h@hAf@fA@@d@`A\\r@Xl@Zn@Zp@Zp@Xl@FLP\\Zr@Rf@@@Rj@Tj@Rj@Nb@Nf@Pj@Nf@T|@Nl@Lj@Lf@Nt@Nv@Lt@Lx@Fd@BPFd@@LFf@Fl@Db@Hv@Dp@Dn@Bj@Bv@Bp@Bl@@n@?@@r@?|@?dAAlAAt@EnAElAIhAEt@Gr@In@Gr@OlAM~@ALIl@CTCTOfAK|@AH?@E^?@ADKv@Eb@Gj@Gp@Gp@Ef@El@Gx@Er@C^CV?HAPATAXA\\C^Cv@CbAA^Af@?d@Ap@?d@AvA@tA@Z?\\@l@?f@@`@Bz@?BBj@@b@@F@VBj@Dp@Bd@@X@TBXB^@JDl@?@Fh@Dd@Fn@Hr@Fj@Jz@J|@Lv@?@Hh@@?@NNz@RjAPv@Jj@@FJb@BHXpAb@dBDRPn@Jb@Nh@BHrBdI`@|AH^|@dD|@fDPr@\\tAd@jBJ`@Lh@\\pANp@J`@h@tBV`ARz@^pA`AzD@DBLv@zCj@tBFXx@`DPp@Pr@\\rAVbADNHZb@bB^tAVdAFNJ`@Tr@`@tAj@hBf@tAf@pATj@\\x@BBh@jATb@Vf@NZ~@bBFHFJhAhBLRh@x@HLh@v@DDbCzCrFxGRRxBlCb@d@jBxBRRX^zDnE\\`@lKzLlAtAj@l@f@l@@@n@t@p@v@NP`@d@^d@XZFH^f@FFT\\n@z@DFl@|@d@t@d@t@Vd@V`@Xj@Zj@JRLVZn@Rb@N\\Xl@@@f@lAz@pBj@pAjArCbB~DRb@Rf@xBdFf@jAJVjF~LvBdFLXDJLXf@jAbB~D|EdLhBjENZN\\pA~C|@pBjClGrDvI@@~CnH?@Rd@lApCpA|C@@f@jAf@lAdGpNp@zAhDdIz@pB?@Rb@Rd@nAxCP`@@B?@Rb@Rd@Rf@Rd@tIjSRd@z@pBpAxCh@pA|CjH?@Rb@Rf@vAdDLV?@Rd@Rd@jBlE^|@Rd@Td@f@hAlAfCbAhB`@n@Tb@NT|@rAh@v@BDZb@r@~@VZLLLN^d@nFdG`EtEZ\\X\\Z\\lBvBX\\pAxAr@x@pAxAB@X\\Z\\hBtBB@X\\pAxAv@z@BBTXXZvFnGpAxApAxAZ\\X\\XZ@@?@fCrCXZ@@?@ZZhBtB\\^Z\\X\\Z\\jBvBXZ@@Z\\t@z@Z\\X\\pGjHXZrAzApAxAVZ@@Z\\fCtCv@z@X\\XZZ^lBvBZ\\r@x@@@X\\@?pAxAX\\v@z@NPd@h@`FvFd@j@~@dAj@l@`GxG^b@|ClD`@d@@BTVfCrCv@z@Z\\X\\\\`@t@x@v@|@`DrDhCvCXZDBjArA?@l@n@HJv@|@\\^p@t@XZ`BjBlEbFt@x@Z\\Z\\|JdLbFbGlZ~^rVpZrA~Ad@j@nAzA@BfBxB|@fAf@l@d@n@p@|@^j@V^Vd@T^d@x@Xh@^z@r@~AnAhDL`@BJp@bCf@hBNh@J`@\\nAh@rB\\rA~@jDv@xCDLp@xBt@lBTn@d@dAXj@d@~@BDNVFLZh@^j@h@|@^f@NR~@nARTj@n@NNPP`@`@b@`@b@^t@n@t@l@z@n@`@ZRP^Xd@^d@^RNNLv@l@VRnA`ABBHFNJBB^X@@bFzD`Aj@dAj@bAd@b@Rt@VrBv@`@PfDpAfE|ARHz@\\|Bx@`DlAbC|@^N|DzApAf@`A\\z@Zz@\\VJtAf@lBr@|CpAZN`@PB@LFfEvBjDjBdB`A^P`@R`DdB^RnHzDvBhA|@d@~A|@`Af@ZNz@^lA`@rA^PDRDHBv@Lh@H|@LxAJR@v@@f@?T?V?ZAXA\\?jGO`@AnCGfACrACNA`FKhBEx@@pA@`BDD?`AFbAF~AN^D`@FlCb@zBb@\\Jv@Rl@PjBj@xBx@vAl@f@T`Bv@p@^vAx@NHNJB@vFhDfBfAbDlB|A~@|FlDr@b@h@ZRJJHLJ^RpAz@hAz@HFfAz@r@n@bBxAxDfDJJbA~@pBbBjEvDfB~AtAjAHHzArAz@t@`A~@b@f@f@l@d@n@^h@NRVb@FJp@lANXLTXn@h@fARd@Vj@NVf@fAfA|BhA`Cf@bArBjEfCnFfA~B\\r@\\t@LV\\r@R`@P\\`@p@P\\T^V^PVLP`@h@LNz@bAHFh@j@NLVTl@f@BBJHZTJFRNn@`@l@\\FDd@T|@`@pAj@dDpAbCdAVJfCdAB@|B~@jAf@fBt@D@rDzAlAf@vF`C|EnBbDpAFD`@NlChAvCnA~F`C~CrA^N|CpA`@P\\LB@|B~@fAd@@?`@PbA`@fBv@|@\\VJ@?zB`AjAd@r@Z`A`@t@ZLFl@X^RDBpC~AFD^T~AdArBrAd@Z^VtA|@xA~@x@f@nAx@f@^d@XxA`ApAx@nAx@lBnA`@V|@l@z@j@zCnBr@d@p@b@JFpCfBj@\\^RbBr@THlBj@fBh@d@P`@JZJrAb@VJp@Vn@Vl@\\~A~@TPj@b@h@b@VRRPZZBBn@p@~AjBt@|@d@j@z@~@FHRPFDTT^ZZVxAdA`@Vd@Z`@VZR|A`AxClB`@V^V^TdBhAfAp@lBnAxDdCh@Zp@`@JHJF|@j@RLjCbBvBvAh@\\\\Tt@f@rAv@PLjAt@r@d@\\TvBrA|@j@n@b@tAz@PLzBvAVNnAx@p@`@f@\\nAz@^Xb@Z`@Zd@^d@`@PLj@f@dBbBn@n@|AbBhBtBRTFFbBpBpB~B@@|BjC~ArBt@dAzAvBZd@z@pAvDvFjAbBl@z@V\\X\\NRNR\\`@NR`@b@l@n@lApAPPp@p@TTj@j@l@l@jBlBr@n@|H|HZ\\v@v@v@v@XX^^p@r@v@v@DFLLb@h@r@x@X`@t@`Af@t@V^b@r@p@jA`@t@HPTb@LVfA`CTj@h@xA\\~@Nd@Tt@DPb@vAV|@P|@FR?@Jf@Nn@f@nCFd@F`@DTJr@Hp@Hp@JbA@LL~AHbAD|@B\\D|@Bh@HpEBrM?t@?\\@dA?zA@l@@vE@pG?dC@xD?dB@rC?N@\\?l@@l@@T@j@Dv@Dh@NpBNxAL~@DXRjALl@Ll@BJLd@BNDLNj@Ld@Nf@JXPl@FPv@bCHV|@pC?@Vv@f@|Ad@zAPh@Pl@FRh@~AHXp@xBl@jBx@lCh@|AJZ^`AVn@P`@Zn@R`@|@|Ap@fANTx@bAh@n@l@l@NNh@d@d@`@TP`@ZPL~@p@jBrAxAdAfBlAXRRN\\VnBtAtA`A@?vCtBXRrBxAbEvCnA|@bBjA\\VtBxAJHVPpA|@NJv@j@JHp@b@z@j@r@b@lAp@|@b@d@TbAd@x@\\JDzAh@B@HBv@VZJD@j@RbAXx@V`@Lj@NjF|AnCv@~M~DdDbAhEnAhA\\f@NnBj@xAd@r@RRFj@PpA^j@NvAb@lBh@dBh@`@Lj@Nj@PbAZv@TJBdAZbAZ`@L`@LB@|@Vn@PzAd@b@L~@XB@VHPFrBl@~Ad@FBLDh@L?@JBTFFBB@\\JB@xBl@lEpAb@LbBf@`@Lb@Ld@LvIhC`AXdA\\vA`@h@PhCt@@@^Jh@PPDVH|Ad@`@L`@Jb@Ll@PbAZdAZdBf@dAZbAXTHJBzFdB|Bp@~ExA`@J`@L@?`@LRFr@T\\LXJ|Ap@lAn@XNr@d@r@h@VTb@^h@f@DDRRFFXXBDRVX\\`@h@TZTZBD@@b@r@f@|@LVVf@BDTf@LXXn@Nb@\\z@BJJZDJDPHT?@HZBJ@BFXHZBJLh@BJ^tBX|ATvAFd@N|@N`ABFBNBTF\\Jj@Hj@Jj@TvAHj@P`APdAD\\XdBDNZrBHj@`@`Cj@nDb@nCn@zDBPfAxGFZb@rCf@~Cd@pCBNJr@Jh@~@|FJr@Jp@tArIBJr@lEHj@Nx@F`@Hf@Nx@TrAJl@F^HZTbABJDPNh@DNVx@X|@Vp@LXRd@@B`@|@JTNXHN\\l@BDV`@NTPXTXLRDDDFLNZ^VZv@|@VXx@z@b@d@zAbBfBnBBBv@x@zA`Bn@n@hApA`ElEXXrBzBhBpBd@d@hFxFz@`APPrAxAb@d@~@`AhBnBj@n@HJBBVVFFHHZ\\lBtBr@x@@@v@x@NPbAdAlBtBlBrB@?jBpB@BxCzCh@h@v@x@ZZNLLLHH`BbBhBhBp@r@b@d@n@v@d@r@PXl@fAHTLXVn@Xz@HVDLJd@H^BHTnAFh@BPBRD`@@P@BDv@Bt@@Z@l@?bAArA?rA?DAhBA^AnCAtAAnBEbFArAKnCKrAUjCSpBKnAGdAEh@Cx@?\\?X?x@?n@@FBr@Bt@@NDf@Hv@Hv@NrALrAJrADj@?L@VBj@?h@?n@Af@Ad@Cl@KpAGv@SpAIn@Oz@UpA[jBQnAOrACRCd@IrAAp@Ab@?\\?b@Bp@@d@Bj@Dz@JpALtABb@Fl@Fr@R~B\\tDTjCTlC\\`EFr@JfA@NXfD`@|ELtAn@pHp@dI@BRfC\\`ERvBV~CH`A@NDf@Dj@Bh@@h@?j@?N?n@An@Cj@Ev@APEb@Ix@Mv@SlAOv@]jBc@bCGX[lBKt@Kv@Gt@Ev@A\\A\\AX?\\?TA~@Bz@Bv@Dn@H`ANnAFb@Nt@DT@FH^JZJ`@^jA`A|Bv@bBvBhEFNHXX|@Lf@Hb@RdAFXFb@DZBPFn@Fz@B~@@t@@F?d@?r@An@E`C?b@AX?@?PAl@ErBElDAlAAt@A`C?n@AxA?vC?^?zA?F?|A@nDB|B@l@Dv@Dl@Bj@@LHn@Hl@Hh@RdAR|@Tv@FPHTTj@JXNZn@nAl@|@^f@LPFFLNJL^^b@^PNJHVPDDLJPJRJNJB@RJ@@`Bv@DBhAh@x@^@@v@^f@ThAh@XLbAf@\\NTL@?z@`@LFpAl@PHXNxAp@`Af@jAh@VLj@XlAh@x@d@b@Xv@j@^XBBVVBBf@f@JLPTLNZd@\\j@j@bAP^\\x@J\\Pf@@D\\`AHZTt@Ph@@D@@`@rAb@tA`@fAP`@Vn@j@lAJRDHNZDHf@|@BDRZBBT\\V^DFRXDFJLJNDDX\\FHRRVZ@@Z\\VVBBBBXVJJl@h@FD~@r@NJXRFDj@^VLVN^PdAf@HDlAd@LDRHLB`@Lf@LXHF@B@|@PLBRDRBr@HNBtBRF@vALzBRlAL\\DD@F@ZDF@PDND^Jl@Rh@TFBt@^n@\\^Tp@h@b@\\`@b@p@t@r@|@r@hAxAxBV`@|AbCfC~DlAnBlAhBnApBzA|Bx@pAd@t@RZBDr@lAf@~@NZP^p@dBTp@Pp@DPJ\\BHJf@?@Jh@BJNbAHp@Fb@@LDh@Dr@Dx@?XBx@@d@Ah@?HA~@EhAC`@?LGx@Ir@Kz@ObAe@~B_@hBg@vB?@ADe@pBKb@G\\K`@[xAU`AYpAOl@e@xB_AfE_@dBQr@]xAu@bDEPUbAs@hDEPUbAMh@Kd@ABK`@AFMj@GVOv@ADERCPADEVO~@AJOjAADMrAInAAHI~AAh@Ah@AbA?P?l@?T?x@BzABpBL|HFfDDnC@r@DxB?VDzBDlB@nA?h@?`@?J?n@ClACdACl@G`AIdAEd@E^MfAc@|Cy@zFYbBo@nEId@ADIj@_@bC_@bCIj@_AfGQnAk@vDIj@CPU`BKt@?DIl@CZMjAMzAIhA?FEd@C`@K`CGrACd@?@CvAEzCCnCAbAEzCAf@?B?@?BAf@ATCdAEl@?NKfAA@?DGd@CRIj@Ox@K`@U|@Kb@Qd@M^Yn@Uh@]n@SZU^SVUZ[`@a@`@YXCBONa@Zc@Z[Pa@Te@Te@TaA^wBx@_DlAyBx@_A\\cBn@i@Vy@`@e@Xg@^g@`@q@n@MN_@`@a@f@e@r@GJ[f@_@r@A@c@hAMZABIXAFM`@]lAOx@ERCVIp@En@Eh@Gp@Eb@OzAABGj@?BEf@A@CXQnBQlBEb@AFCVCTCVIx@AFIj@CVCRIj@Gf@ABIl@CREVGXCNKj@If@ABKj@GZCLG^GXGZIZYpAa@|AQr@GVGPK\\CHIVm@hB?BKZA@Ob@?@Sh@MZEJQd@M^CFMZEJQf@{@~BGPCFABKZCFABOb@s@lBCFABKZABABABa@dAkAfDOb@i@vAgBbFKT[z@?@Qd@KXCHA@KZEJy@~BoBrF{@|BYt@{@`Ck@|AEL]bAw@vBUp@IT_@hAa@tAOf@GTABUx@CLIZSx@GXMh@IXCNGTERKj@Kj@CLQfACHSlA?@Ih@AHIh@Eb@EXCPEf@ADGj@APEXEd@O`BAHKnAANCZCXCRMxAEl@CX?@I|@Ej@AJC`@ALKlA?@QdCQvBEb@Gt@MxAEl@MxAAJE^K|@EZIj@OlA[|BEPUrAKl@G^A@AHG\\_@`BMd@g@nBaBhGCHoAtEc@bBOh@YfAEJAD_@rAsAbF_AhDEL?@Md@ABIXc@`BK`@W~@CHEPIVOh@ENGXWz@EL]rAMd@AB_@pAQp@[hAOh@GXe@~Aq@xBQh@CFO^GNYp@Yn@ADa@t@GLKRa@p@QX]f@g@t@IJEDIL[\\]b@g@h@}AdB{@`Aq@t@uAzAKJaEnEYZIHQRw@z@m@p@s@v@CBUX_@`@w@z@mArAGHEBk@n@{AdBmBtB[\\]\\QTc@d@w@z@u@z@UTYZc@d@[^o@n@A@{@`ACBUXk@t@_@j@KPa@v@Yr@IVIVM`@GXMf@WbBGf@Ed@CVALA^?ZAX?^?D?j@@|B@d@?j@?v@@d@?D?d@?HAj@AbA?XAHA`@AFG`AG`@EXAD?DK`@Ot@AFELABM\\AFELMZUh@MTILGNIPS\\IJgBdCW^{@rAMPOVMVYn@Qf@Ur@WbA?BUpAi@dDUpAMh@Uz@Ur@ITIT[n@]n@]j@y@`AKJe@`@[Tc@Xa@Re@R]L]Li@JKBUBw@F_@@u@?C?]CmAOg@KQEa@KgA_@uAg@CAs@UeBo@w@Ym@QUIuBw@aBg@qA[i@Iq@IA?A?QCOAA?[Am@AUAs@Bw@DgANc@Hy@Ts@TaAd@KDu@^YR_Ap@]\\A@[ZUVOPUXGH]h@_@n@MVCDCDMVCFGJKXEHMZQf@GPCHEJ?@_@nA?@Kh@CHG`@GZANAFM`AIx@El@?@Ch@EpA?J?l@?F?hB?V?l@?l@@x@?@?J@zA@zA?D?D?`@?DBbC?VBhA@f@?T?V@r@@B@h@Bf@?DDtA@LFpABh@?BB\\?NBf@F|APjCHlALfBDb@?FDb@Ft@@JJlAD^@DFj@@FHr@Dd@Db@@FDd@BRNlAD\\Jp@@FPtA\\~B^hCDVBJd@jCDTBJJj@b@`CBPFX@F|@dFZlB?@@DFb@PnAJ|@F^Fn@@FDd@@LPnB?F@HJ|AJnBFxAFjBDrB?hA@N?\\?vAAdBAlA?FCtAADEpAGnBGnAIpAIvAGtAAPG`AErAEpAA`@At@CpAA|A?jB@vAB`BD`B@\\Bl@?NHbBDn@Bl@L|A@NJnAP`BPxA?DL~@@FR|ATvAt@vDVpAV~@Lf@?@Pp@@FVz@Nh@J`@h@bBDLBHPf@Xx@hAtCRh@d@hATl@d@hApA`Dl@zAf@jAfAnCnA|C`B`Et@hBzAtDnA~CdBdEbBdElA|CtAfDfAnCv@rB|@tB|@tBx@pBn@|A`AzBbA|Bx@dBnAjCr@zArB`EfA`CNZrAvCd@bAP^LZdA`Ct@hBt@fBv@nBrAdDr@fBp@bB|@zBTj@f@lAVp@\\v@BF^~@Rd@Rd@DN^|@@B~@~BtAhDBFDHNd@LXn@bBVl@Vr@LXBDN^Xp@`@`ARd@\\z@Th@FJBFt@fBPb@@@jA|C@@DJ^`AZ|@\\x@|@xBfAlC^~@xBlF@FhAlChBtEfAlC?@@@Pb@@@hApCj@tAx@rBr@jB`@bAd@fADLFJ?@FPVl@"
                     },
                     "start_location" : {
                        "lat" : 39.7254041,
                        "lng" : -105.1795664
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "390 km",
                        "value" : 390017
                     },
                     "duration" : {
                        "text" : "3 hours 24 mins",
                        "value" : 12218
                     },
                     "end_location" : {
                        "lat" : 36.1807674,
                        "lng" : -115.145423
                     },
                     "html_instructions" : "Take the exit on the \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eI-15 S\u003c/b\u003e toward \u003cb\u003eLas Vegas\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePassing through Arizona\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Nevada\u003c/div\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "}enjFlwfnTTf@x@pBPd@f@lAf@lA\\|@FL?@JTd@lABFL\\FN@?HTBFb@hAd@hAHRn@|A?@Rd@Zv@^z@Zv@DHRh@@BHRFPh@rAFPJRVn@NZRd@JRZl@Zh@BFd@l@d@h@XXHFVRTPTNB@XPB@TJVJRHVHVHNBLBXFZDVBb@B\\?H?P?VAXAHAJALAPC\\GTEXGNEPGRGBC`@QTMDCj@YBAh@[PKbAk@b@Wr@_@r@_@d@Ud@UZKZKJEDA@?^KXGBAFAJCZGPADA\\E@?B?DAb@CTA@?TAXAP?H?TAf@B@?P@x@F@?t@Fn@D`@BD@XBB?D?\\BD?L@n@FF?t@Fl@Dr@FN@F@N@zBRb@BlALXEj@FjD\\xALd@FpD\\\\D@?rALfAJzD`@lAJbE`@r@HfAJJ@h@F|BT|CXdE`@vCXd@D|@HF@ZBdAJB@jAJlBRnFf@hALB?^D^DF?RBhE`@pHr@nBR~ANVBf@DJ@^DH@NBnAJJ@bAJ`BPdBNvD^F@xANpALfAJj@DfAJJ@x@H\\Dh@FfBP@?`AHpFh@L@b@DlCXv@HxBRzANxBTF@pE`@lD^`Gh@XDXB@@nCVp@HJ@H?LBF?B@h@D@?ZDj@DZDj@DZDj@F`@DZBF@R@r@HZBB@dBPl@F|@HXBNBP@@?F@j@F~@HZDlALF@b@BjBP|@J`@D\\BNBz@HH@v@HnAJLBZBdALfAHx@HfAJtAN`AJbCTbCV|@HXBnALXB\\Bb@DjALl@FRBhAJtBR`CVL@xALpBRtCXVBL@hEb@zEb@dAJj@F~ANrEd@zD^pCVbAJbCV~AN`@DbLfAnHp@|J`Ap@FhCTtCXPBlALlCVrD\\ZDpD\\XBrBTb@D@?hBP`@Dj@FZBtBTVBb@DxBTv@HfAJ`@D@?`@DzBR|BTx@HxCXbBLvBNp@@t@@@?vBBx@?v@A~@CtAGbAGh@El@G`AKRC~@M@?pASj@K`@KHAXGr@Ox@UtC{@z@[xAk@bAa@\\QtBeAf@Yd@Y@A\\Sp@a@pBwAr@k@@?\\Y|@s@z@q@ZUh@_@h@[h@Y|@_@f@Sf@Qt@Sp@O~@Sl@Ih@GjAKD?`@?PAP?V?R?^?j@@`AFl@F|@Lh@JVFRDh@L~@XtAj@^Pn@\\RJ^TXRlA~@NL|@x@VZZZd@j@bAjAZ`@TXBBZ\\X\\`BbBt@p@p@j@z@p@h@`@p@b@VPDDz@h@fAp@zAv@l@\\r@ZVL`@PdA`@p@VvAd@`@Lb@Lb@LhCn@`@JhEjAhA\\b@Lp@Tr@T^LrAd@d@PbC~@xAp@z@^^RxBbAj@X~@f@t@`@hAn@~@h@~FjDjF~C~FlDnAr@RLhDrB^TpBjAjBhAdGlDvDzBz@f@bBbAz@d@`@T~@d@tAh@r@V~@Vx@N\\Fx@Lr@Hf@FXBf@DfBN`@DhBNh@DpDXf@DXD@?j@F`@F\\F`ARVFJBZHFB`@LTFHD@?r@Xd@RFD`@R\\R@?`Al@x@l@PLJH?@\\Xp@l@p@r@tAvAd@h@p@p@dAjAbAdApCzCXZ@?LNLLfAjAtAzAhCpCdAfAn@r@@@dAfAtAzA`AdARRDF\\^bAdAbAfAr@v@rBxBXZ@?Z\\fCpC@?lBtBPPf@f@jBnBLNfAjAjDpDdBhBFFbCjCdChCDDVTJJRP\\ZjA`ApB|AhCbB|A~@z@d@h@V^RFBDBZLp@ZrAd@\\NfA\\DBHBdAZtA\\F@XHz@RxBd@tBb@D@v@PXFRDtB`@n@LdFbA|FdAb@HdARrCp@bARnATl@Lv@NpB`@rFfAvBb@vDr@`ARdAR`@HZFrDt@bAR`@HdARb@HD@ZFb@J`@Hb@Hh@JZF`@JvCj@pB`@dDn@hB\\`@HdATjDp@hAThEz@jB\\bDn@dKrBlAV|Dv@zBb@tE|@^HdARt@Nt@N^Hb@HlCh@^FjCh@B?^HdARb@JdAR@?^HB?|FjAdEv@rEx@`@FB@RBJBrBZbGv@fDb@z@H`@BB@^DfAJP@pE`@x@FxBPzDTdCLtAFrAFnBFfCFjCFlDBl@?fB@fEAfFEB?nCEhACdCIzCKrAGlAGpDShCQhBMzAMrBQbDYjAKxAMvBShAKx@Gp@GFA\\Cb@EdD[xCWvFi@~D]z@Ij@GnE_@hBOpEa@xEa@b@EB?hEa@xBSbHm@~Hq@b@EhAKfBOB?nD[n@GvCYbDWnBQTCb@Eb@E~AOtBQb@EjBOlCWb@EtEa@nBQtEa@vAMtIu@vCWXCnBQd@EfBOhAIdAKlBS~@KhAKD?`@Ej@GVCHA`@Cv@IdBOVA~@GbCStBSf@Et@INAZCp@GVCbBQ|@It@GvAObE[b@ETCp@ErCWB?hAK`@GZCh@CLATCf@E^E`@E@?b@E`@Eb@EjBQNARA`@EpAK|@It@IvAMb@Eb@ENARCB?^CBAvAM`CS|@I@?`@E@?D?ZEb@C?Al@E|AO|@IlAKvAMv@GjAKz@Il@G@?`@Eb@E`@ChAKJATC@?TCbAIz@IlBQrAKjD[hCU`CU`CSvAMb@E\\CDAd@Ef@EfAK~@IZCnAMl@GzBSfAIh@EfAKb@EXCl@GjBOtE_@pCWpAKfBObCSZEl@EXCHAj@GXCx@GlCUf@EH?fAIHAPAF?HAXAD?dBK`@A@?\\Cv@Gx@E\\CF?ZADA@?d@Ah@Cd@CVADAl@Af@Cj@A@?B?\\Aj@A`@A@?~@CD?z@AD?lBADA`@?lCAtDAhAAdA?dFAfA?nBCfA@|AAhFEh@?dBAZ?@?XAlB?dA?b@?pCAlCCT?L?b@AbBAnA?b@?@?dAAjBA@?`@?lCAtDClBC^?f@?d@?nCAb@?bIE`@?lEA|BAxA?jAA`C?tCClBAf@?p@C~AAZ?f@?lAArHChDAx@Ad@?`@?pFCp@?vAAd@AxBAzDAjDAfCAF?b@?rDCb@?`DArDCn@?j@A`@?x@?~AAd@?`@AZ?hBAhAAlCA`FC|DApBAjB?`@?lDCFAbHCdBAlA?`ECb@?V?PAJ?d@?~@?zAAvAA`@?rBAZ?fAA`A?~@Ap@?xAA~@ApA?tBAnLGfAAjBAz@?n@AzA?N?b@?l@A`CAjAAp@A|B?B?fAAv@?r@Ab@?Z?h@Af@A^?fACV?rBEf@A|@Ar@Cd@Al@C^C|BKbDOdEUhBKt@Eb@CxCOhDOh@Cn@Er@ErCQvEWdAGzEWhAGtOy@hNw@tEUxF[b@CxEWfEUHAVAJArFYzEWdAGb@CZCj@CzBMPA`DQFAdH_@nCOnEUD?dAGlAGtBOxAObAMt@MPC~@Q|A_@p@Sf@M`@OpAc@jBw@`B{@bAi@\\S`@W^UdCiBdA}@`@_@NMLMv@y@`@a@r@y@hB_C|AyB|A_CpFeIt@gAj@y@Z_@@CV[|@iAnB_Cf@k@X]l@q@v@}@p@u@vBuBzA}AxBwB`H_H|B{BnEmEzD{D\\[hDgDFGRSnBoBtAuAFERUpBoBlEkElAmAZ[POf@e@PO\\[bA{@@A\\WZUZWBANKn@a@LINKTMb@WDC^S`@SJGlAk@~Aq@b@OlAa@b@ObAU\\I`@KD?nDy@fDs@`@Kb@K`@I`@K~A]pA[zA]`AWnAa@FCXK\\MBA~Am@hCkA^Q^SVMj@[j@]NK`BeAnBwA~AsAHGn@m@\\YZ[p@k@\\[XW^[j@c@PMv@k@BC^W|@i@NIBCj@[HE`By@v@]DCZMRI^Q|@]RInAg@hAe@FCBATIJEVKpAg@ZK`@M@?pA_@RGTGRE|@U@?`@Ir@OpAUh@IHAf@K~@M|@IVAb@ED?j@Ex@EJ?fAET?b@AL?rAAn@@Z@D?F@x@@D@fAFnAF`AJ~@HjANf@FlAT~@PpAXNDb@J`@LrA^fBl@x@\\|@\\x@^j@XhAj@h@X~@h@^T^TXRB@dAr@fAz@b@\\b@^d@^r@n@dGhFx@t@\\XTRnGpFDDVTdHdG`@^~CnCBBPLDDRPf@b@DDVTDB~@x@v@n@j@f@ZZ^Zx@r@v@p@lAdAHFfA`ANLtD~ClC~Bp@h@PRp@j@lC~BbBvAdBzArAhALLxAnAd@`@rBfBJHJJNJlAfADBlC|BTR^ZtAjAh@f@j@f@`Ax@hA`Ab@^@@HFn@h@ZZ\\Xf@b@RPJHZX\\Xp@j@HFx@t@x@r@HFp@j@n@h@HHPN\\Z^Z\\XFF^ZZXz@r@ZX\\Xz@t@x@r@x@r@n@h@\\XJJhA`AdAbA\\XhAfAf@f@ZZhBjBDDr@t@tA|AnB|B`AjAHJbCxCz@fAvCnDNPX\\xAhB|AlBJLxBlCfGrHDD|AlBzE|F\\`@dDbEnAzAhAvAzAhBz@dAjBzBbEdFHHpDnEr@z@`AlAZ^b@h@`EbFpBbCX\\nAzAZ`@lAxAJLLPnCdDt@~@jKjMbMnOvNhQjDfEbAnA~CvDbCxCnFvGhI`KvL|N~@hAfC|CHJr@|@Z\\l@v@p@x@TZnAzA@@lAxAh@p@`AfA^`@^b@bAdA`@b@^`@RP`@`@`@`@b@`@`@`@FDl@j@`@^b@^PN`@ZFFJHb@^r@j@nA`A\\Vl@b@JFr@h@NJNJ|@l@NLXNl@`@NHrBnAJFv@d@fB`ATLdAf@jFdCTJtJhExIzDhPjHjGpCtB~@^N~BdAXLfMtF`InDrO`HbTlJnPlHfElBfKpEVLz@^pAl@d@R~Ar@vCpAtB|@`Ad@vErBfKrEvB`AfBv@pEpBHD|PtH|Ar@d@RnD~A`@PjBx@pLhFjH`DPJbGjC|@^|CvAnAj@b@P~BdA|BbAd@TD@n@X`CdAbEhBfAd@dDxAfCfAnB|@pAj@`A`@jD~AzDbB`KrENF|Ap@^NbBv@|NrGnEnB`Bt@rNlG`Br@|BbAd@RNFxGvCdChAzBbAnGpCfDzAdGlC@?PJn@VRJzAp@jBt@nClApB~@|Ap@`J`E`Bp@zDdBlBz@xAp@jJdEFBdAd@`@PnAh@NFxDdBtErBhDzA|CtA`@PtAl@LFb@R~CrA~Ar@rM|FdAd@dEjBzCrAhBx@hGnCdH|ClD|AtAl@xCrAlAh@RJ~@`@xFdCx@^B@n@XrAl@bBt@dBt@lAj@fQxHbCfA~CtAhChAbCfAbCfAhF|B~CtAB@ZNfEjB^PjEjBdIpDd@RfNfGz@^LFRHLFlMxFtSdJ`Ab@fFzBRJ`Br@pB|@hGlCrB~@LF`@PPH`@P`A`@nAj@f@TtHfD~@b@pAj@`@P`Ab@fFzB^PdDxAfEhBdEjBtB~@xIxDhChA|BbAfGnCpWhLd@RB@rB|@tB~@`CdAVL~SfJxB`Ah@VlJ`EFDLFHBRHLFxM`G|Ar@tErBzAp@~Ar@hB|@lB~@lBbAHDVLdB|@lAp@@?tBjAfAp@pC`BzA|@bBfA|@l@bBfArDfCzB|AZVpA`AZTlBxAxBfBHHdDnCz@r@p@n@ZV\\Z`CxBpChClBjBtAtAb@d@~AbB`BdBnCrCpH|Hz@~@FHr@t@hJvJt@v@Z\\fDlDpAtAZ\\rAtAv@x@nH|HZZbEjEpAtA@?hCnC`EhEv@z@t@v@@@XZfKtKhIvI@@t@v@@@JJNPZZfBjBdAfAtTrUxFbGfDjDpDzDfEnEd@d@lBrBhM|MpCtCdR~RvBzBdCjCbChCl@l@BDp@p@fP|Pf@f@j@l@nAtAr@v@\\^`@d@tA~AJJnAzApB`CjB`C|ApBnA`BjDzEh@v@^h@lDjFf@t@FHtAxBxA~BV`@tA`Cj@~@f@|@x@vAd@z@hArBlBnDHNvBhEVf@h@hA|@jBvBrEHRTf@xBdFlAzCjBvEXt@dBnEn@hBDHr@pBh@|A@BTt@h@xABHJ\\BHBH\\dAHVb@tADJfB|Fd@`Bn@zBBJp@bC\\nAh@tB^vAtArFNf@H\\hAnENh@^xAJd@jAvEvDbOdGzUn@~BDVr@tCfAhExBnIvAxFl@`CtD|NlCnKHXBL?@HXBJxAzFDPZjAVfARv@HZNf@Lf@BL\\pANl@Jd@\\pAJ`@`@zAj@zBj@zBJ`@hBhHl@bCx@`DLd@FT\\tA`AvDFXPl@Ld@Lh@l@|BBJXfALh@Rv@j@vBJ`@?@@DV|@`@bBNh@Nh@\\tALd@@HL`@Tz@bBjGxCxK`@rABJn@zB@Bn@vBHXv@jCp@`C~AhF~C`KJZPh@n@pBzAxEtBpGdA|CjAfDfA~CdAvC`FjNrAjDPd@fCtGxBvFb@dAPd@lCtGtA`DrA`D|AtDb@fA@BvIpRTd@?@DHDJNXRb@dAzBjAfC~@nBRb@~DhIh@hAFJLVTb@j@jAtAlC`@v@~DxHdArB`FpJDFHPJPHPvGhMjF~JR`@FJZl@vFtKNXfGlLNZj@fAf@`ApDbHtAlCxEbJ`AjBBFPZz@bB|@`B`AjBfC`FT`@P\\nGvL|AzC~BrEdArB~BnEbBbDTb@n@lAXj@|@fB~@dBhDtGv@zAvBdEjBnDj@fAnBrD|A|C|BjEb@z@Tb@`CpEr@vA~DxHp@rAf@bAP\\Tb@vAnCDJ|A`DZl@Tb@f@bA`C`FFNJTx@bBlBbETb@DLdA|Bn@rARd@Rb@^x@tA|CXn@LXl@tAp@~A|@rBlClGDHhDfIRd@@BN`@LZnCrGpAzCjArCrA|CbAdCrDvIjDjIN^`@|@h@rA@@r@`BbAbCP`@jBnEHPBDN^BDf@hARd@Tf@b@bAj@nAjAlCVf@BDhAfCfAbCt@|Al@rAbAtBdBrDN\\Zl@Zp@JPb@z@p@tAP\\zBrEZj@dFzJpBrDdFlJfAnBpBnDDJvFtJ|BzDb@t@xAbCdBrCx@pAbC|DfAdBl@`AXb@lBxCfCxD|A~B?@V^@@^j@dBhC\\h@\\d@@@Zf@lAdBbAvAFHdEbGzB|CTZfAxAlBfCl@x@VZrE`G?@lA|A@@|ApBFF?@X^X\\fBzBTXBBdCzChAtALPpJ`LbF|FvHnI`FnFvHbIFFZZtArAZ\\ZZVVz@z@v@v@x@v@jBjBBB\\ZpBlBbF|EZZx@t@`@b@B@^^v@v@x@t@x@v@ZZx@t@lChCpBlBb@b@nDhDZX`FxEzDvDNLrAnAhCdCnEhEnChC^\\p@p@tApAFFxEpEr@r@b@^PP`@`@ZXd@d@fAdAdAbANLRRxAtAFFd@b@BB~A|AxDvD|@v@rIfIl@j@@@DBZZJJpAlA\\\\LL`B|AHJNNr@p@d@`@nDhDl@j@RTxBtBb@`@lAjAvDpDdA~@b@^xApAfA~@h@b@`Ax@b@^|BjBHDbBrAfFzDd@\\?@d@Z~DnCvA~@z@n@~AbA|A~@?@f@VpBlAx@d@x@f@fCtAlAp@bEtBnAn@x@`@pCnAfCjA^N@@tAl@rDzA?@^N`@NbA^l@Tt@Zb@N^L`@N~CfAlA`@~Bt@jA^hBl@z@Tz@ThCr@v@RnAZfAVb@Jh@LvA\\j@L`@Hb@Jz@RF@zCl@RDb@HrB^VDb@HfBZb@FlC`@l@HVD|@NnC\\h@FfALfAJdALjALp@FH@z@H|ALpAJjAHX@d@B`BJH?zAFpBHH@H?B?B?L@Z@Z@b@BhCH@?jBDh@@x@Bb@?b@@X?~AB^?pB@P?vCB@?h@@R?vA?`A?zAA`@?d@?nC?jB?fAAdA?d@?\\@b@?b@?b@AR?v@A^AR?vA?lCAlBAhB?pCAdAA@?dB?fAA`@?hA?lCA@?D?Z?@?D?h@?|AA\\?pB@zFL`BFbBFf@Db@Bb@Bf@BnBN|@Hj@DtANj@F`AJtC^nAPdC^v@N~@NDBhB\\xBd@NDdAV~@Tj@Np@P`@Jf@Nn@PPFD@dCx@`@L`@NfBl@`A^~ChAlAf@pAj@VJd@Rh@TJD|BfAhCrA~Az@dBbAjDvBlAz@lAz@|@n@JFnA~@b@ZPLn@h@|CbCnD~Cz@x@p@l@j@j@jAhAf@f@LNZZb@d@n@r@nArA@@p@v@~@fAnAzApA`B|@jAtAlBjA`BbBdCz@pAdAdBfAdBdAhB@Br@nAbAjBLVTb@Zl@p@tAp@tAXj@Zn@j@pAb@~@f@jA^z@Rd@Pd@j@xAv@pBVn@^fA`@dA\\dATn@Rl@\\fAf@|Af@~ABH^nAL`@v@pCd@hBNj@v@dDJ\\\\|AH\\f@bCNp@Jh@d@`CVrAJh@Nt@F^z@vENz@FVl@jDVtAJj@bA~F`BtIJl@b@`CpDbSbBbJvBrLJj@\\fBhB~JDXJj@l@hDVtAJj@d@lCdBlJThARfA^dBThAT`AJd@?BLh@Nl@b@jBZjAd@dBLh@n@xBd@|Ap@tBJ\\Rl@^fAHRFRj@zAb@jAbAhCl@zAb@bAf@jA`@|@z@hBf@`AJRf@`ABDZn@n@lApAzB`AdBh@z@l@~@dAbBz@nAz@jAh@t@p@|@lA|AlA|AZ^b@f@PR~AfBrCxC^^LLfAdA`A~@tAlAzBpB|AlAfAv@RNf@^^VXTzAdA`Ap@\\V\\VDBzDnCnBtA@@\\V^VxMlJn@`@VR|@n@fAv@|@n@vDlCt@h@\\Td@\\nBtA\\VLHFDb@XjBrAdBlA^VnBtAlAz@l@b@PL^V^VbAr@`BhAbAt@f@\\nFxDZTdAt@fCfBdAt@@@LHLJ@?fBnAz@l@RN|B`BtBzA@@|B~Ax@j@|@l@^VZTZRb@ZTNzAfAbBfA@@JFPL^T`Al@z@j@|A~@dCzAjC|A~Ax@JF@@~@f@TNfAl@`Ah@B@|DxB|Az@DBxEjCd@XpGlDjCxA|BpAbAh@lCzAlBdA^R^TvEhC|CdBJFrFzC|FbDtKbGfCtAPJjBdAtBjAzElC`EzB`ExB~@h@\\RB@hIrEpN|Hb@V^R|DxB@@^R~GvD^Tv@b@lBdAl@\\PLl@X\\RfCvAdDhBf@Xf@XRJRJB@JFxEjCPJr@^hDnBhDhBB@dB`ANH\\RzAx@`@Tx@d@hAn@p@\\fDjBfAn@~GvDJDRLVLdCxA`@RZR`@RVNHDHFRJRJRLPHFDJFRJRJZRHDPJRJRJRLPJRJ~A|@d@Vf@XPJRJJFZPRLPHRLRJRJRJj@\\jDhBRLlB`Ah@XJDj@VPJ|BfAzAr@pCpATHtCnAx@\\x@ZlAd@xAj@jFjBzBx@|FhBrF|AZJh@NNDXFTFlGzAVFh@LtAZHB|Bd@|Bb@z@PvAVND`Cb@f@Hh@J|@Nl@LTDnARn@Lx@NZF~@Pn@J@?`@Hj@Lf@FVDn@Lx@N~B`@xB^xAVhDj@rAV~@NtHtAxFbAXF\\Fp@LtATLBB@XDvDp@jBZxAXn@JNB`APLBF@nBZRDfATn@JRDLB^FfDl@ZFF@^HTDl@JpAVRDVDRDTDbBZD@TBRDTDTDh@JTDTDRBTDTDF@JBTDH@t@LRDLBf@FtAVPBVFx@Jf@Jd@Hj@Lt@NB?RDNBdAP~@Pb@Hb@H`@Hn@Jp@Lf@H`AP^FZFB@fARdAPb@Hv@NlAThBZt@Lp@LlCd@~@NlAT`@FlATRDHBVDF@`APj@JRDH@t@LTDPDpATbANRDTD^FPD^HB?d@HrATxB`@~@NdDl@hAPb@FHBZF|@NB@h@HTDj@Hh@Jd@JZDRDj@L|@NTDTDJ@NDx@NPBJBXFd@HJ@`@Jz@NZFfAR`@FTD^J`APp@JF@`@Hd@HRDTD^Fn@LB@XDrAPZFf@Jf@HRB`APh@JD?d@HTDJB^Fh@JRBH@f@Jh@JH@d@Hx@N|@NfARF@NBPDL@rAXD?PDt@LJB~B`@HBr@J`ARj@JTDjARH@f@Jx@LZFvAVB@`@Fb@H^FB@`@FVFJ@x@NJBp@Jj@LXDd@H^HlARZFn@J|Bb@XDtF`ARDXFzCf@RD`@Hl@JhBZVF@?`@H`APlB\\@?hDl@TDNBD@F@h@H|HtAd@JrB\\n@L|AVdARd@HZFZFr@LD@dAP~@PD@B?j@JTDH@|@PfBZB?lCd@ZFhAR|@PF@TBTD|@PVDXDB@B?dARpATp@LL@PDt@LF@b@Hr@L`@FdARNBRDTDb@DlB\\@?TDnDp@D@ZFpHrA^HHBXDPDbFz@bBZr@LXDVFhBZ`APzF`AdAP`@Hb@Fb@HtF`AHBdAPVF~AXTB`@HvB^dARv@Np@JxLvBtAVtATt@N`Dj@LBjCd@zAVLBTDdAPn@Lv@NNBhGfAxGjA~GlAdAPb@H`@Hb@FdARnDn@b@F`@H~I~AD?\\F`@HtATn@JlANt@Ft@J`@B\\Bh@D^Bf@Bb@@bABj@@fA@r@Ax@AVAz@CfAEJAz@E|@I~@Kv@IbAMJCz@O|@Qr@OVGn@OTGl@QJCTGd@OtAc@rF_BDCB?^Kp@Mt@MB??A^CB?DAXCB?JARA@?h@CfA?f@@`ADZBb@FB?D?\\Fl@HRDB@NBLDTFLDd@L@@ZJB?\\Lz@XLDfCz@ZJhA^bA\\D@b@Nz@XdBj@bA\\`@LdBj@tBr@PFJBtBp@fF`BtAb@tAd@d@PB@b@Nz@Xb@NVHnBp@vC`AjA`@ND`A\\HBlA`@XHNF|@ZZJNFhA^`@LVHvAd@zAh@@?bAZ`@LFBFBNFn@RDBj@PB@PFRHD@~@XZJl@Px@Vh@NHBNDJ@JBJDNDTFLBNDf@LJBPD^HjAX^HF@TDbARLDZHD@JB|@Pv@R@?b@Hb@Jz@Tz@XVF`@LPDFBFBXJbA^D@ZLDBn@Tr@ZXLFBXLDBXLf@TDBz@`@`@Px@^^P`@Rf@TdF~BbBv@VJFBhBx@`A`@lAb@dA^~@VjA\\z@RLBb@HD@JBNDF@f@J\\F`@HdATH@PDv@PrAVfARv@PzAZdARbAR`AR^HD@b@HRDp@LZFD@@?XFF@ZHTDRFZFp@NbAZp@VFB`@PVJl@VTLDB^RPJFDl@^v@l@t@l@tAfADBhCxBzAnA`Av@VRrC`C~@v@VRb@^VRDBpAfA~ApAVTnGjFj@h@p@j@r@l@\\XJHPNJHhAz@^\\DBFDnAdA^XDDPLh@b@VRz@t@z@r@n@h@j@d@rAfAzC`Cf@Zf@^\\X\\VbAp@`An@ZPhAp@ZRPHpAt@xAv@t@`@FB\\PFDrAp@@@FBb@T`D`B`Ad@PJLF@?~BlAdBz@bB|@xE`CbBx@^RNH`Ad@@@\\P`@P^RTJRJJF^P`@P`Ad@^PLFRHTHHDRJLDdBl@hAb@XJb@NdA\\~@Z~@ZfBl@~@ZPFtBt@@@B@ZLt@ZnAj@|@f@p@^zA|@VNv@f@zAfAp@f@HFDBLJPLTP^VvAjAtAdAb@Zt@j@vBbBNLBBD@FD|BdB\\V\\Vz@n@\\Xv@j@nA|@RN~C|BnBpAXRrA|@rAx@BBjAt@\\TPJlBjAfAr@bE`Cx@f@bAj@^RlC~AHF~BpA^T^Rh@\\^Tx@d@rAv@ZPp@^^TVLz@f@PJFDd@Xb@X\\Ph@ZRJfAn@HDZNFBLH`@X~@l@j@Z\\RfAj@~A~@~@l@b@T`Aj@HDv@d@B@|@h@DBbAl@VNbFxCp@`@d@Vb@VRLNHTNLFVNd@XJF@?`@Vx@b@NJRJr@b@d@Vb@Vb@Vz@f@tAx@d@Vb@Vb@V^TTLf@Xh@Z|@f@z@f@\\R\\RDDr@`@JF^TNHNH`@V~@h@^T\\R@?^T\\Rb@TZRB@^TZPB@^Tz@d@BB@?^TXNDDXNfCxA^TLFHFf@XdAl@PHHFRLJF^T^RRLJF^TRJJF^TRJ^T|@h@DB`B~@`@Vj@\\dCvAvBpA|@j@JFzCnBpAx@\\Vx@h@|A`ABB^TvClB`BfA|@h@~@h@^R`@PVLf@Tf@T|@XRF~@X`AV|@R\\Fb@Hz@LH@b@FXBH@b@Bh@B`AF^B@?fABb@@b@@b@@b@@H?|@Bb@@B?fBDB?F?V@`ABh@BB?^@D?bCDhADjA@@?`@@d@B~@BB?b@@B?P@L?t@D~@D|@H@?@?bAH~@Hh@FB?PBLB|@Jj@FRBNBB?\\FdC^FBB?^Fp@NhATvAXbBb@dBd@jBh@tAd@h@PrAf@z@Zz@\\vDbBx@`@z@b@bB|@bAl@v@b@h@Zn@b@DB\\Tj@^tA~@jBtAXRp@h@r@l@VRTRFF`@^t@p@x@t@t@r@@@\\\\ZXp@p@z@z@x@v@rArAJJf@f@z@z@pBnBhBfBxAxATTp@n@LLRV`@^j@f@tDrDtBpBFHnBjB@@XZ@?nDnDRRv@v@x@x@rApA\\ZZZv@v@v@v@lCjCtHpH@?ZZbA`AhAhAv@t@ZZPPHH@?lCjCd@d@NN@@nBlBFFlAjAXXtBtBhCdChBhBbB~Ap@p@jBhBb@b@bAbALLZZ|@x@r@r@rApAdAdANNZZVVBB`B`BfBdB`@`@^^dAdAl@l@~@fAXXp@t@`@d@XZDFn@t@X\\x@`ATXfArA`AlA`@h@TXLRr@~@^f@z@lAFHt@dAt@dAp@bAd@r@Xb@h@z@hAfBXf@V`@PXXf@V`@Vb@?@V`@\\l@Zj@Xf@h@~@HN|@|AZh@lBhDXh@@@V`@R^zB|DfB~CbAhB@@BDR\\zAhCj@`A@B@@j@bADJLR@BR\\DFj@bAT`@R\\@BR^PXdAlBdAhBHN`BvCnBhDt@pADFDF@BBDBF@@DHbAfBl@fAzAhCp@lABBNZB@?@HLFLHLl@fAf@z@r@nAj@`ABDv@rAXh@BDVd@FJ~@`BZl@Zr@Th@N^Pd@Rl@HTJXFTHXHZJ`@Pp@R~@Lv@FVDTD\\DVHr@F`@Hr@Jp@Hj@@JJt@Jp@FXDZNr@Lj@Nn@Rt@?BXbA^jARh@N`@Vl@Tj@Xl@Xj@Xj@f@|@^j@RZV^TXNRFHPTNPr@z@n@v@h@n@DFb@f@@B\\`@xAbBV\\NPRRLNj@p@RT`@d@X\\v@x@JLBB`@`@ZZLLLL`@`@VTTRBD@@NLDDb@^VV`@\\DD`@\\PP\\Zv@r@x@t@VR\\ZDBbA`A~AvAb@^n@l@VTZX`@\\TRRPHHdA~@lBdBn@j@`@^~AvAFFXVn@j@FFp@n@ZZ^b@TVt@x@b@h@PRTZl@x@FHV^x@hAjAbBZd@\\d@NP^h@j@x@DDp@`Ap@~@@@j@v@V^DFdAxA~BdDnBlCj@x@xAtBv@fAHLNPLRX^^f@PVJLp@~@^h@j@t@PTFHp@`A`ArAb@j@t@bAp@x@`@d@^d@b@d@\\`@NPJLTTNNLNPRXZh@h@b@b@RRHJ@@NLt@t@fAbAfB~A@@XV\\XNLBBZVf@`@v@l@bAv@f@\\d@^hAv@TNt@j@lAz@lBrAv@j@lAx@r@d@b@\\l@`@bAr@~AjAjAv@`CbBBBzAbAhAv@PLPLb@ZLJhAv@nAx@z@l@`BhAt@j@VNHFnAz@`CdBTNb@Z|AfAhAv@v@j@d@ZbC`BrCrB`C`BRNnBrAzAfAvCrBt@h@f@\\RN^VB@x@j@\\VvBzAzAfA^VnAz@dEtCNJvCrBnBtAZT\\VjAx@zAdAhBlABBx@j@~@n@^VrBtADD\\Vb@ZrBvANJhAx@hD`CnAz@hCfBn@b@zAdAzCtB|@n@XRv@h@t@f@jAx@RLnBtATP\\VnA|@ZTj@d@t@l@d@`@r@l@`@^`@^ZZXX@@^^JJJJd@f@hBrBX\\d@j@|@jAFHf@r@HJX^V^@BNRj@z@v@nAXd@PXd@x@v@tA@BbApB~@lBHTXn@JTFLZv@Vl@LZJTPd@BDL`@FLn@dBDLr@xBRp@Nh@^vAFRNl@J^XhAPv@HXR~@n@|CVnAXnA\\bB^hBXtAJh@@@Jf@Jb@Ln@Np@H\\ZzAz@vDPp@f@rBt@rCRx@`@|AXdAd@bBtBpHbAfDNh@~@~C~@`D^pA~@`DvBrHpBxG`A~C\\jA\\fAn@zBBFz@xCj@fBj@hBDLX~@Xx@Rn@FNh@|AbAvC^bAPf@b@lALZTp@Rd@BHZx@Tj@b@nA`@bAh@zAPd@vA|Dd@nA@BNd@d@rANb@@B@@j@fB`AvChBbGj@nBVv@Rr@j@lBLh@lAfEFVhA|Dp@nCHXfBnHXhA@HLf@Lh@Lh@VbANr@Lh@XpAZrALh@TdABLXrAf@|BDR^hBJb@XzAXrAPbAJd@BJF\\j@tCDR@JBHDRJb@Jh@Jj@DT@B@LDN@JBLDRFXFTHb@@JJb@@B@JDLFX@JBHBFJb@Rt@Nf@JZFRFNL^HPHLRh@HNJPP^T`@PXNTHJJNLRV\\b@j@RTLL\\^JLRPZ^fAhAVVbAfALJNPpDvDZZ`@b@RTZZ|A~AlDrDDD~LjMZZ`@b@ZZX\\TRb@h@v@|@nA|Al@x@@Bj@v@rAtBT`@NVFHDHT`@PZz@bBFJJT\\p@Pb@@?Vl@\\|@^~@Xt@DNj@~ALb@JXJ^Rr@Vx@H^d@fBNp@FXNn@d@zBVpAdAfFnE|S?BNp@H`@?BTfA\\|AF^XrABL@FDRLh@R`ADP?BDRl@pCDTFRDTZxADLDTTz@b@fBPt@d@`BHXPn@Nb@Vz@ZbALf@Z|@Vx@v@~Br@lBRf@j@zAf@lAZt@rAzCv@bB`@~@^r@?@JPh@hA^t@pA`Ch@~@T`@@@PZnDpGf@|@z@xArCbF`@p@hCrEDJT`@NVT`@FJd@z@FHBFBDhApB@@DHVb@z@zA?@DFlAvBFJhBbDT`@p@jAlApBNV^l@l@`ANVjAfBJPXb@pB~C@@`@n@`CzD`@r@DD?@\\j@Zj@~@bBh@`AT`@|@bBjA`ClB~Dd@`AdBnDZn@`@|@b@x@n@tA\\x@pAxCb@hAz@vBf@vAVt@n@fB\\`AVz@b@nAh@bBX~@DLVr@HZBHFN~@xCr@xBpDdLBLzCnJNb@Lb@|@nCvArEbDhK^fA\\fAdC`InA|DfAfD`@lALb@Rl@Pd@Tr@Xx@Vp@r@bBNZTb@d@~@Vf@Zh@`@h@\\h@h@|@^b@f@p@n@p@p@r@hAhA|@v@j@d@rCnBPJTNNHXN\\NRHPJ^N@?n@X~@\\r@ThA\\l@R@?fD`Ar@RbAZp@RRFPFlA\\v@Tb@L~@Vd@L^JJDD@hA\\~@VzBn@rGjBpBj@|Br@h@Pb@NNFPF`@Nl@Vf@RXN`Ab@B@v@b@B@d@VXP\\TD@dAn@VPdAp@v@l@`@ZbA|@f@`@x@v@z@x@RTTTlArAbBrBDDV^HLn@z@h@x@^h@d@x@r@lA|@bBtApCtAnC~A~CLR~CjG~@hB~@lBHNJTZj@NXzEfJz@lBlDbHbAlBnAvBJPNR@BBB@DBBFHd@r@t@hAHLV\\X`@b@h@n@x@JLFHNPb@b@j@n@d@d@bA~@t@p@l@f@XThAz@HHd@\\LJtA|@h@Z`@T^TFBHDl@\\jAh@XNHD\\PLFLFJFNFRFTJRHl@Tr@Tx@Vd@L|@TtAZvB`@j@JF@`ANlBR`DL`@@|@B`@@z@@T@xAAxACzBMlDOt@C@?`BI`@AZAnDIvACfEGxCGpBGB?hAGxDMnLa@tFYrAIf@AtCKb@Ct@Ch@CtAEfBEbA@n@Bf@B|@Hl@HrAV~@Vp@TB@?@t@Xh@RPJ`BdAt@j@d@`@tArARPVTVV`@\\x@r@j@^b@Xz@d@r@ZTJJB@@XJLDj@P\\J`@J`@H^F~ARpC\\VDRBz@Jp@JdAL@?hBTRBtAPVBn@Hx@JJB^Fj@Hv@NH@l@Lf@Jf@LJBt@P|@VnA^JDr@VrAh@pAh@vAn@dAj@d@VJF@@~@h@v@h@|@l@dAv@n@f@l@f@bA|@DDZX\\Zh@j@r@r@NRZZt@x@jBtB@@XZ?@p@t@bEtEPPZ\\h@j@j@n@`@d@\\`@NPNPRTZZTXNNLNNLXZXZVVXXp@n@VRZXZR^ZHHXTPL`BhA`CzAdAp@rAt@f@Xf@Xj@ZzBpA`Bz@tC`B@?|A|@b@Tv@b@nAn@RNtAt@JF`Af@~@h@~A|@vC~AFD^Tb@TTN`@RTNl@Z`B~@|MrHLFhBbApBhAPJ|DxBjCxA|A|@~Az@tAv@f@Vf@XPHDBVNBB`@THDHFt@`@PJf@VxAx@n@\\HDfBbAl@\\HFl@\\RLj@Z@@d@TFDx@d@vBjA|@f@NHd@VbAj@dAl@z@d@x@b@`DhBdDfBdDjBdB`AvAt@fBbArAt@|BpAVN~BrANHpBfAhE`CfAl@p@^lAp@v@f@FDVPNJPLl@b@bAz@TRNNp@r@^b@`@d@^d@BFX\\h@n@V\\HJTV\\b@@?^`@`@d@NNRR^\\b@^RNFFFDRNPLb@Xf@Z`@TFBd@Vd@TTJVJb@NZJJDl@Pf@Ld@L\\Fd@Jh@Hj@Fj@FTBR@X@f@B~@BxA?l@CtDA~BA`AAj@?^?H?D?R?P?h@@`AFB?J?F@b@FXDXDb@J\\FTH\\HPFRFXJRHPFRHp@Zf@Zb@Z`@V`@XTNf@f@d@b@PPZ\\NNZb@l@v@Xf@Vd@Xj@Vh@Tf@`@bAZbAXx@J\\XbAPn@BFJ\\@DHZ@D?@Nd@Pl@Pl@XbAZdAXdAZdAb@zAt@jCDPLd@DLXdAZdANd@@FL`@Nh@Rr@b@~ATt@FVFPZjAxCjKfC`JnAfERr@\\nAl@tBFTNf@DNf@hBHXb@~A@F\\pAXbAJb@VjAJ^R|@?@`@dBP`ATfA`@tBDTTnATrA\\zBLx@Hj@@FR~AZhCRhBLhA\\hDJjABZRfCDd@Dp@@JB`@@BBp@?LBb@Bb@Bh@@R@J@\\BZ@\\?NBVFzA@h@F|A@h@?JFbDBvA?T?V@jB@^?hB?hA?zACpA?r@Av@ClAAx@CtAGvBKvDAl@G`CCj@GtCKxD?BG|AEzAAf@CpAAr@@h@?`@?FBf@Bf@@\\BXFh@Fb@BPHb@FVH`@H\\HVNd@L^JVNZJRJRJPLT^h@\\d@PRPRVTLLNLHHp@j@xAtAFDnAlAhAfAd@h@`@d@\\d@\\j@Vb@FNXl@FNJZHPLb@DPBJLd@H^FXF^BNFh@D\\Fr@VtC@HT|BJfAd@rEj@jD\\dBFZPt@FV\\lAJ\\Nf@Rj@DNn@fBFJl@|Al@vA`A|B^|@@BZp@Tl@Rl@Ph@Tr@VdAHd@Hh@Fb@Hp@Hz@Dr@?@@X?N@b@?pAAbAEp@Er@En@M`AE\\Kn@YdB}@rFGXCPG\\c@jCSrAGd@Mt@CTKz@MxAIbAGhACz@Cn@APEjBA`C?dA@|DA`B?N?vA?z@@vB?jB?n@?jCBjNBrBH~GBjA@lA@bB?hA@~@?j@Bl@Bv@@J@RBTDf@DX?@@HLt@Nt@L`@b@~ATj@Rd@T`@LTHL?@`@n@b@n@@Bf@p@HLLP@Bf@t@zArBPXJPNRNVHL@@LTNVFN^v@LXHTTl@Pl@@BFVBL@BFVDNF`@Fd@BNFj@?@BT@PBh@@p@?J@x@?RAV?P?@Ez@C\\?BGp@QrA[nB]zBId@CRUzASpAEVCPGb@AFUtACPCXEXE^AHC^C^Cj@?@?BAd@?@?h@?@@fA@ZFjADZB\\Jx@BLD\\BL@DN`ANv@PfALv@@HH`@D\\RjALz@Fp@DZBVFZN~@Jt@@FFj@Hj@BXB`@Dl@@X@\\?\\?^An@Cr@A\\K|AUbD?BEl@Ej@Cj@AHIlAEl@Cj@AVARIxAIxBCx@Aj@Cl@?HKtEKhDAt@CxA?JClAAj@Cl@CrA?DAj@Cl@An@GbCAv@A^IrDAl@GrDEhBIxCChBCpAE`BCxA?rABdA?BDv@Dr@Ft@LdAPfAPv@Rx@J`@Nh@@BFRL^Vn@Xn@b@x@Zh@Zf@p@z@LPNNh@j@n@j@b@\\v@l@PL|@p@\\Vz@n@^VFFpA`A^Xx@l@\\XzAfAXT~@r@rB|Ax@j@v@l@~@r@^Xj@b@`@\\rApAp@v@t@|@PVh@v@^n@p@nAp@vAZt@Vp@Zz@f@dBDNFVHXFXFZFXDVDTFXHn@F^@JBNLfAZlDJbAPjBThBVdBDXDXFXDXDX@FDRDVDXDXDZDXDXDZ?B@FDd@BZ@N?J@Z@T?B@V?T?N?R?PAZCdAKzAIdACXCXCXG~@Ej@CZCZCZ?@CVCVCf@Eh@Ep@CZAXEnAAX?ZAZAV?X?h@AJ?b@?p@?X?Z?X?V?Z?Z?t@?@?r@?Z?n@?jB?t@?v@?Z?X?j@@|@?D?x@AP@d@?f@?d@?h@Bj@Bp@Fr@BXDj@F`@Hl@Ll@Jd@H\\Lh@Ph@Rh@Xv@`@|@l@nA\\v@|@tBt@rBf@|A@?f@pB`ClKdApELj@Nl@Nr@J`@ZpANp@Px@HXPx@`@bBFV?@FVFXFVHXBNBHFXFVFXPn@FXFXHZ?@FVNn@Nn@HXBJBJFX@BFRHVHXDPBDFTJXHVJVHTLZHRFNBDJTBFFLJTBFHLJTLTJTLRLTLTLRLRNRLRHLBDNRLPNRNPNRNPRT\\`@^d@p@v@HHRVBBX\\RVb@f@r@v@~@fAvG~HDDHHFHJJFFBDv@|@BBFHHHFHFHBB\\`@PRRTFHFFNPNPNPNPDFFHNPNPPVLPNRFL@@FHDJLTNXLVJTJTHTHTHVJZFXBHDLFVFZFXF\\Lj@Nr@TjANt@ThAFXFXHV?BFVFN@DHXBFDNJVHRJXJTJRJT`@t@\\f@d@j@hAnAhAlANPbAfAzA~ADDTV~@bA^b@^d@f@p@j@`Ad@`AZt@HVHVFVHVDTX~AVdBJ|@DZDXD^Hl@D^Hl@DZD^Hn@Hp@DZRhBThB^|C`@bDHn@DXHh@Jf@Lj@FV?@HVFVHVJZHRJVLZJR^t@`@p@l@x@j@p@t@r@TPZT\\T@@VNVLRJRHPHTHRHVHRFVFd@JRDTBF@PDj@DT@d@@J?\\@vAAlAArA?`@?\\BXBZBf@JD@RDf@Pb@PVLHFTJDD^ThAt@f@\\f@\\PLHFDDTNn@b@n@^b@ZTNf@^RLh@`@ZTZZ^^RVX^X\\RVLPZ`@r@dARZZf@Xb@NR^d@HHJLNNNRVVLLPLPL`@\\b@ZRNRLZPj@Xj@XTHTHPBLBb@?L?LARC^CPARA^Cn@An@Aj@Av@AhCGD?V?ZAX?VCLBnAEr@Ar@Ap@Af@BX?h@@XBd@F`@B\\Hp@Nn@RRFz@^RHPJD@BBD@PHhB|@RHDBd@Tj@V`Ad@r@\\JD\\Pb@RRJZN^Pf@XPJRLB@\\Tb@Zp@p@RT\\f@Vd@Tb@R`@@@HRHVHVBJDJ?DDPFV?@DT@BDX@JBJB\\@@@TBZ@^Bn@?X?V?B?NAJ?J?J?FAT?B?XAp@A^Ap@?`@An@A`@Av@Ap@?VAV?RAbBCnAAd@AZ?VAT?F?NAL?\\Cl@?@AZAXC^CXEZEXEZETA@GXCLEJADCJEHELKTIRA@GNA?ADGJEFEHGJORKNABKJCDGFGJEDMNKLY\\u@z@SVED?@IHORMRMREJEHEFGLABIP?@GPABGNCFCHGR?@GPGVGXCL?@CJAFCPABCPEZKt@Il@EX?@ERAJKl@ETI\\K\\Qj@ITMVKTMRMTA@KLA@ILA@CBOPEFKHA@MLQLMHEDQLE@?@MFA?OHA??@YJEB[LC@QDQHA?i@PWJODA@MDC@UJGBKDC@OFQJSLQLQLSPOLOPOPEFIJMRMPKVMTKVIRABITIVGXCFCPA@CRABCPAHEXCRE\\C|@?j@@|@@TBd@BRFd@Lr@XlA@BNl@`@`Bd@`BDT\\rAj@vB`@pAFTHTFPBHBFFNJT@@FL?@NXNXZb@JL@BNPTVXZ@@JLBBPPPRNNBBRV@@BBFHFHDDJJLRBBFHLPDFDFHL@@?@HN@?HPBDNXHPTl@P`@J^FTHVFVFZDVFZD\\Hl@BZBVDv@@`@@Z?V?\\?f@?L?h@?JAn@?^?\\?r@Ap@?t@At@?v@Ax@?t@?Z?TAt@?z@?t@@d@?H?j@@`@@J?^@P@`@Dp@Bj@B^Bb@BTDj@Db@B`@BP@LBPVjBJn@Jr@FXF\\FVFXDVFXFVHZH\\Pj@HZHXHV@BFTFRHTL\\Ph@L\\`@~@JVLZXj@JVXj@r@vAXj@Vd@NZj@jAZl@v@|Af@`Af@`Ad@bAXj@Zj@Xl@Xh@Xj@r@xAf@`A\\r@@@FJJT?@Zj@bBjD@?Rb@z@bBrBdE|AzC`AlBf@bAtEhJrFvKhBtD`@x@z@bBn@pANXhBpDTf@Tb@j@jAlA`Cr@vAXh@d@`AZl@^t@DH~@jBf@dAf@~@|@hBbApBpAhC`@x@R`@p@tAn@jAP^x@bBXh@nAdCfBnD|@hBt@zA\\p@R^^t@h@fAlCnFtC|FzAxCzAxCR`@n@lA|@nBP^BFLZVn@Pf@L\\Rh@J\\Rl@J\\@BJ`@Rp@`@~A`@dBLt@HZ@J@N\\vB@@Lt@NpAFn@Jt@@PHnABRBRBZ@VB^?DDz@F|@D|@?BBb@@F@VDv@Bl@H`BLfCHlA?@Bj@VvEBp@Dr@HvADr@Bp@JbB@^HjA@d@HxADj@Bh@Bf@Dl@?BBTB`@@NDd@DZBTHp@D`@Jl@F\\@JH^H`@DP?BH\\Pp@Lj@FPDLNh@L\\Tl@Rh@N`@P`@BB?@LX@BTb@~AzCd@v@nA|B^p@~@dBn@hA|@bBdAnBVb@Tb@Vd@Zh@dAnBJRVb@R\\v@xA\\j@FL\\l@rAbCh@dAPZt@nAp@pA`EpHt@tAt@tAv@tAf@~@f@~@v@tAt@tA\\n@d@x@v@vAZj@r@pAt@tAbAjBzB~DBDTb@LVh@`Af@~@d@x@Tb@HLt@vAjE|Hl@hAFHt@vAf@~@HNXh@PZhCpEzBfEFLBBNXb@v@r@rANVj@bAJTHLhCvEJTh@~@LTdAlB?@Vb@LVj@bA\\n@t@tAp@lA\\n@HLt@tAZj@\\l@`@t@Vb@Td@T`@R\\LVtAdCP\\dEtHTb@dCpETb@~S~_@nIpOnDtGTb@p@lAh@~@Tb@Tb@^p@~AvCJPNTTb@T`@Tb@l@fAl@fALT\\n@Xd@R\\PZh@|@HL^j@Vb@T\\Xd@TZR\\`@j@\\f@^h@TZd@n@j@t@b@j@JN^b@p@z@LN|@fADDjArATVLNPPVXB@t@x@FHjAjARR`A|@LLdB~Av@n@tAjA`@\\v@n@d@^VR|@t@XTrAfARNl@f@j@d@LJxAjAf@`@jB|ArC|Br@j@~ArADDhBxAbF`EfA|@jBzAtBdB`Av@|BjBbBtArC|BdAz@r@l@zCdCrHfG^ZzAlAv@n@\\XVT|BjBZVx@p@h@b@xAjAPNx@p@\\X\\Xn@h@LHl@f@NLJJDBt@l@\\XB@v@n@x@p@z@r@xAjAz@p@ZXVTt@p@r@p@XZVXr@t@`@d@n@x@PRLNJLRVLPPXJNZd@^h@LRNTPVHP\\f@Xh@@BXf@Vf@NXXh@Xj@JVRb@BFN\\FLf@lAZz@FLXv@BFNd@L^d@vAJ^Rn@J`@\\pADRFT@D`@dBJf@h@dCVhAVhAn@tC\\|ABLHZVjA@FBFVlAZrAVnABJH\\^~An@xCHX^`BFZBLZvAf@|B`@fB^bBj@hC\\zAXnAl@tCxAzGb@nBl@lCLf@XrAJb@Np@Nr@VfANr@H\\Ll@XnANn@Np@H^TbAPv@TfAPt@Np@Np@Nr@Pr@H^Ll@VfAVhAF\\Nl@H\\DRXpAR`AHb@FVVnALn@DVFZNr@FXDVFZNt@Lr@RhALr@DVLt@Lp@p@fEVxARnARjALr@Jp@Lr@VxANbAFXRlARjAXfBXhBJj@jAdHDRLt@XfBRlAl@nDF\\Lx@`@|B?BHj@VtARpAZhBTnALz@TrARjAFb@TtATtAJh@?DTnADVN|@Hh@Jj@Nz@DXNx@Jr@F\\TtAVrALv@BRBHDTBN\\jBDPJh@FZFVFTPp@Pr@DLBHRt@Rr@HTDLVv@Nd@Nd@Zv@h@xARh@Tn@Xr@Rj@HTP`@Nb@Zx@Tn@^bAZz@P`@b@lADJp@dBVp@Rj@BD\\|@Nd@FLJXd@lADN\\|@Nb@n@~AZ|@Pb@Tn@Tl@HTRf@Z|@Vp@N\\rBvFLZFPPl@DJDPFPHXFTNh@\\bBJd@Jp@L|@Jv@Fl@JhAFn@D~@DlABd@@jA@x@?l@A`@At@Al@GvAInAGt@CZGt@C`@CTGv@AXE^Ep@Gp@MhBKnAGt@CZKnAGx@G~@El@Ep@Cn@Cj@A\\E`BAt@?`@Ad@?d@?Z?\\?p@?|@BlA@V@t@Bt@Bt@B`@FhA@XBRJbBD^@PBVDZ@PFb@Hn@Dd@PlAXdBJl@Jl@@HFXLj@FZT~@Jh@Pn@HVPr@FTHVRp@Rl@Lb@Pf@Vn@^dAVn@n@fBnFxNt@xBZbADNV~@Tx@BHH^FVPp@Pz@RbANx@PfAF`@NdAJv@RbBp@nF@N@H`@hDRzAHn@XxBDZDTJt@N|@Jn@Np@Ln@FXF\\HXLj@XjAHZPl@HXHTFTNf@@@Vx@JVHVN^Zx@JXJVZr@P`@Zp@Xj@Vj@LVHN^n@Zh@Xh@Zf@NTFJRZp@hAh@z@f@x@bC~Df@v@h@|@x@rAj@|@bBpCHLhBvCJNLVx@pAl@~@h@|@f@z@x@pAPXxExHnAtBNTLR|@vAf@x@v@pAr@hAd@v@n@dAb@p@`BlCHNPVXd@zN|UrAxBR\\V^NVZd@dAfB\\j@v@lAZh@h@z@^l@PX|@xA`@n@Zh@NTLR\\h@d@v@PXNTLRh@|@Zd@LTNTf@x@DJFFz@vAh@|@V`@BD@BPVf@x@fAfB`@n@Zf@`@p@Xb@d@v@`@p@PVXf@j@|@l@bAf@x@x@pA^j@Xf@\\h@l@bAh@x@j@`AZd@Zj@Vb@^l@d@x@Xj@LTxArCVh@BDLV^z@NXHNJVJTJVNZFNJVFNFNHNJVJTHVJTFPf@pATh@JVVn@Tl@jBrE`@bAVn@b@hAJRl@|AfAjCx@rBHTJXz@tBJVVn@Rd@FR\\x@`@bALXHRPd@P`@HRLZ|@|BFLLZtCjHbAdClAzCpBbF|@vBbCfGbBhEdCjGh@pAzDvJPd@bBfE`C~FPf@N^rAdDpAfDZz@L^Tt@d@~ARr@Nl@b@lBRz@^rBZjBBVLz@RdBFh@D\\BZDj@RbCBj@B`@@NBl@FjB@t@@p@@bA?bB?tACnACpAEnAGtAGpAKtAGdAG|@MnBIrAUzDOvBEj@Cj@G`AMnBEj@MzBGp@KdBMhBCh@AN[fFUxDSnCQzCS~CEn@QjCMxBItA[~Ee@vHUnDe@rHCVAXMlBCXSjDEl@IrAEj@K|AUnDIxAC\\Ex@Ej@El@Ej@GjAGv@El@OhCq@vKQdCOlCCVOfCEv@K|AEl@El@C\\UzDEn@UnDG|@QxCQjCARCXIpAEv@IpACXAXGv@GbAEl@Ej@Cf@El@Et@CZEr@CVAXEf@Ej@A\\AHEh@Er@Ez@Gt@?LABCj@IhAi@rIANKjBYnEG~@Gv@AXYpEGt@e@tHATC^CXEv@KbBEj@Gz@ANGfAOzBEl@AZGv@KlAEh@I`AMnAOzAE`@E\\Gf@APEXCNK|@EVGd@M|@Ip@[nBW~AKh@GV?DGTEXGXGX?BGTCRADGXCHKh@Or@On@IZI\\[zAc@jB[tACLGXMj@CLGTABCNGX[rAETMf@Qx@g@xBMh@Kf@U~@Kf@ENGVOt@I\\Qv@GZOp@K^Ml@Kd@ABKb@Op@Ib@GRERYnAABI`@S|@W|@Md@CHABCJITMf@CFIVYz@]~@Sf@GNKVQb@ENQ^e@lAa@`A[v@GRk@vAa@`Ae@jA_@bAQ`@IVGNIVKZCJQd@ELW|@K^GVOj@ENQr@AFK`@I`@Kd@ADIb@Kf@?@Ib@Mr@Kt@G\\Ih@AF?DIh@CPGj@Gf@APCTMpAEh@C\\?HCd@KdBEfAAVATCbA?T?RAj@Ax@?J?J?j@?@?F?V?J?B?h@@^?Z@t@D~A?LDz@Br@B^Dl@HjAH~@@RBNB^Df@ZzCj@vF\\fDt@pHPbBb@jETxBj@vFRlBz@hIJfARjBHv@LrAHv@D`@Db@^lD`@~Df@|Eh@pFNvAZ|CDd@b@hEx@bIFj@Dd@RdBZfDFj@rArMb@lETvBPhBd@nEn@hGh@rFJx@hAfLVbCHr@n@rGdAbKr@hHPbBLpANlAFt@Ht@LlAHt@LpARnBLhAPfBHr@PjBZ`DDVd@vEZ|CZ~CFf@H~@BTRpBj@lFLnAPfBHt@Ht@RrBPdBBNHx@ZxCFr@Hv@RjBPbB\\dDFn@dBxP@Fd@zErBfS@JVbCLlAhCfW~BhUv@|Hn@bG\\hD`@xDv@fInDr]RnBBNFj@PhBRpBFj@\\bDl@bG~@hJf@|EXhCDb@b@jERfB`@dDVtBR`BTzATfB\\bCT`B`AjGRjARlAn@tD`@|Bd@fCNr@xA~HvI~d@XrAp@rDXvAb@bCzA|H`BxIxAzHxBlLpBnKn@hDBLh@tCdArFpAdHzA|HvBfLlDdR|AfIrAhHvAvHf@lCl@~Cz@rEr@xDbAlFXvADRl@`D|@zEZ`BxAxHjAlGZfBJh@x@dEZ`B@Hl@~CFZr@dDj@fC\\tAp@lCNd@t@lCb@tARp@Xz@Z`At@rBFRN`@@BRd@Vt@d@lAn@xAd@fAd@fAn@tAh@hA|A|CdBbDTb@LVhC~E`CpE`AlBhEfI`ExHXh@jBlDp@nA|AvC^p@lA~B`AhB`AhBhAxBP\\BBRb@fBdDvCxFpCnFxApCt@rATb@LTdC~EdB`DLVxBbErAfCLVfCxEvGhMVd@xBbEbFpJfAvBnA~BdHzMrJ|QtFpKFHlBpDlBpDx@|AfMbVvCvF`@v@vNpXj@fAnQ~\\|EfJ|@`Bt@xAXh@fAtBXh@|@`BjA|Bx@|At@vAr@rAbAnBl@hAv@xA|@bBPZr@tA`AhBz@`Bz@~A~AzCr@tAdApBjAvBBDx@zAb@x@d@v@f@z@d@t@v@nAh@t@h@x@n@~@n@|@TXBDz@fAh@r@VZ^b@NRtAdB~BvCbAlAzAjBDDbAjAlA|A^d@Z\\bBrBdC`Dn@v@nBbCDFTVTXDFv@~@Z`@Z^d@l@zCvDZ^Z^?@j@p@f@n@~BrCd@j@HJxCtDdApAX\\`DrD`BbBrAtAlCdCzBnBpCtBbD~BnBnAnCbBfDhB`EjBvB|@hEdB`C~@hBp@hCbAhCbA`DtAjCjArBhAbAn@JF\\X\\VxAlART~@v@Z^DBv@z@`@d@ZZRXRTj@t@^h@DHPVRVZh@NT\\l@HNh@`ATb@NZr@|A~@~Bd@rATp@DLHVBFJ`@FPPp@Pn@Nn@XjANr@Lp@Lv@Nz@RvANhABTd@dEXbC@DDd@Fj@Fh@Jz@Fj@Fj@Hj@Fh@D^@JDZ@NBVBRHj@BVBRFh@@DDd@?@PtAFh@PvAb@`ERdB@FFj@XbCHt@@HD\\NzAJjAN`BNxBHxAPlD?BBj@D~@D`A?NB\\DnAJnCTrGDvALdDF`BXxGHvBFlBVhHDfAPvEVvGH`CJlCN~D\\bJTtGL|CPjFBv@Dv@@\\VjGLtDTvGD|@?P?@@N@J?NDz@DrADx@Br@@RHpAFz@Ft@Fp@T|BBP@NDXBLXrB@Hb@`CH\\@DXvANn@Rx@j@tBLd@DLBFNd@l@fB@FXv@p@bBr@|A\\p@h@hAZj@`@v@V^rAtBl@|@nA`Bh@n@t@x@?@t@x@PRFFZ\\v@x@PRlBrBr@t@VZXXxB~BbAfAbAdA|DfE@@jBrB@?dBlBtHhIzCbD|A`Bd@h@~@dAjC|CvCfDBDz@`AdBnBr@z@FF\\^dCtCNPJJZ^lAxAvFrGnGnHz@~@PRX\\rGvHRTZ\\fN~OX\\Z\\hD|D^d@LL\\^v@~@bBnBdAlAHJvBdCz@`ADFnAxAzAbBrA~AHF|DtE`CnCzDrEnAvAJJb@f@jCvC`JpKTTx@bAXZh@l@`AjAZ\\xCjDr@v@tBdCvDhEfMzNX\\bF~FjD`E|QbTLLzIdKd@j@lD|DlGnHl@p@BBh@n@lC|CnAxAlEfF|@bAxA`BpLdNvA`BpFnGv@z@nAxArA|AtB~BBDTVj@n@v@~@|BhCpArAjBlBrBpBjAfApAjAvCfCxBhBVRbAt@rAbAhDbCtBxAjBrA^V@@bBlA|AfAdCdB~B`BzB~AnA|@v@h@vB|APLv@h@bCbBPL~B`BpBxAZRPL`@X`@X^XpCnBvCrBVRpE~CZTr@f@rBxAJFnBtA^Xd@Zx@j@lAz@v@j@^XhAz@v@l@h@b@vAlA`@^PNPNPNxBtBNP`@^PRp@r@p@t@h@l@d@h@fArAj@p@h@t@NPNRNPn@~@hBhCh@x@LRNTpArBR^PZT^NVpBfDdDvFrA|BdAhBdBtCXf@b@p@jEnH^n@Xf@v@rAbDpFn@fAbBrCzAjCzAfCn@fAxAdCV`@JRz@vAzBxDb@p@v@vA`@n@tA~BdAfB\\l@|BzD`@p@dCfEVb@pBjDl@bAV`@h@~@xJnP`FnItDlGfFvIpCxEhBzC`BrCzFrJvDtGRXtC`FJNFJz@xAT`@zAfCz@xAf@x@BFb@r@bAdB~@|ABDT`@PXrBjDPZNV`A~ANVJPhAlBzAfC|@zAzChFzAhCR\\fAhBn@bA`AxALR\\f@\\f@NRX^b@l@Zb@p@z@nA|AJNfApAxDxEdD~D`CvCnA|AnB`CnChD\\`@vCpD`@d@jAxAX\\`@f@~BrClB|BxAlBnJjLLN~D`FpA~AJNnAzApBbC|AjBlBbC~AlBpBdCn@v@~BrCxBlCvDtE\\`@|BrC~BvC~BrClDjE|CtDlRhVX\\rNvQpEzFnCjD|DbFjAxAjErFzFlHlFzGdFrGnA~A~C~DnA~AjB~B~@lAlA|AvAhBX^jB|BNRvAhB`ApAHLj@t@`BbC`CvDRXh@`AlAxBx@zAz@fBl@lAt@`BfAfCf@nAh@rA|HrRb@fAd@fA`CbG`@bAFLfBpEz@pBvAjDnC~G\\x@\\|@bB`EBHNZd@jA~@~BrB`Fh@rAlBzEdCfGBFdCfGN^BD|GvPvBjF~Mp\\`Nv\\zDtJdCfGdIbS|@xBzDpJrBdFdEdKhBnErMx[Rd@~A|DPd@dFdMjDtIrB`Fj@xAdAhCRb@lAvCPd@Xp@~BzFr@fBZv@`@bAp@~Al@|Al@tAzAnDZr@@BVh@p@vAd@~@`@z@r@rAT`@dAhBJRdAdBj@|@fAbBLPjAbBjA~Al@x@Z`@DD~@fA^d@LP`AfApAvAbAdApAvA|C`DXZb@d@^^dBhBhBnBXX~@dApArAFFLLXZfAjA`AbAzA|AhAlAZ\\bDjDXZnBrBVVBBlDvD`AbAb@b@X\\pArA`BdBLLzA~Al@n@lBpBzCbD`CfC|BbC~BdCr@t@~AbBFFn@p@zEdF`BbBxB~BZ\\ZZjAnAdEnEp@r@rBvBbAfA`AdARR`BbBPPHHnAtA`CjCvAxAHHdAhA\\Z~A|A~@x@~AtALJNLZVl@f@hA|@`Ar@XRxAbAn@b@|A`APJB@x@f@NHbCrA~Az@bExB~@h@HD^PJFrAr@D@xEdCtEbCf@VdAl@XNdIhEb@RpCxAvAv@zAx@z@b@ZP|BlAfAj@p@^hB~@xC|Aj@Z^R@?~QtJ`@T^RJFTJ`DdBrEbC`Bz@HDjCtAjB`AHD~CbBLDRLvK|FdOzHlDhBzDrBxC~AdG~C`@T`@RlE~BrBdA^RPJzDrBtH~DpDlBlBbAvKzFfFjChDfB^R`EvB`O|HzSxKpFrCzEfCXNDBvGjDpNrHzBjA`@R~CbB^Rp@^FBJFt@^XNj@\\~BlA|Ax@|Ax@xCzA~BlAp@\\f@XrAr@jCvAdExB|C`BnAn@LHRJl@ZzAv@d@Tb@Tb@TjDjBB@fFnCNFr@^@?NHtAt@bAh@NHRHLHB@^Rv@`@jDhB\\PhAn@tC|AbKlFTNh@V^Rr@^`@R~BlA`DdBpAp@zAx@bBz@f@V`A^z@Z~@X~@Vj@Jl@Lf@Hj@Hj@Fj@Dl@Fj@BV@T?V@x@?V?xCBnB@xEFlCLv@FZBxC`@~Cn@nAXnA^dA\\LFRFHBbA`@`Ab@PH|@b@XNh@X@@bAj@~AbAh@`@fBnAz@p@tAbAz@p@z@n@z@p@t@h@v@l@fAv@bAv@fAx@`At@lA~@~ErDbDbCj@b@\\V\\VVRVRtElDhBtAzElDvGbFjBvADBZV@@f@`@p@f@~@p@p@h@tB|Ad@\\p@d@p@f@lBxArEjD~AjAbGpElBzA|I|Gx@n@dAv@dAv@xAnAjAdA^`@BBf@h@`@d@`@b@f@n@\\`@PVTZh@v@Zd@LRT\\x@pAZl@^p@R`@Vh@Zr@hAhCbA|Bf@lAv@hBvB~E~@tBBF~@zBb@~@\\v@p@zA?@b@~@Vj@`@x@h@fAn@lAVd@n@hAR^nAtBPXh@~@bAxAl@`At@`Av@dARXt@`Ar@~@dAnAZ^bAhAlApAJJfAfAZZZXb@d@b@`@h@f@h@h@BB`B~A|EtEpArAx@~@j@r@l@x@|@pAf@p@v@nATb@z@`Bb@v@p@xAj@rAf@rAf@vA^jAHRFRBLHTHVLh@Nf@l@|Bj@rB~A|F?@`AlDfA`EV|@vBbIf@jB\\jA~@fDZjANl@\\nAFTVz@Tx@XfABHBHBH\\pA@DL`@VdANf@L`@Nn@|@`D\\nA\\rAl@xBhAfENf@?@Lb@^tAz@`DRt@z@~CHZ|AtFl@xBdBlG^tA~@jDvDbNn@fCNj@d@dBfG~T@DtBxH^tANf@|HpYTv@~A`G^tA^tAjDhMl@zBV`APj@Nj@jFrRlDrML`@FTDPV|@DRdBjGDNbHlWbHfWl@vBr@jCbArDxBbIlAtEnCzJdA~D|BlIl@vBf@lB|AvFb@~ATv@^vAb@`Bf@fBn@~Bv@rCDPv@vCnBhHz@zC^vA\\nA?@@D`@vAt@hCd@~ATv@`BdGf@lBFTHZb@`BPp@BBJb@@D`@|AL`@bArDPn@Jb@dDtLjAhEnAtElDjMnBjHx@|CpArExApFnAvENl@FPt@xCpApEh@hB^tA~@fDZlA`@zAv@pC|@dDh@nB@Df@jBTv@^tATx@^tARp@Tz@zAvFDNBJJZ?@@BPp@JZFVLf@FRv@nC\\nARx@\\nATv@J`@v@tCx@|CDJ@B?@DPBHr@fCVbAd@~ARv@ZhAh@nBX`ADRJZJ^Nf@Lf@n@tBZ~@Tr@Rl@Rl@LZVt@JVL\\Nb@HT`@bAd@fAj@pA?BTb@f@hA@Dd@bA\\r@f@bATd@j@dAl@fAR^bAfB@@T^@BJPx@pAl@|@h@x@FHh@v@|AxBvAjBr@`Ar@~@\\b@BDLLjAzAx@hARTRXbC`DbC~CTZjBbCxAlBJNDDFHDDh@r@z@hAzBvChKdNhDlE~B|CdBzBdAtArCrDf@p@pBhCjA|ARVvAjB@BTZX^l@v@hAzArAfBd@n@nBhCZ`@X^Z`@PRrAdBV\\X^VXZb@Z`@hAzA\\b@TXp@|@nA`Bp@|@p@|@NTRT|[xa@fHnJV\\V\\d@n@`@f@|ApBX^\\b@lCjDTZh@t@~FvHRZv@dAvAjB~ArB`BxBhB~BX^zAnBPTfAxAvBpCb@j@xAlB~AtBVZl@r@DDbAhAhBfBJL\\ZRPXVzBhBfAv@tA~@TPlBvAj@\\~@j@fAr@nCfBpExCr@f@zCpBrA|@ZRvA~@dAp@TNRL`BhApBrAjCdB^VxA~@zAbAZRl@`@?@^VB?@Bn@b@|A`Af@\\|AbA`BfA|AfAPLr@f@XPn@`@DDhAt@HFj@b@NHrCjBpAz@x@h@tAbA`@XpAx@bBhAbFfD~CrBrEzCfAr@fFfDlGdElAv@vD`Ch@^NHDBBBpAz@pCjBrAz@n@b@`CrA|At@zAp@`Ab@z@\\F@XLn@RnAb@lMhEVJtBx@jC`AdA^JDPFj@Pl@TNDZP\\Nl@Xv@f@r@`@BB\\VpA~@^Vd@\\TP\\V@?ZVnDlCDBXTRLXPvAv@bAd@|@\\VJd@ND@`@LLBLDD@PD`BXXD`@Fh@FpAJjADL?P@P?d@?h@?`B?dA?D?rA?~@@V@d@Df@Fx@HVD`@HZFFBTFPDVHt@VFBJDTJ\\Rj@Zr@b@r@f@@@PLRLB@VR@@RN"
                     },
                     "start_location" : {
                        "lat" : 38.5803074,
                        "lng" : -112.5978277
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2794
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 168
                     },
                     "end_location" : {
                        "lat" : 36.1748123,
                        "lng" : -115.1422052
                     },
                     "html_instructions" : "Take exit \u003cb\u003e42\u003c/b\u003e to merge onto \u003cb\u003eI-515 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-93 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-95 S\u003c/b\u003e toward \u003cb\u003ePhoenix\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "ypy{Ezix}TDTBJBFFJT\\R^NTDFHPLTPZTh@FNDJL^d@nAFNDJBFZx@n@|AFPPb@Pd@@@N`@@BLXBHTb@Rd@^v@HP~@fBZl@z@zA@@DDZj@n@bAJNJPLPT^@@RZBBz@zAT^FJTb@NXp@nAJJBHJN`@v@NZPd@@?HVN`@BHBH@@Tp@Tn@HTn@nB@FFPR`@`@d@DBTPHBBBPHHDD@THD?D?J@F?N?X?BAD?TELEJCJGFEFEPK@A@CRQFI@CJQDGHQJYHUBQFc@@E?A@I?A?I@I?E?E?C?Q?MAOAIESGa@ECMYSk@Yg@Sa@GKMWWa@O]Qa@GSKUAGAACCGCa@iBWsA[{AYsAAIUiAMi@c@wBAC?AOS]eC?AAACQOaAk@iDKi@QiAQgAKcACYC[Cc@C}@?[Au@?w@@m@Bg@?S@Q@o@Fo@BY@KBMD[?GHc@@CJq@Ns@Je@Lc@Pm@FSHS"
                     },
                     "start_location" : {
                        "lat" : 36.1807674,
                        "lng" : -115.145423
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 344
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 36.1736307,
                        "lng" : -115.138742
                     },
                     "html_instructions" : "Take exit \u003cb\u003e75A\u003c/b\u003e for \u003cb\u003eLas Vegas Blvd\u003c/b\u003e toward \u003cb\u003eCashman Ctr\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qkx{Exuw}TLIBABEPe@Zw@?AJWBEb@mA@EL]?A?ALc@@CF[@C@C?ABOH_@@GLeA?ADc@Ba@@Y@G@W@K@EDYDS@GBMBK"
                     },
                     "start_location" : {
                        "lat" : 36.1748123,
                        "lng" : -115.1422052
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 261
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 36.1715946,
                        "lng" : -115.139217
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eDowntown LV\u003c/b\u003e and merge onto \u003cb\u003eLas Vegas Blvd N\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "edx{Eb`w}TFKFQBGDIBGBE@AFGFCDCBAF?FAVBrD~A|BnA"
                     },
                     "start_location" : {
                        "lat" : 36.1736307,
                        "lng" : -115.138742
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 116
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 36.1711031,
                        "lng" : -115.138073
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eStewart Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mww{Ebcw}THYd@sAFQh@eB"
                     },
                     "start_location" : {
                        "lat" : 36.1715946,
                        "lng" : -115.139217
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 293
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 93
                     },
                     "end_location" : {
                        "lat" : 36.1687446,
                        "lng" : -115.1395258
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN 6th St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ktw{E|{v}Tr@^bAd@nB`AbAj@j@\\PHVNtAv@"
                     },
                     "start_location" : {
                        "lat" : 36.1711031,
                        "lng" : -115.138073
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 111
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 36.1692048,
                        "lng" : -115.1406173
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Fremont St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sew{E`ew}TOb@Wt@Of@IRENSr@"
                     },
                     "start_location" : {
                        "lat" : 36.1687446,
                        "lng" : -115.1395258
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 106
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 36.1700501,
                        "lng" : -115.1400843
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eLas Vegas Blvd N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ohw{Ezkw}Tc@W[Q[QQIUKe@Y"
                     },
                     "start_location" : {
                        "lat" : 36.1692048,
                        "lng" : -115.1406173
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "wh{jGflveNdgLwbPhpR{_Fz~GmzDdpDpdH`{Hph^pyUteh@rnIvnq@zsExvWfhM~xLlpSvlZhh[t{c@xoPjkXlcEtta@hmHtfYdrX`t[f}_@jur@`cOvib@lmEr~NwlJ~fIe`Elok@{vFnc~@gs@pkJ}}HvtHmzBx|WpZhhH~fK`oIveOn~Dh}PntEfkNllYre]ra_@tpOvxCh`]d|Qrho@fm\\jtGndKkCxpMbzA~gLdmUmd@zuIrqLdfLflTbfClvm@r_\\tx~@`zRxdbAvhIv`]bgObnOt~Kn{UvD~_^zwKndIfy]raMbwMzgObqWvaIlh`@|s@|kp@d}@`dJr{HnuBb}SttGhxJfCh`TloKthYjd@j_OaBhw]pvg@kLbrVbju@bdPrcnAznI|}j@dLpet@dhO`mpAvtg@t|rBz`Slkp@||MjynA~w`@nj{AvgGjnk@l[bds@_z@|umAieIbc}ASvwe@yiHzdc@ieD`wr@udGjpk@elEbreB~aEx`}@{xAn_iA{pHzy`CyxGvqcC_qApqMjhHjt@dqGpkCqh@rpNzaGxaF{[f_TyjC~oc@|{Dl|^alA`sk@}aJzfO{nAvaMakErxOj|@taJudCheHl`@~wZes@lcg@an@zy}BraXnxlBjuH|}cAv|@hlgAbxDxkzA__D~ufCarTvuyB{nFlqp@m^fpb@ekLtv[_lCvd}Auhe@lea@usHfiKcF`|\\x`F~g|@biBhahCryFfp{FxgAhy\\q`Gbb]e~_@~{Wuzh@n`b@ohI|u|@{sCx|aAgpBx_h@rsIn|K~iDdr`@wfAfrVezGzpg@`eChaYvjFl|HpRngKjbBhh\\~bL~nWxsM`iKp~DbhEy`Ef{FksN|pKueE~_FdoAdxQpDloRcqH`kZctChgMpnI|eX~a@j`_@~_Ojui@_Rp_d@jgHpbkAj~Ldwm@zx_@lfc@rmNbdDzfMdjJh{Axiv@q`TjzbAziExk]x{\\n{`@b}R`f^ihC~wz@fwEftf@{mFj_TwcBhsQvtEfra@lX~vXj|FzlYv|HtcuAhbFz~g@lrI`zYesCdiQ_lNbiLm}GzbOajBpdWuUpqUvtErwEjaObu\\bd\\dxYfbJbnHdrClfOxmAttTcvFn}RldFzeKvtO~nAt{a@d{Ed_a@g|Crjv@|`j@|nMfm\\tnPtxNtqKvcLziQtcKt_XtiEnoi@d|a@f}P`d^nwS`dPjgKlnb@jzUrcr@pnE|fRww@ddLhpVxzy@tlj@~vu@naUlfNn}IlfY`cQxdLpLzF"
         },
         "summary" : "ON-401 W",
         "warnings" : [],
         "waypoint_order" : [ 0, 1, 2 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
