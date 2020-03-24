# LoadBalancer
Технопарк. HighLoad. Балансировка нагрузки

## Задание:

* Выбрать облачный сервис для хостинга проекта (MCS, AWS, Digital Ocean, Google Cloud, Windows Azure, VScale, etc)
* Выбрать достаточно медленный бэкенд (проект на Django, форум, etc), на который будем балансировать нагрузку, поднять не менее 3-х серверов
* Выбрать метод балансировки (L4 или L7), алгоритм и конкретное программное решение (nginx, haproxy, envoy, ATS, etc)
* Выбрать систему сбора и отображения статистки (графиков)
* Настроить load balancer: таймауты и алгоритм отключения проблемных бэкендов для выбранного бэкенда
* Настроить сбор и отображение необходимых системных и пользовательских метрик (обязательный минимум: график RPS и CPU)
* Продемонстрировать распределение нагрузки между бэкендами (графики RPS)
* Продемонстрировать перераспределение трафика при отключении одного бэкенда
