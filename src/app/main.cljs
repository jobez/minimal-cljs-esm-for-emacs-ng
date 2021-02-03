(ns app.main
  (:require [datascript.core :as d]))



;; Implicit join, multi-valued attribute


(def value-a 1)

(defonce value-b 2)

(declare lisp)

(defn main! [parsed-org-json lisp]
  (-> (.parse js/JSON parsed-org-json)
      js->clj
      first
      clj->js))

;; (->> (let [schema {:aka {:db/cardinality :db.cardinality/many}}
  ;;           conn   (d/create-conn schema)]
  ;;       (d/transact! conn [ { :db/id -1
  ;;                            :name  "Maksim"
  ;;                            :age   45
  ;;                            :aka   ["Max Otto von Stierlitz", "Jack Ryan"] } ])
  ;;       (d/q '[ :find  ?n ?a
  ;;              :where [?e :aka "Max Otto von Stierlitz"]
  ;;              [?e :name ?n]
  ;;              [?e :age  ?a] ]
  ;;            @conn))
  ;;     (clj->js ))
